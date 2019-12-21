const warriorsGames = [{
    awayTeam: {
        team: 'Golden State',
        points: 119,
        isWinner: true
    },
    homeTeam: {
        team: 'Houston',
        points: 106,
        isWinner: false
    }
},
{
    awayTeam: {
        team: 'Golden State',
        points: 105,
        isWinner: false
    },
    homeTeam: {
        team: 'Houston',
        points: 127,
        isWinner: true
    }
},
{
    homeTeam: {
        team: 'Golden State',
        points: 126,
        isWinner: true
    },
    awayTeam: {
        team: 'Houston',
        points: 85,
        isWinner: false
    }
},
{
    homeTeam: {
        team: 'Golden State',
        points: 92,
        isWinner: false
    },
    awayTeam: {
        team: 'Houston',
        points: 95,
        isWinner: true
    }
},
{
    awayTeam: {
        team: 'Golden State',
        points: 94,
        isWinner: false
    },
    homeTeam: {
        team: 'Houston',
        points: 98,
        isWinner: true
    }
},
{
    homeTeam: {
        team: 'Golden State',
        points: 115,
        isWinner: true
    },
    awayTeam: {
        team: 'Houston',
        points: 86,
        isWinner: false
    }
},
{
    awayTeam: {
        team: 'Golden State',
        points: 101,
        isWinner: true
    },
    homeTeam: {
        team: 'Houston',
        points: 92,
        isWinner: false
    }
}
];


const homeGame = (game, name) => {
    const { homeTeam: homeT } = game;
    return homeT.team.toUpperCase() === name.toUpperCase();
};

const getTeamData = (game, teamName) => {
    const { homeTeam: homeT, awayTeam: awayT } = game;
    return homeGame(game, teamName) ? homeT : awayT;
};

const getScoreLine = (game, teamName) => {
    const { homeTeam: homeT, awayTeam: awayT } = game;
    let curLi = document.createElement("li");
    let liHtml = `<b>${homeGame(game, teamName) ? `${teamName} Home Game` : `${teamName} Away Game`}</b>`;
    let teamsText = `${awayT.team} @ ${homeT.team}`;
    let scoreText = awayT.points > homeT.points ? `<b>${awayT.points}</b>-${homeT.points}`
        : `${awayT.points}-<b>${homeT.points}</b>`;
    curLi.innerHTML = liHtml + ` --> ${teamsText} ${scoreText}`;

    let curTeam = getTeamData(game, teamName);
    curLi.classList.toggle(curTeam.isWinner ? "won" : "lost");

    return curLi;
};

function makeChart(gameData, teamName) {
    const parentUl = document.createElement("ul");
    for (let curGame of gameData) {
        parentUl.appendChild(getScoreLine(curGame, teamName));
    }
    return parentUl;
}

document.getElementById("gs").appendChild(makeChart(warriorsGames, "Golden State"));
document.getElementById("hr").appendChild(makeChart(warriorsGames, "Houston"));