# Changes to OpenCage Geocoder API. 
  * Full [API docs](https://geocoder.opencagedata.com/api).
  * We recommend you also [follow @OpenCageData on twitter](https://twitter.com/opencagedata) and/or [read our blog](http://blog.opencagedata.com/) where all changes are announced. 

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
   
