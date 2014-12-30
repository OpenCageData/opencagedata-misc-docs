the OpenCage geocoder roadmap
====================

This document is a public high level overview of what we're working on
to improve the OpenCage Geocoder - see http://geocoder.opencagedata.com

We welcome your feedback and will steer our efforts to those features
most requested by our customers.

Current work list in order of rough priority
- continue to add country specific code and tests to https://github.com/lokku/address-formatting for proper address formatting
- better ranking of results and documentation of the logic used
- "annotations" - ie adding additional data to responses for example 
  - elevation?
- better, and more tests / general stability
- public status page showing how far we lag in synching OSM edits
- better way to deal with reported data errors and feed them back to
  the underlying datasource (ie OSM)
- better per country routing (sending query to correct geocoder)
- allow client to specify "strict=1" to get exact coordinates of a postcode rather than first finding nearest address and returning coordinates of that address
- build geocoder around openaddresses.io data

