const express = require('express');
const hbs = require('hbs');
const app = express();
const path = require('path');
const templatePath = path.join(__dirname, './templates');
require('dotenv').config();
const port = 5000 || process.env.PORT;
const request = require('request-promise');

app.use(express.json());
app.set('view engine', 'hbs');
app.set('views', templatePath);


const rapidApiKey = process.env.RAPID_API_KEY
const apiKey = process.env.API_KEY  

 const options = {
  method: 'GET',
  url: 'https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation',
  qs: {
    apikey: apiKey
  },
  headers: { 
    'X-RapidAPI-Key':rapidApiKey,
    'X-RapidAPI-Host': 'find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com'
  },
  json: true // Set json option to parse response as JSON automatically
};

const continent = "";
const country = "";
const zipCode = "";
const accuracyRadius = "";
const flag = "";
const city = "";
const timezone = "";
const latitude = "";
const countryGeoNameId = "";
const gmt = "";
const network = "";
const currencyName = "";
const countryNativeName = "";
const stateGeoNameId = "";
const phoneCode = "";
const state = "";
const continentCode = "";
const longitude = "";
const currencyNamePlural = "";
const cityGeoNameId = "";
const languages = "";
const numOfCities = "";
const org = "";
const ip = "";
const currencySymbol = "";
const currencySymbolNative = "";
const isEU = "";
const countryTLD = "";
const countryCapital = "";
const metroCode = "";
const continentGeoNameId = "";
const stateCode = "";
const countryISO2 = "";
const numOfStates = "";
const countryISO3 = "";
const currencyCode = "";
const asNo = "";
const status = "";
 // Make the API request using async/await
 app.get('/', async (req, res) => {
    try {
      const apiResponse = await request(options);
      const data = {
        continent: apiResponse.continent,
        country: apiResponse.country,
        zipCode: apiResponse.zipCode,
        accuracyRadius: apiResponse.accuracyRadius,
        flag: apiResponse.flag,
        city: apiResponse.city,
        timezone: apiResponse.timezone,
        latitude: apiResponse.latitude,
        countryGeoNameId: apiResponse.countryGeoNameId,
        gmt: apiResponse.gmt,
        network: apiResponse.network,
        currencyName: apiResponse.currencyName,
        countryNativeName: apiResponse.countryNativeName,
        stateGeoNameId: apiResponse.stateGeoNameId,
        phoneCode: apiResponse.phoneCode,
        state: apiResponse.state,
        continentCode: apiResponse.continentCode,
        longitude: apiResponse.longitude,
        currencyNamePlural: apiResponse.currencyNamePlural,
        cityGeoNameId: apiResponse.cityGeoNameId,
        languages: apiResponse.languages,
        numOfCities: apiResponse.numOfCities,
        org: apiResponse.org,
        ip: apiResponse.ip,
        currencySymbol: apiResponse.currencySymbol,
        currencySymbolNative: apiResponse.currencySymbolNative,
        isEU: apiResponse.isEU,
        countryTLD: apiResponse.countryTLD,
        countryCapital: apiResponse.countryCapital,
        metroCode: apiResponse.metroCode,
        continentGeoNameId: apiResponse.continentGeoNameId,
        stateCode: apiResponse.stateCode,
        countryISO2: apiResponse.countryISO2,
        numOfStates: apiResponse.numOfStates,
        countryISO3: apiResponse.countryISO3,
        currencyCode: apiResponse.currencyCode,
        asNo: apiResponse.asNo,
        status: apiResponse.status
      };

      res.render('dash0', data);

    } catch (error) {
      res.status(500).send(error.message);
    }
  });
 app.listen(port, () => console.log(`App listening on port ${port}`));