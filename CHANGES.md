Changes to OpenCage Geocoder API. Full [API docs](https://geocoder.opencagedata.com/api).

* 20161028

   added `qibla` annotation
   
* 20161020

   added `currency` annotation
   [blog post](http://blog.opencagedata.com/post/152063767603/new-annotation-currency)

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
   
