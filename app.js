let teams = [
    {name: 'Ducks', place: 'Anaheim', conference: 'West', division: 'Pacific', wins: 1, color: 'orange', logo: 'logos/ducks.png'},
    {name: 'Coyotes', place: 'Arizona', conference: 'West', division: 'Central', wins: 1, color: 'maroon', logo: 'logos/coyotes.png'},
    {name: 'Bruins', place: 'Boston', conference: 'East', division: 'Atlantic', wins: 1, color: 'yellow', logo: 'logos/bruins.png'},
    {name: 'Sabres', place: 'Buffalo', conference: 'East', division: 'Atlantic', wins: 1, color: 'blue', logo: 'logos/sabres.png'},
    {name: 'Flames', place: 'Calgary', conference: 'West', division: 'Pacific', wins: 1, color: 'red', logo: 'logos/flames.png'},
    {name: 'Hurricanes', place: 'Carolina', conference: 'East', division: 'Metropolitan', wins: 1, color: 'red', logo: 'logos/hurricanes.png'},
    {name: 'Black Hawks', place: 'Chicago', conference: 'West', division: 'Central', wins: 1, color: 'red', logo: 'logos/blackHawks.png'},
    {name: 'Avalanche', place: 'Colorado', conference: 'West', division: 'Central', wins: 1, color: 'maroon', logo: 'logos/avalanche.png'},
    {name: 'Blue Jackets', place: 'Columbus', conference: 'East', division: 'Metropolitan', wins: 1, color: 'dark-blue', logo: 'logos/blueJackets.png'},
    {name: 'Stars', place: 'Dallas', conference: 'West', division: 'Central', wins: 1, color: 'green', logo: 'logos/stars.png'},
    {name: 'Red Wings', place: 'Detroit', conference: 'East', division: 'Atlantic', wins: 1, color: 'red', logo: 'logos/redWings.png'},
    {name: 'Oilers', place: 'Edmonton', conference: 'West', division: 'Pacific', wins: 1, color: 'orange', logo: 'logos/oilers.png'},
    {name: 'Panthers', place: 'Florida', conference: 'East', division: 'Atlantic', wins: 1, color: 'red', logo: 'logos/panthers.png'},
    {name: 'Kings', place: 'Los Angeles', conference: 'West', division: 'Pacific', wins: 1, color: 'white', logo: 'logos/kings.png'},
    {name: 'Wild', place: 'Minnesota', conference: 'West', division: 'Central', wins: 1, color: 'dark-green', logo: 'logos/wild.png'},
    {name: 'Canadiens', place: 'Montreal', conference: 'East', division: 'Atlantic', wins: 1, color: 'red', logo: 'logos/canadiens.png'},
    {name: 'Predators', place: 'Nashville', conference: 'West', division: 'Central', wins: 1, color: 'yellow', logo: 'logos/predators.png'},
    {name: 'Devils', place: 'New Jersey', conference: 'East', division: 'Metropolitan', wins: 1, color: 'red', logo: 'logos/devils.png'},
    {name: 'Islanders', place: 'New York', conference: 'East', division: 'Metropolitan', wins: 1, color: 'orange', logo: 'logos/islanders.png'},
    {name: 'Rangers', place: 'New York', conference: 'East', division: 'Metropolitan', wins: 1, color: 'blue', logo: 'logos/rangers.png'},
    {name: 'Senators', place: 'Ottawa', conference: 'East', division: 'Atlantic', wins: 1, color: 'red', logo: 'logos/senators.png'},
    {name: 'Flyers', place: 'Philadelphia', conference: 'East', division: 'Metropolitan', wins: 1, color: 'orange', logo: 'logos/flyers.png'},
    {name: 'Penguins', place: 'Pittsburgh', conference: 'East', division: 'Metropolitan', wins: 1, color: 'yellow', logo: 'logos/penguins.png'},
    {name: 'Sharks', place: 'San Jose', conference: 'West', division: 'Pacific', wins: 1, color: 'teal', logo: 'logos/sharks.png'},
    {name: 'Kraken', place: 'Seattle', conference: 'West', division: 'Pacific', wins: 1, color: 'light-blue', logo: 'logos/kraken.png'},
    {name: 'Blues', place: 'St. Louis', conference: 'West', division: 'Central', wins: 1, color: 'dark-blue', logo: 'logos/blues.png'},
    {name: 'Lightning', place: 'Tampa Bay', conference: 'East', division: 'Atlantic', wins: 1, color: 'blue', logo: 'logos/lightning.png'},
    {name: 'Maple Leafs', place: 'Toronto', conference: 'East', division: 'Atlantic', wins: 1, color: 'dark-blue', logo: 'logos/mapleLeafs.png'},
    {name: 'Canucks', place: 'Vancouver', conference: 'West', division: 'Pacific', wins: 1, color: 'green', logo: 'logos/canucks.png'},
    {name: 'Golden Knights', place: 'Vegas', conference: 'West', division: 'Pacific', wins: 1, color: 'gold', logo: 'logos/goldenKnights.png'},
    {name: 'Capitals', place: 'Washington', conference: 'East', division: 'Metropolitan', wins: 1, color: 'red', logo: 'logos/capitals.png'},
    {name: 'Jets', place: 'Winnipeg', conference: 'West', division: 'Central', wins: 1, color: 'gray', logo: 'logos/jets.png'}
];

//handles to lists
let atlanticRank = document.querySelectorAll(['.atlantic li']);
let metropolitanRank = document.querySelectorAll(['.metropolitan li']);
let centralRank = document.querySelectorAll(['.central li']);
let pacificRank = document.querySelectorAll(['.pacific li']);
let westRank = document.querySelectorAll(['.western li']);
let eastRank = document.querySelectorAll(['.eastern li']);
let allRank = document.querySelectorAll(['.all li']);

let body = document.querySelector('body');

//handles to the option elements
let option1 = document.querySelector('.team1');
let option2 = document.querySelector('.team2');

//filter by conference
let eastConference = teams.filter(team => team.conference === 'East');
let westConference = teams.filter(team => team.conference === 'West');

//filter by division
let atlantic = teams.filter(team => team.division === 'Atlantic');
let metropolitan = teams.filter(team => team.division === 'Metropolitan');
let central = teams.filter(team => team.division === 'Central');
let pacific = teams.filter(team => team.division === 'Pacific');

let team1 = teams[0];
let team2 = teams[0];

//function for results
let rank = function(){
    atlantic.sort((a,b) => b.wins - a.wins);

        let aCount = 0;
    atlantic.forEach(team => {
        atlanticRank[aCount].innerHTML = team.place + " " + team.name + " " + team.wins;
        aCount++;
    });

    metropolitan.sort((a,b) => b.wins - a.wins);

        let mCount = 0;
    metropolitan.forEach(team => {
        metropolitanRank[mCount].innerHTML = team.place + " " + team.name + " " + team.wins;
        mCount++;
    });

    central.sort((a,b) => b.wins - a.wins);

        let cCount = 0;
    central.forEach(team => {
        centralRank[cCount].innerHTML = team.place + " " + team.name + " " + team.wins;
        cCount++;
    });

    pacific.sort((a,b) => b.wins - a.wins);

        let pCount = 0;
    pacific.forEach(team => {
        pacificRank[pCount].innerHTML = team.place + " " + team.name + " " + team.wins;
        pCount++;
    });   

    westConference.sort((a,b) => b.wins - a.wins);

        let wCount = 0;
    westConference.forEach(team => {
        westRank[wCount].innerHTML = team.place + " " + team.name + " " + team.wins;
        wCount++;
    }); 

    eastConference.sort((a,b) => b.wins - a.wins);

        let eCount = 0;
    eastConference.forEach(team => {
        eastRank[eCount].innerHTML = team.place + " " + team.name + " " + team.wins;
        eCount++;
    });
    
    teams.sort((a,b) => b.wins - a.wins);

        let allCount = 0;
    teams.forEach(team => {
        allRank[allCount].innerHTML = team.place + " " + team.name + " " + team.wins;
        allCount++;
    }); 
};
rank();

//generate function to set random teams
let generate = () => {
    team1 = teams[Math.floor(Math.random() * 32)];
    team2 = teams[Math.floor(Math.random() * 32)];
};

//to ensure that the teams will not be the same
while (team1 === team2) {
    generate();
};

//set options
option1.src = team1.logo;
option2.src = team2.logo;