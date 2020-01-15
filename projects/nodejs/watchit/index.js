#!/usr/bin/env node

const chokidar = require("chokidar");
const debounce = require("lodash.debounce");
const program = require("caporal");
const fs = require('fs');
const { spawn } = require("child_process");
const chalk = require("chalk");

program
    .version("0.0.1")
    .argument("[filename]", "Name of a file to execute")
    .action(({ filename }) => {
        filename = filename || `${process.cwd()}/index.js`;

        fs.exists(filename, (exists) => {
            if (!exists)
                throw Error(`File "${filename}" could not be found`);
            else
                console.log(`Found File ${filename}`);
        });

        let proc;
        const start = debounce(() => {
            if (proc) {
                console.log(chalk.red(`>>>> Detected change, killing already running instance, PID: ${proc.pid}`));
                proc.kill();
            }
            proc = spawn("node", [filename], { stdio: "inherit" });
            console.log(chalk.green(`>>>> Starting, PID: ${proc.pid}`));
        }, 100);

        chokidar.watch(".")
            .on("add", (event, path) => { start(); })
            .on("change", (event, path) => { start(); })
            .on("unlink", (event, path) => { start(); });
    });

program.parse(process.argv);

