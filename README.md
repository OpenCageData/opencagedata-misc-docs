the OpenCage geocoder roadmap
====================

This document is a public high level overview of what we're working on
to improve the OpenCage Geocoder - see http://geocoder.opencagedata.com

We welcome your feedback and will steer our efforts to those features
most requested by our customers.

Current work list in order of rough priority
- use templates from https://github.com/lokku/address-formatting to create the formatted address
  - opensource the code we do do this
  - better README for address-formatting
- better logic to catch and eliminate duplicate responses, example: "Berlin"
- better ranking of results and documentation of the logic used
- "annotations" - ie adding additional data to responses for example 
  - country calling codes
  - elevation?
- break out title formatting code into country specific and more easily
  testable and open sourced modules
- better, more tests / general stability
- public status page showing how far we lag in synching OSM edits
- better way to deal with reported data errors and feed them back to
  the underlying datasource (ie OSM)
- better per country routing (sending query to correct geocoder)
- build geocoder around openaddresses.io data

