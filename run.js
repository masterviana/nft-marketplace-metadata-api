var express = require("express");
var app = express();
var cors = require('cors')

const ALLOWED_HEADERS=`*`
const ALLOWED_ORIGINS=`*`

function parseValues(originalValues) {
    let parsedValues = originalValues;
    if (originalValues.includes(',')) {
      parsedValues = originalValues.split(',');
    }
    return parsedValues;
}

let corsOpts = {};
const origin = parseValues(ALLOWED_ORIGINS);
const allowedHeaders = parseValues(ALLOWED_HEADERS);
corsOpts = ({
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  preflightContinue: true,
  allowedHeaders,
  origin,
});

const NUM_PICS = 43;
const BASE_IMAGE = process.env.BASE_PATH || "https://raw.githubusercontent.com/masterviana/nft-marketplace-metadata-api/main/static/images/"


// enable cors
app.use(cors(corsOpts))

let port = process.env.PORT || 3000;
app.listen(port, () => 
{
    console.log("Server running on port ", port);
});

const infoContent = {
    id : '<id>' , 
    name : 'Item name : ',
    description : "Friendly Creature that enjoys long swims in the ocean. ID: ",
    image : BASE_IMAGE,
    externalURL : process.env.BASE_API || '',
    attributes : [
        {
            "trait_type": "Base", 
            "value": "Starfish"
          }, 
          {
            "trait_type": "Eyes", 
            "value": "Big"
          }, 
          {
            "trait_type": "Mouth", 
            "value": "Surprised"
          }, 
          {
            "trait_type": "Level", 
            "value": 5
          }, 
          {
            "trait_type": "Stamina", 
            "value": 1.4
          }, 
          {
            "trait_type": "Personality", 
            "value": "Sad"
          }, 
          {
            "display_type": "boost_number", 
            "trait_type": "Aqua Power", 
            "value": 40
          },
          {
            "display_type": "date", 
            "trait_type": "birthday", 
            "value": 1546360800
          }
    ]
}

app.get("/", (req, res, next) => 
{
    res.json( infoContent  );
});

app.get("/detail", (req, res, next) => 
{
    res.json( infoContent );
});


app.get("/detail/:id", (req, res, next) => 
{
    console.log('input ', req.params.id);
    let id = req.params.id; //parseInt(req.params.id, 16);
    
    if(id < 1){
        console.log('There isnt any id valid');
        res.json( {name : "Id from query not vale", ' <!!!!> ' : "Id from query not vale", in : req.params.id} );
    }
    else{
        const picID = id % (NUM_PICS);
        res.json(
            { 
                id : id,
                name : infoContent.name +  id ,
                description: infoContent.description +  id,
                externalURL: infoContent.externalURL +  id,
                image: infoContent.image +  picID + '.jpg',
             });
    }
   
});

