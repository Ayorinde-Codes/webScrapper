const axios = require('axios');
const cheerio= require('cheerio');
const otcsv = require("objects-to-csv");

const url = 'https://www.premierleague.com/stats/top/players/goals?se=-1&cl=-1&iso=-1&po=-1?se=-1';

// const url = 'http://www.meteocentrale.ch/it/europa/svizzera/meteo-corvatsch/details/S067910/';

axios(url)
.then(response=>{
    const html= response.data;
    const $ = cheerio.load(html);
    const statsTable= $('.statsTableContainer > tr');
    const topPremierLeagueScorers= [];

    statsTable.each(function(){
        const rank= $(this).find('.rank > strong').text();
        const playerName= $(this).find('.playerName > strong').text();
        const nationality= $(this).find('.playerCountry').text();
        const goal= $(this).find('.mainStat').text();

        topPremierLeagueScorers.push({
            rank,
            name: playerName,
            nationality,
            goal,
        })


    })

    console.log(topPremierLeagueScorers);

    console.log(statsTable.length);
    // console.log(html);
})
.catch(console.error);