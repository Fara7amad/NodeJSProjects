let express = require('express');
let app = express();
const axios = require("axios");


async function getPokemon(link) {
    // Configure request
    const config = {
      method: "get", // request method (get, post, ...)
      url: link // API link
    };
  
    let res = await axios(config);
  
    console.log("Response Data");
    // console.log(res.data);
    // console.log("--------------------");
    // console.log("Extracted info from response data:");
    // console.log("--------------------");
    // console.log(`Pokemon Name: ${res.data.name}`);
    // console.log(`Pokemon Order: ${res.data.order}`);
    // console.log(`Pokemon Species: ${res.data.species.name}`);
    // console.log(`Pokemon Species URL: ${res.data.species.url}`);
     return res.data; 
   
  }
  

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
    
  res.render('pages/start');
});

// pikachu page
app.get('/25', async function(req, res) {
    let poke=  await getPokemon("https://pokeapi.co/api/v2/pokemon/pikachu",);
     
    console.log(`Pokemon ID: ${poke.id}`);
    console.log(`Pokemon Name: ${poke.name}`);
    console.log(`Pokemon Order: ${poke.order}`); 
 
 
    res.render('pages/data',{
    name: poke.name,
     order: poke.order
  });
});

// ditto page
app.get('/132', async function(req, res) {
    let poke=  await getPokemon("https://pokeapi.co/api/v2/pokemon/ditto",);
     
    console.log(poke.name);
    console.log(`Pokemon ID: ${poke.id}`);
    console.log(`Pokemon Name: ${poke.name}`);
    console.log(`Pokemon Order: ${poke.order}`); 
 
    res.render('pages/data',{
    name: poke.name,
     order: poke.order
  });
});


// stench page
app.get('/251', async function(req, res) {
    let poke=  await getPokemon("https://pokeapi.co/api/v2/pokemon/celebi",);
     
    // console.log(poke.name);
    console.log(`Pokemon ID: ${poke.id}`);
    console.log(`Pokemon Name: ${poke.name}`);
    console.log(`Pokemon Order: ${poke.order}`); 

 
 
    res.render('pages/data',{
    name: poke.name,
     order: poke.order
  });
});




app.listen(8080);
console.log('Server is listening on port 8080');
console.log('http://localhost:8080/');


 
  