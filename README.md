the OpenCage geocoder roadmap
====================

This document is a public high level overview of what we're working on to improve the OpenCage Geocoder - see http://geocoder.opencagedata.com

We welcome your feedback and will steer our efforts to those features most requested by our customers (note, by customers we mean actual paying customers, not those on the the free tier)

Current work list in a very order of rough priority:
- continue to improve new user dashboard
- add a backend geocoder around openaddresses.io data
- [more code examples, more libraries](https://geocoder.opencagedata.com/code) for less popular languages.
- better [demo page](https://geocoder.opencagedata.com/demo) to allow testing the various option parameters
- continue to add country specific tests and abbreviations to [address-formatting](https://github.com/opencagedata/address-formatting) for proper address formatting.
- better per country routing (sending query to correct geocoder)
- better on-boarding experience for new sign ups
- better ways to deal with reported data errors and feed them back to the underlying datasource (ie OSM)
- public status page showing how far we lag in synching OSM edits

Possible future projects:
- release v2 of the API and rename some keys, specifically `confidence`. See discussion [on the blog](http://blog.opencagedata.com/post/127899935808/changing-confidence-scoring) 
- better ranking of results and documentation of the logic used
- "annotations" - ie adding additional data to responses for example 
  - elevation?
- allow client to specify "strict=1" to get exact coordinates of a postcode rather than first finding nearest address and returning coordinates of that address
- geocoding using celltowers (opencellid database)
