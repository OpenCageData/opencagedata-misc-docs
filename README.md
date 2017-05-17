the OpenCage geocoder roadmap
====================

This document is a public high level overview of what we're working on to improve the OpenCage Geocoder - see http://geocoder.opencagedata.com

We welcome your feedback and will steer our efforts to those features most requested by our customers (note, by customers we mean actual paying customers, not those on the the free tier)

Current work list in a very order of rough priority
- continue to improve new user dashboard
- add ISO3166-1 codes to results, particularly useful where it differs from countrycode (ex: Guadeloupe (GP))
- [more code examples, more libraries](https://geocoder.opencagedata.com/code) for less popular languages.
- better [demo page](https://geocoder.opencagedata.com/demo) to allow testing the various option parameters
- continue to add country specific tests andabbreviations to [address-formatting[(https://github.com/opencagedata/address-formatting) for proper address formatting. Specifically we need experienced help with double byte and right-to-left languages. 
- release v2 of the API and rename some keys, specifically `confidence`. See discussion [on the blog](http://blog.opencagedata.com/post/127899935808/changing-confidence-scoring) 
- public status page showing how far we lag in synching OSM edits
- better ranking of results and documentation of the logic used
- "annotations" - ie adding additional data to responses for example 
  - elevation?
- better, and more tests / general stability
- better way to deal with reported data errors and feed them back to the underlying datasource (ie OSM)
- better per country routing (sending query to correct geocoder)
- allow client to specify "strict=1" to get exact coordinates of a postcode rather than first finding nearest address and returning coordinates of that address
- build geocoder around openaddresses.io data
- geocoding using celltowers (opencellid database)
