This document lists some steps you can take to format the forward geocoding queries you send to the [OpenCage Geocoder](https://opencagedata.com).

Please see the [full API documentation](https://opencagedata.com/api) for information on reverse geocoding or on the various other parameters you can specify in your request. This document concerns only the query (`q` in the request)

**1. Please DO separate the parts of the location with a comma.**

Not Good: `Trierer Straße 15 99423 Weimar Deutschland`

Better: `Trierer Straße 15, 99423, Weimar, Deutschland`

**2. Send us only places/addresses! This might sound obvious, but we often see people geocoding lists of addresses - including the name of the resident or complex company names. That just confuses things.**

Not Good: `Herr Mustermann, Trierer Straße 15, 99423, Weimar, Deutschland`

Better: `Trierer Straße 15, 99423, Weimar, Deutschland`

This is _the number one_ problem we see with forward geocoding. Leave out everything that is not part of the address.

**3. We do not support "intersections"**

Sometimes people want to send us intersections, this is not a format we support.

Not Good: `Corner of 4th and Main St, Some Town`

Better: `27 Main Street, Some Town, Country`

**4. Please DO include the country in the query, and also please use the optional `countrycode` parameter.**

Not Good: `Trierer Straße 15, 99423, Weimar`

Better: `Trierer Straße 15, 99423, Weimar, Deutschland`

**5. Please remove unneeded words and characters.**

Not Good: `Trierer Straße 15\n99423 Weimar\n`

Better: `Trierer Straße 15, 99423, Weimar, Deutschland`

remove things like `c/o` (common abbreviation for 'care of'), or `PO BOX` that do not actually specify the location

**6. Remove unneeded address information. An extension of the rule above. Each additional word increases the chance of confusing things, so if possible remove unhelpful address information like "Floor" or "Suite" or "Apt" that don't help with determining the location.**

Not Good: `720 VETERANS BLVD; STE 100`

Better: `720 VETERANS Boulevard`

**7. If you are putting the address together from pieces please ensure that those pieces are meaningful. We often see people send us queries that include `undefined` or `NaN` or just empty fields.**

Not Good: `undefined,Lincolnton,NC,28092`

Not Good: `,,,NC,28092`

Better: `Lincolnton,NC,28092`

**8. Remove placeholders like XXXX for an unknown postcode digits.**

Not Good: `Augartenstrabe 26-28, Wien, xxxx, Österreich`

Better: `Augartenstrabe 26-28, Wien, Österreich`

**9. Treat postal codes as strings, not numbers. We often see queries with four digit postal codes when they should be five because the leading 0 has been removed somewhere along the way it was treated as a number rather than a string. If you know postal codes should be five digits add a check to ensure you are only sending us five digit strings.** 

Not Good: `77 Massachusetts Ave, Cambridge, MA 2142`

Better: `77 Massachusetts Ave, Cambridge, MA 02142`

**10. URL encode the query.**

Once you've done everything else, please make sure you [URL encode](https://en.wikipedia.org/wiki/Percent-encoding) the query.
Most programming langauges have a standard library for URL encoding (sometimes also known as "percent encoding". Please use it, don't try to invent your own.

Not Good: `Köln`

Better: `K%C3%B6ln`

Not Good: `Thành phố Hà Nội`

Better: `Th%C3%A0nh%20ph%E1%BB%91%20H%C3%A0%20N%E1%BB%99i`

**Final point** - you might ask why you need to bother doing all this, surely we should catch common problems on our side? A fair question. We do try to catch obvious things of course. As you can imagine though, it's difficult for us know the pecularities of your data in your language and country. The more you can do to simplify, clean, and correct your queries, the better a chance we have to geocode correctly.

Happy geocoding!
