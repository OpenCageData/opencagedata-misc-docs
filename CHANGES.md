  * Full [API docs](https://geocoder.opencagedata.com/api).
  * We recommend you also [follow @OpenCageData on twitter](https://twitter.com/opencagedata) and/or [read our blog](http://blog.opencagedata.com/) where all changes are announced. 

# Changes to OpenCage Geocoder API. 

* 20180403
  
  added [the Addok geocoder](http://addok.readthedocs.io/fr/latest/) as one of the backend geocoders we query

* 20171203

   added `flag` annotation. See [the full list of annotations](https://geocoder.opencagedata.com/api#annotations),

* 20171005
  
   In many parts of the world roads may have names but also numbers or some sort of unique identifier code. In cases where the result for a reverse geocoding query is such a road, the `components` portion of the response now also contains a `road_reference` key and value. In Europe some major highways may also have a national and European reference (for example "A 6" and "E 15"). In such cases we also set the `road_reference_intl` key and value.

* 20170601
  
   the `components` portion of the result now contains the key `ISO_3166-1_alpha-2` with [the corresponding code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) for that location if we are able to determine it. This is in addition to the two-letter `country_code` which is also returned. This is mainly useful for places like Puerto Rico or Guadeloupe where the two codes differ. 
   
* 20170517

    We have launched a new account dashboard, removing the 3rd party dashboard from 3scale we had peviously used. Passwords in the old (and new) systems were encrypted, thus making it impossible for us to transfer them to the new system, so the first time you log into the new system you will have to create a new password. Sorry for the inconvenience. 

* 20170428

    new optional parameter `abbrv`. When supplied we attempt to shorten the `formatted` string that we return. 
    Abbreviations are open-sourced [in the address-formatting repo](https://github.com/OpenCageData/address-formatting/tree/master/conf/abbreviations).
    See [all optional parameters](https://geocoder.opencagedata.com/api#forward-opt).
    

* 20170415

    new version of the what3words library for our annotation means that we now support Arabic, Finnish, Italian, Mongolian, Polish, and Swedish
    
* 20170311

    some tweaks to how we calculate [confidence score](https://geocoder.opencagedata.com/api#confidence) for some of the backend geocoders, will generally result in slightly lower confidence
    
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

   The optional parameter `countrycode` can be a comma seperated list of 2-letter country codes  [See full list of optional parameters](https://geocoder.opencagedata.com/api#forward-opt).

* 20160830

   Previously if a road name in the components field had been a digit it had been returned as a number not a string. This was unintentional and is now fixed. The road name is always returned as a string.

* 20160601

   new optional request parameter `no_record`. [See full list of optional parameters](https://geocoder.opencagedata.com/api#forward-opt).

* 20160503
   
   tweak to `google-v3-json` format to convert our types to google types
   
* 20160423
   
   add `_type` key to the `components` list so that the type of object we geocoded to can more easily be determined. [See docs](https://geocoder.opencagedata.com/api#formatted).
   
