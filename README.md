the OpenCage geocoder roadmap
====================

This document isa public high level overview of what we're working on to improve the OpenCage Geocoder - see http://geocoder.opencagedata.com 
We welcome your feedback and will steer our efforts to those features most requested by our customers. 

Current work list in order of rough priority
- catch and eliminate duplicate responses, example: "Berlin"
- better ranking of results and documentation of the logic used
- use bounds param to direct query to appropriate nestoria country geocoder
- break out formatting code into country specific and more easily testable and open sourced modules
- better, more tests / general stability
- better way to deal with reported data errors and feed them back to the underlying datasource (ie OSM)
- return what3words code for each location
- build geocoder around openaddresses.io data

