#!/usr/bin/env node

//Get File System Node Module
const fileSystem = require("fs");
const chalk = require("chalk");
const path = require("path");


const targetDir = process.argv[process.argv.length - 1] || process.cwd();
console.log(targetDir);
//printDirectoryEntires(targetDir);
//printDirectoryEntiresAsync(targetDir);
printFileNameIdeal(targetDir);

// Print a list of Directory entries given the path
// Async
function printDirectoryEntires(lookupPath) {
    fileSystem.readdir(lookupPath, { withFileTypes: true },
        //callback to print the entries
        (error, entries) => {
            if (error) {
                console.log(`Error while listing: ${error}`);
                return;
            }

            for (let entry of entries) {
                //console.log(entry.name, ": ", entry.isFile() ? "File" : entry.isDirectory() ? "Directory" : "Something else");
                //console.error(entry.isDirectory() ? "Directory" : "Something else")
                if (entry.isFile()) {
                    console.log(entry.name);
                }
            }
        });
}

//Sync
async function printDirectoryEntiresAsync(lookupPath) {
    const entries = await fileSystem.promises.readdir(lookupPath, { withFileTypes: true })
        .then((entries) => {
            for (let entry of entries) {
                console.log(entry.name, ": ", entry.isFile() ? "File" : entry.isDirectory() ? "Directory" : "Something else");
            }
        });
}

function printFileNameIdeal(lookupPath) {
    fileSystem.readdir(lookupPath, async (error, files) => {
        try {
            if (error) {
                console.log(error);
                return;
            }

            let fileStatPromises = files.map(fileName => fileSystem.promises.lstat(path.join(targetDir, fileName)));
            let fileStats = await Promise.all(fileStatPromises);

            for (let i = 0; i < fileStats.length; i++) {
                //console.log(files[i], fileStats[i].isDirectory(), fileStats[i].isFile());
                if (fileStats[i].isDirectory()) {
                    console.log(chalk.blue(files[i]));
                }
                if (fileStats[i].isFile()) {
                    console.log(chalk.bold(chalk.white(files[i])));
                }
            }
        }
        catch (exception) {
            console.log(exception);
        }
    })
}