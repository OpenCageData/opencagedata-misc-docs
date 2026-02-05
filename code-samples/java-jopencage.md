This document shows how to query the
[OpenCage geocoder](https://opencagedata.com) using Michael Oberwasserlechner's [Java geocoder library](https://github.com/moberwasserlechner/jopencage).

## Add JOpenCage as a dependency to your maven or gradle project
_Following the library's [usage instructions](https://github.com/moberwasserlechner/jopencage#usage)_

## Reverse Example
Send a coordinate pair (latitude, longitude) and receive an address

```
String apiKey = System.getenv("OPENCAGE_API_KEY");
JOpenCageGeocoder jOpenCageGeocoder = new JOpenCageGeocoder(apiKey);

JOpenCageReverseRequest request = new JOpenCageReverseRequest(41.40015, 2.15765);
request.setLanguage("es"); // prioritize results in a specific language using an IETF format language code
request.setNoDedupe(true); // don't return duplicate results
request.setLimit(5); // only return the first 5 results (default is 10)
request.setNoAnnotations(true); // exclude additional info such as calling code, timezone, and currency
request.setMinConfidence(3); // restrict to results with a confidence rating of at least 3 (out of 10)

JOpenCageResponse response = jOpenCageGeocoder.reverse(request);
String formattedAddress = response.getResults().get(0).getFormatted(); // get the formatted address of the first result
```

## Forward Example
Send an address and receive a coordinate pair. Format your address according to the [OpenCage API guidelines](https://github.com/OpenCageData/opencagedata-misc-docs/blob/master/query-formatting.md).

```
String apiKey = System.getenv("OPENCAGE_API_KEY");
JOpenCageGeocoder jOpenCageGeocoder = new JOpenCageGeocoder(apiKey);

JOpenCageForwardRequest request = new JOpenCageForwardRequest("375 Albert Rd, Woodstock, Cape Town, 7915, South Africa");
request.setRestrictToCountryCode("za"); // restrict results to a specific country
request.setBounds(18.367, -34.109, 18.770, -33.704); // restrict results to a geographic bounding box (southWestLng, southWestLat, northEastLng, northEastLat)

JOpenCageResponse response = jOpenCageGeocoder.forward(request);
JOpenCageLatLng firstResultLatLng = response.getFirstPosition(); // get the coordinate pair of the first result
```


## Batch Geocode a List of Addresses from a File
This example is for forward geocoding a list of addresses; the process to reverse geocode a list of coordinate pairs would be similar. Start with a text file of addresses following the [formatting guidelines](https://github.com/OpenCageData/opencagedata-misc-docs/blob/master/query-formatting.md):
```
// myAddresses.txt
25 Queen Victoria St, Gardens, Cape Town, 8001, South Africa
Via Giuseppe Garibaldi, 183, 16032 Camogli GE, Italy
1 Hacker Way, Menlo Park, CA 94025, USA
Iguazu National Park, Brazil
Stanford, 7210, South Africa
```
Read the file and geocode the addresses:
```
String apiKey = System.getenv("OPENCAGE_API_KEY");
JOpenCageGeocoder jOpenCageGeocoder = new JOpenCageGeocoder(apiKey);

InputStream inputFile = getClass().getClassLoader().getResourceAsStream("myAddresses.txt");
if (inputFile == null) {
  throw new FileNotFoundException("myAddresses.txt not found in resources");
}

List<String> listOfAddresses = new ArrayList<>();
try (BufferedReader br = new BufferedReader(new InputStreamReader(inputFile, StandardCharsets.UTF_8))) {
  listOfAddresses = br.lines().collect(Collectors.toList());
} catch (IOException e) {
  System.out.println("Unable to read file");
  e.printStackTrace();
}

System.out.println("Latitude, Longitude:");
for (String address : listOfAddresses) {
  JOpenCageForwardRequest request = new JOpenCageForwardRequest(address);
  request.setLimit(1);
  request.setNoAnnotations(true);
  JOpenCageResponse response = this.jOpenCageGeocoder.forward(request);

  if (response != null && response.getResults() != null && !response.getResults().isEmpty()) {
    JOpenCageLatLng coordinates = response.getResults().get(0).getGeometry();
    System.out.println(coordinates.getLat().toString() + "," + coordinates.getLng().toString());
  } else {
    System.out.println("Unable to geocode input address: " + address);
  }

  try {
    Thread.sleep(1000); // free trial accounts are limited to 1 request/second
  } catch (InterruptedException e) {
    e.printStackTrace();
  }

};
```

## Error handling
In the case of an error, an appropriate error message will be logged, such as:  
_400: "Invalid request (bad request; a required parameter is missing)!"_  
_402: "Valid request but quota exceeded (payment required)!"_  
_403: "Invalid or missing api key!"_
