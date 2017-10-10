This document shows how to query the
[OpenCage geocoder](https://geocoder.opencagedata.com/) using
Alex Reisner's ruby [geocoder](http://www.rubygeocoder.com) library.


_Forward Example_

    #!/usr/bin/env ruby

    require 'geocoder'

    Geocoder.configure(lookup: :opencagedata, api_key: "YOUR-OPENCAGE-API-KEY")

    results = Geocoder.search("57 Erb Street West Waterloo, ON, Canada N2L 6C2")

    result = results.first

    puts "#{result.latitude}, #{result.longitude}"   
    # output is 43.463796, -80.52608


_Reverse Example_

    #!/usr/bin/env ruby

    require 'geocoder'

    Geocoder.configure(lookup: :opencagedata, api_key: "YOUR-OPENCAGE-API-KEY")
    
    results = Geocoder.search([43.463796, -80.52608], reverse_geocode: true)
    
    result = results.first
    
    puts result.address
    # output is "63 Erb Street West, Waterloo, ON N2L 1V4, Canada"
