This document shows how to query the
[OpenCage geocoder](https://geocoder.opencagedata.com/) using
the ruby [geokit gem](https://github.com/geokit/geokit).

_Reverse Example_

Same geocode method magically handles both forward and reverse geocoding...

    require 'geokit'

    Geokit::Geocoders::OpencageGeocoder.key = 'YOUR-OPENCAGE-API-KEY'

    Geokit::Geocoders::provider_order = [:opencage]

    result = Geokit::Geocoders::MultiGeocoder.geocode("51.2157153, 1.3903743")

    puts "#{result.provider}: #{result.full_address}"

Outputs `opencage: Mill Road, South East, Kent, England, CT14 9BD, GB`.

_Forward Example_

    #!/usr/bin/env ruby

    require 'geokit'

    Geokit::Geocoders::OpencageGeocoder.key = 'YOUR-OPENCAGE-API-KEY'

    Geokit::Geocoders::provider_order = [:opencage]

    result = Geokit::Geocoders::MultiGeocoder.geocode("900 Sycamore Drive")

    puts "#{result.provider}: #{result.latitude}, #{result.longitude}"

