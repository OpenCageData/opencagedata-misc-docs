This document lists some steps you can take to format the forward geocoding queries you send to the [OpenCage Geocoder](https://geocoder.opencagedata.com).

Please see the [full API documentation](https://geocoder.opencagedata.com/api) for information on reverse geocoding or on the various other parameters you can specify in your request. This document concerns only the query (`q` in the request)

**1. Please DO separate the parts of the location with a comma.**

Not Good: `Trierer Straße 15 99423 Weimar Deutschland`

Better: `Trierer Straße 15, 99423, Weimar, Deutschland`

**2. Send us only places! This might sound obvious, but we often see people geocoding lists of addresses - including the name of the resident. That just confuses things.**

Not Good: `Herr Mustermann, Trierer Straße 15, 99423, Weimar, Deutschland`

Better: `Trierer Straße 15, 99423, Weimar, Deutschland`

**3. Please DO include the country in the query, and also please use the optional `country_code` parameter.**

Not Good: `Trierer Straße 15, 99423, Weimar`

Better: `Trierer Straße 15, 99423, Weimar, Deutschland`

**4. Please remove unneeded words and characters**

Not Good: `Trierer Straße 15\n99423 Weimar\n`

Better: `Trierer Straße 15, 99423, Weimar, Deutschland`

remove things like `c/o` (common abbreviation for 'care of'), or `PO BOX` that do not actually specify the location

**5. If you are putting the address together from pieces please ensure that those pieces are meaningful. We often see people send us queries that include `undefined` or `NaN`**

Not Good `undefined,Lincolnton,NC,28092`

Better: `Lincolnton,NC,28092`

**6. Treat postal codes as strings, not numbers. We often see queries with four digit ZIP codes because the leading 0 has been removed because somewhere along the way it was trated as a number rather than a string. If you know postal codes should be five digits add a check to ensure you are only sending us five digit strings.** 

Not Good: `77 Massachusetts Ave, Cambridge, MA 2142`

Better: `77 Massachusetts Ave, Cambridge, MA 02142`


**Final point** - you might ask why you need to bother doing all this, surely we should catch common problems on our side? A fair question. We do try to catch obvious things of course. As you can imagine though, it's difficult for us know the pecularities of your data in your language and country. The more you can do to simplify, clean, and correct your queries, the better a chance we have to geocode correctly.

Happy geocoding!
