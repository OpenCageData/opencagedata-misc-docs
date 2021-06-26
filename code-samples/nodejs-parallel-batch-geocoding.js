/**
 * This example deonstrates how to batch geocode addreses using Oopencage Data Geocoder.
 *
 * Create a file file_to_geocode.csv
 * id,address
 * 1,"Madrid,Spain"
 * 2,"Milan,Italy"
 * 3,"Berlin,Germany"
 * ...
 *
 * The batch file runs asynchonously with parallel workers, then it is important to have unique id so the results can be matched with.
 *
 * create a .env file with your API KEY
 * OPENCAGE_API_KEY=<YOUR API KEY>
 *
 * npm install opencage-api-client async csv-parser csv-stringify
 *
 * node nodejs-parallel-batch-geocoding.js
 *
 * Adjust CONCURRENCY value to increase the throughput. Check the <https://caolan.github.io/async/v3/docs.html#queue>documentation</a>
 *
 */

// NodeJS builtin
const fs = require('fs');
// Dependencies
const { geocode } = require('opencage-api-client');
const async = require('async');
const csv = require('csv-parser');
const stringify = require('csv-stringify');
// --------------------------------------
//
const CONCURRENCY = 2;
//
const LANGUAGE = 'en';
//
const INFILE = 'file_to_geocode.csv';
const OUTFILE = 'file_geocoded.csv';
//
const NO_RS = {
  id: '',
  input: '',
  latitude: 0,
  longitude: 0,
  // Any of these components might be empty :
  country: '',
  county: '',
  city: '',
  postcode: '',
  road: '',
  house_number: '',
  //
  confidence: -1,
  formatted: '',
};
// ouput file columns
const stringifierOptions = {
  columns: [
    'id',
    'input',
    'latitude',
    'longitude',
    'country',
    'county',
    'city',
    'postcode',
    'road',
    'house_number',
    'confidence',
    'formatted',
  ],
};

const ouputResult = async (data) => {
  stringify([data], stringifierOptions, (error, content) => {
    if (error) {
      console.error('error stringifying the result');
    }
    fs.writeFile(OUTFILE, content, { flag: 'a+' }, (err) => {
      if (err) console.error('error writing line', err);
    });
  });
};

const geocodeAddress = async ({ id, address }) => {
  console.log(`geocoding "${address}"`);
  try {
    if (address) {
      const apiResult = await geocode({
        q: address,
        limit: 1,
        no_annotations: 1,
        language: LANGUAGE,
      });
      // console.log(apiResult);

      // NodeJS<14 use : if(apiResult && apiResult.results && apiResult.results.length > 0)
      if (apiResult?.results?.length > 0) {
        const geocoded = apiResult.results[0];
        const result = {
          id,
          input: address,
          latitude: geocoded.geometry.lat,
          longitude: geocoded.geometry.lng,
          // Any of these components might be empty :
          country: geocoded.components.country || '',
          county: geocoded.components.county || '',
          city: geocoded.components.city || '',
          postcode: geocoded.components.postcode || '',
          road: geocoded.components.road || '',
          house_number: geocoded.components.house_number || '',
          //
          confidence: geocoded.confidence,
          formatted: geocoded.formatted,
        };
        // console.log(geocoded.formatted);
        return ouputResult(result);
      }
    }
    return ouputResult({ ...NO_RS, id, input: address });
  } catch (error) {
    if (error.status && error.status.code === 402) {
      console.log(
        'Daily limit reached. Signup for a paid plan or upgrade your plan'
      );
      process.exit(402);
    }
    console.error(error);
    return ouputResult({ ...NO_RS, id, input: address });
  }
};

const processFileStream = async (queue) => {
  fs.createReadStream(INFILE)
    .pipe(csv(['id', 'address']))
    .on('data', (data) => {
      // console.log(`Line from file: ${JSON.stringify(data)}`);
      console.log(`Line from file: ${data.id}, ${data.address}`);
      queue.push({
        id: data.id,
        address: data.address,
      });
    })
    .on('end', () => {
      console.log('Csv file fully parsed');
    });
};

const run = async () => {
  // create a queue object with concurrency
  const queue = async.queue(geocodeAddress, CONCURRENCY);

  // await processFileSync(queue);
  await processFileStream(queue);
};

console.log('Running Batch Geocoding');
run();
