// import mysql from 'mysql2/promise';

// const connection = await mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'topSecret',
//     database: 'nba-db',
//   });
   
//await connection.connect();

  

function landing(){
    let landng = document.getElementById('landng');
    const url = 'https://api-nba-v1.p.rapidapi.com/teams?league=standard';    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '3e9c3def7amshb711fd3865e4a40p137c32jsn0eb865eae80d',
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
        }
    };
    fetch(url, options)
    .then((response) => {
        if (!response.ok) throw new Error('invalid');
        return response.json();
    })
    .then((dataArray) => {
        console.log(dataArray);
        facklist = dataArray.response;
         landng.innerHTML = facklist.map((item) => {
                return ` <tr>
                         <td>${item.name}</td>
                         <td><img src = '${item.logo}' height = 40px width = 40px>
                         </img></td>
                 </tr>`;
         }).join('');
    })
    .catch(console.warn);
}

// function header(){
// let headng = document.getElementById('headng');
// const fetch = require('node-fetch');

// const url = 'https://api.sportradar.com/nba/trial/v8/en/games/2024/01/06/schedule.json?api_key=PiwjckiUuo2EIpux74KoB93PynEcfHTv4H6rtL1p';
// const options = {method: 'GET', headers: {accept: 'application/json'}};

// fetch(url, options)
//   .then(res => res.json())
//   .then((dataArray) => {
//     console.log(dataArray);
//     headng.innerHTML = dataArray.games.map((item) => {

//             return `<ul><li>${item.home.name} - ${item.away.name}</li></ul>`;
//      }).join('');
// })
// }



getData();
landing();
//headng();
