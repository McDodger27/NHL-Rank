let teams = [
    {name: 'Ducks', place: 'Anaheim', conference: 'West', division: 'Pacific', wins: 1, color: 'orange', logo: 'logos/ducks.png', cups: 1},
    {name: 'Bruins', place: 'Boston', conference: 'East', division: 'Atlantic', wins: 1, color: 'yellow', logo: 'logos/bruins.png', cups: 6},
    {name: 'Sabers', place: 'Buffalo', conference: 'East', division: 'Atlantic', wins: 1, color: 'blue', logo: 'logos/sabres.png', cups: 0},
    {name: 'Flames', place: 'Calgary', conference: 'West', division: 'Pacific', wins: 1, color: 'red', logo: 'logos/flames.png', cups: 1},
    {name: 'Hurricanes', place: 'Carolina', conference: 'East', division: 'Metropolitan', wins: 1, color: 'red', logo: 'logos/hurricanes.png', cups: 1},
    {name: 'Black-Hawks', place: 'Chicago', conference: 'West', division: 'Central', wins: 1, color: 'red', logo: 'logos/blackHawks.png', cups: 6},
    {name: 'Avalanche', place: 'Colorado', conference: 'West', division: 'Central', wins: 1, color: 'maroon', logo: 'logos/avalanche.png', cups: 3},
    {name: 'Blue-Jackets', place: 'Columbus', conference: 'East', division: 'Metropolitan', wins: 1, color: 'dark-blue', logo: 'logos/blueJackets.png', cups: 0},
    {name: 'Stars', place: 'Dallas', conference: 'West', division: 'Central', wins: 1, color: 'green', logo: 'logos/stars.png', cups: 1},
    {name: 'Red-Wings', place: 'Detroit', conference: 'East', division: 'Atlantic', wins: 1, color: 'red', logo: 'logos/redWings.png', cups: 11},
    {name: 'Oilers', place: 'Edmonton', conference: 'West', division: 'Pacific', wins: 1, color: 'orange', logo: 'logos/oilers.png', cups: 5},
    {name: 'Panthers', place: 'Florida', conference: 'East', division: 'Atlantic', wins: 1, color: 'red', logo: 'logos/panthers.png', cups: 1},
    {name: 'Kings', place: 'Los Angeles', conference: 'West', division: 'Pacific', wins: 1, color: 'white', logo: 'logos/kings.png', cups: 2},
    {name: 'Wild', place: 'Minnesota', conference: 'West', division: 'Central', wins: 1, color: 'dark-green', logo: 'logos/wild.png', cups: 0},
    {name: 'Canadiens', place: 'Montreal', conference: 'East', division: 'Atlantic', wins: 1, color: 'red', logo: 'logos/canadiens.png', cups: 24},
    {name: 'Predators', place: 'Nashville', conference: 'West', division: 'Central', wins: 1, color: 'yellow', logo: 'logos/predators.png', cups: 0},
    {name: 'Devils', place: 'New Jersey', conference: 'East', division: 'Metropolitan', wins: 1, color: 'red', logo: 'logos/devils.png', cups: 3},
    {name: 'Islanders', place: 'New York', conference: 'East', division: 'Metropolitan', wins: 1, color: 'orange', logo: 'logos/islanders.png', cups: 4},
    {name: 'Rangers', place: 'New York', conference: 'East', division: 'Metropolitan', wins: 1, color: 'blue', logo: 'logos/rangers.png', cups: 4},
    {name: 'Senators', place: 'Ottawa', conference: 'East', division: 'Atlantic', wins: 1, color: 'red', logo: 'logos/senators.png', cups: 0},
    {name: 'Flyers', place: 'Philadelphia', conference: 'East', division: 'Metropolitan', wins: 1, color: 'orange', logo: 'logos/flyers.png', cups: 2},
    {name: 'Penguins', place: 'Pittsburgh', conference: 'East', division: 'Metropolitan', wins: 1, color: 'yellow', logo: 'logos/penguins.png', cups: 5},
    {name: 'Sharks', place: 'San Jose', conference: 'West', division: 'Pacific', wins: 1, color: 'teal', logo: 'logos/sharks.png', cups: 0},
    {name: 'Kraken', place: 'Seattle', conference: 'West', division: 'Pacific', wins: 1, color: 'light-blue', logo: 'logos/kraken.png', cups: 0},
    {name: 'Blues', place: 'St. Louis', conference: 'West', division: 'Central', wins: 1, color: 'dark-blue', logo: 'logos/blues.png', cups: 1},
    {name: 'Lightning', place: 'Tampa Bay', conference: 'East', division: 'Atlantic', wins: 1, color: 'blue', logo: 'logos/lightning.png', cups: 3},
    {name: 'Maple-Leafs', place: 'Toronto', conference: 'East', division: 'Atlantic', wins: 1, color: 'dark-blue', logo: 'logos/mapleLeafs.png', cups: 13},
    {name: 'Hockey-Club', place: 'Utah', conference: 'West', division: 'Central', wins: 1, color: 'black', logo: 'logos/utah-hc.png', cups: 0},
    {name: 'Canucks', place: 'Vancouver', conference: 'West', division: 'Pacific', wins: 1, color: 'green', logo: 'logos/canucks.png', cups: 0},
    {name: 'Golden-Knights', place: 'Vegas', conference: 'West', division: 'Pacific', wins: 1, color: 'gold', logo: 'logos/goldenKnights.png', cups: 1},
    {name: 'Capitals', place: 'Washington', conference: 'East', division: 'Metropolitan', wins: 1, color: 'red', logo: 'logos/capitals.png', cups: 1},
    {name: 'Jets', place: 'Winnipeg', conference: 'West', division: 'Central', wins: 1, color: 'gray', logo: 'logos/jets.png', cups: 0}
];

//handles to lists
let atlanticRank = document.querySelectorAll(['.atlantic li']);
let metropolitanRank = document.querySelectorAll(['.metropolitan li']);
let centralRank = document.querySelectorAll(['.central li']);
let pacificRank = document.querySelectorAll(['.pacific li']);
const favResult = document.querySelector('h3');
const favIMG = document.querySelector('.favLogo');
const lock = document.querySelector('.lock');
const results = document.querySelector('.results');

let body = document.querySelector('body');

//handles to the option elements
let option1 = document.querySelector('.team1');
let option2 = document.querySelector('.team2');

//filter by division
let atlantic = teams.filter(team => team.division === 'Atlantic');
let metropolitan = teams.filter(team => team.division === 'Metropolitan');
let central = teams.filter(team => team.division === 'Central');
let pacific = teams.filter(team => team.division === 'Pacific');

let team1 = teams[0];
let team2 = teams[0];
let fav = teams[0];

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
};
rank();

//generate function to set random teams
let generate = () => {
    team1 = teams[Math.floor(Math.random() * 32)];
    team2 = teams[Math.floor(Math.random() * 32)];
};
//function to display favorite team
const favorite = () => {
    teams.sort((a,b) => b.wins - a.wins); 
    fav = teams[0];
    favResult.innerHTML = `Favorite Team: ${fav.place} ${fav.name}`;
    favIMG.src = fav.logo;
}

//to ensure that the teams will not be the same
while (team1 === team2) {
    generate();
};

//set options
option1.src = team1.logo;
option2.src = team2.logo;

//when images are clicked
option1.addEventListener('click', e => {
    e.preventDefault();
    team1.wins += team2.wins;
    team1 = teams[0];
    team2 = teams[0];
    while (team1 === team2) {
        generate();
    };
    option1.src = team1.logo;
    option2.src = team2.logo;
    rank();
    favorite();    
});

option2.addEventListener('click', e => {
    e.preventDefault();
    team2.wins += team1.wins
    generate();
    while (team1 === team2) {
        generate();
    };
    option1.src = team1.logo;
    option2.src = team2.logo;
    rank();   
    favorite(); 
});
lock.addEventListener('click', () => {
    body.innerHTML = `<div class="results"><h2>Congratulations!</h2>
        <h3>Favorite Team: ${fav.place} ${fav.name}
        <br><img class="fav" src="${fav.logo}" alt="">
        <div class="stanley_cups"><br>Stanley Cup Wins: ${fav.cups}<br></div>
        <br><br><button class="reload"onClick="window.location.reload();">Play Again</button>
        <p>Try the NFL version: <a href="https://mcdodger27.github.io/NFL-Rank/">https://mcdodger27.github.io/NFL-Rank/</a></p></div>`;
    champDiv = document.querySelector('.stanley_cups');
    if (fav.cups > 10) {
        let count = 0;
        for (count; count < 10; count++) {
            champDiv.innerHTML += '<img class="stanley_cup" src="logos/stanley_cup.jpg" alt="">';        
        }
        champDiv.innerHTML += '<br>';
        for (count; count < fav.cups; count++){
            champDiv.innerHTML += '<img class="stanley_cup" src="logos/stanley_cup.jpg" alt="">';
        }
    }
    else if (fav.cups > 0) {
        for (let i = 0; i < fav.cups; i++) {
            champDiv.innerHTML += '<img class="stanley_cup" src="logos/stanley_cup.jpg" alt="">';        
        }
    }  
    else {
        champDiv.innerHTML += "They have never won a Stanley Cup";
    }  
    results.classList.add('player');
    results.classList.add('endScreen');
    body.classList.add(fav.name);
    option1.src = ``;
    option2.src = ``;
});