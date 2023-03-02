let express = require('express');
let app = express();
const axios = require("axios");
const bodyParser = require('body-parser')

async function getPokemon(pokeName) {
    // Configure request
    const config = { 
      method: "get", // request method (get, post, ...)
      url: `https://pokeapi.co/api/v2/pokemon/${pokeName}` // API link
    };
    let res = await axios(config);
     return res.data; 
  }

app.set('view engine', 'ejs'); // set the view engine to ejs

app.get('/', function(req, res) {
    res.render('pages/start');
  });

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false})); 

app.post('/',  async function (req, res)  {
    let name=req.body.poke_name;
    let poke= await getPokemon(name.toLowerCase());
    res.render('pages/data',{
        name: poke.name,
         order: poke.order,
         image: poke.sprites.front_default
      });
});


app.listen(8080);
console.log('Server is listening on port 8080');
console.log('http://localhost:8080');


 
  