  * Full [API docs](https://opencagedata.com/api).
  * We recommend you also [follow @OpenCageData on twitter](https://twitter.com/opencagedata) and/or [read our blog](https://blog.opencagedata.com/) where all changes are announced. 

# Changes to OpenCage Geocoder API. 

* 20190102

   map view upgraded to leaflet 1.4.0 

* 20190101

  we now have a couple of publicly available API keys for use in testing and SDK development that will always generate a response with status `402` and `403`, respectively. You can find them in [the section of the API docs dealing with response codes](https://opencagedata.com/api#codes).
  
* 20181219

  we now also return a `ISO_3166-1_alpha-3` key and value in the `components` portion of each result. [See blog post](https://blog.opencagedata.com/post/now-with-iso3166-1-alpha-3-codes).
  
* 20180923
  
  new version of the what3words library for our annotation means that we now support Afrikaans, Czech, Danish, Dutch, Greek, Japanese, Korean, Norwegian, Thai, Xhosa, and Zulu.

* 20180902
  
  we have significantly improved the granularity and coverage of [our timezone annotation](https://opencagedata.com/api#annotations).

* 20180827
  
  previously results in `geojson` format had not returned some of the fields (examples include `status`, `timestamp`, and more) that other response formats had. This is now corrected, sorry for the oversight.

* 20180801
  
  non-GET HTTP requests to the API now return `405 - Method not allowed` error.
  
* 20180727

   added `FIPS` annotation for locations in the United States. [See docs](https://opencagedata.com/api#annotations).
  
* 20180724

  New optional parameter `proximity` for biasing results is now supported. [See docs](https://opencagedata.com/api#forward-opt).
  
* 20180701

  From 1 August 2018 non-GET HTTP requests will be treated as errors. Please see [our blog post for full details](https://blog.opencagedata.com/post/no-longer-supporting-non-get-requests).

* 20180619

  our website moved to [https://opencagedata.com](https://opencagedata.com).

* 20180618

  added [the Australian G-NAF dataset](https://data.gov.au/dataset/geocoded-national-address-file-g-naf) as one of the backend geocoders we query.

* 20180614
  
  if a result is a road (ie `_type` key in the `components` portion of the result has the value "road") if possible we now also return a `road_type` with values like those [generally used in OpenStreetMap](https://wiki.openstreetmap.org/wiki/Key:highway).

* 20180403
  
  added [the Addok geocoder](http://addok.readthedocs.io/fr/latest/) as one of the backend geocoders we query.
  
* 20180302

  new page to clarify [GDPR/data protection](https://opencagedata.com/gdpr)

* 20171203

   added `flag` annotation. See [the full list of annotations](https://opencagedata.com/api#annotations).

* 20171005
  
   In many parts of the world roads may have names but also numbers or some sort of unique identifier code. In cases where the result for a reverse geocoding query is such a road, the `components` portion of the response now also contains a `road_reference` key and value. In Europe some major highways may also have a national and European reference (for example "A 6" and "E 15"). In such cases we also set the `road_reference_intl` key and value.

* 20170601
  
   the `components` portion of the result now contains the key `ISO_3166-1_alpha-2` with [the corresponding code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) for that location if we are able to determine it. This is in addition to the two-letter `country_code` which is also returned. This is mainly useful for places like Puerto Rico or Guadeloupe where the two codes differ. 
   
* 20170517

    We have launched a new account dashboard, removing the 3rd party dashboard from 3scale we had peviously used. Passwords in the old (and new) systems were encrypted, thus making it impossible for us to transfer them to the new system, so the first time you log into the new system you will have to create a new password. Sorry for the inconvenience. 

* 20170428

    new optional parameter `abbrv`. When supplied we attempt to shorten the `formatted` string that we return. 
    Abbreviations are open-sourced [in the address-formatting repo](https://github.com/OpenCageData/address-formatting/tree/master/conf/abbreviations).
    See [all optional parameters](https://opencagedata.com/api#forward-opt).
    

* 20170415

    new version of the what3words library for our annotation means that we now support Arabic, Finnish, Italian, Mongolian, Polish, and Swedish
    
* 20170311

    some tweaks to how we calculate [confidence score](https://opencagedata.com/api#confidence) for some of the backend geocoders, will generally result in slightly lower confidence
    
* 20170111

   requests to geocode invalid coordinates now return a response with status code 400 [Blog post](http://blog.opencagedata.com/post/155733527528/change-to-coordinate-handling).

* 20161219

   added `wikidata` annotation. 
 
* 20161028

   added `qibla` annotation. [Blog post](http://blog.opencagedata.com/post/152418938118/new-annotation-qibla).
   
* 20161020

   added `currency` annotation.
   [Blog post](http://blog.opencagedata.com/post/152063767603/new-annotation-currency).

* 20161007

   map view upgraded to leaflet 1.0.1 
   
* 20160914

   The optional parameter `countrycode` can be a comma seperated list of 2-letter country codes  [See full list of optional parameters](https://opencagedata.com/api#forward-opt).

* 20160830

   Previously if a road name in the components field had been a digit it had been returned as a number not a string. This was unintentional and is now fixed. The road name is always returned as a string.

* 20160601

   new optional request parameter `no_record`. [See full list of optional parameters](https://opencagedata.com/api#forward-opt).

* 20160503
   
   tweak to `google-v3-json` format to convert our types to google types
   
* 20160423
   
   add `_type` key to the `components` list so that the type of object we geocoded to can more easily be determined. [See docs](https://opencagedata.com/api#formatted).
   
