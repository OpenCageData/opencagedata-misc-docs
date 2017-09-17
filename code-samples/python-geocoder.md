This document shows how to query the
[OpenCage geocoder](https://geocoder.opencagedata.com/) using
Denis Carriere's python [geocoder](http://geocoder.readthedocs.io) library.

_Reverse Example_

    #!/usr/bin/env python

    import geocoder

    result = geocoder.opencage([45.404901, -75.7075509], key='YOUR-OPENCAGE-API-KEY', method='reverse')

    print result.city

_Forward Example_

    #!/usr/bin/env python

    import geocoder

    result = geocoder.opencage("453 Booth Street, Ottawa ON, Canada", key='YOUR-OPENCAGE-API-KEY')

    print result.latlng


