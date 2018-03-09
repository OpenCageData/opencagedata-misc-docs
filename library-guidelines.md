If you are developing a new library or integration that uses the OpenCage Geocoder please follow these guidelines:

1. Please first check [the existing list of libraries](https://geocoder.opencagedata.com/code) and make sure what you are planning on writing doesn't already exist. Perhaps you can extend one of the existing projects rather than restarting from scratch.

2. Please ensure that your code [respects the various response codes](https://geocoder.opencagedata.com/api#codes). Don't unintentionally build a denial of service tool.

3. Please use a unique user-agent string, so we can see how different libraries are being used and more easily identify the source of any problems. 

4. Be aware that the API response varies slightly between free trial accounts and paid customer accounts. Specifically paid accounts do not have the `rate` section of the response ([see docs](https://geocoder.opencagedata.com/api#rate-limiting)) because paying customers have no hard limits. 

5. In your documentation or README, please point your users the [best practices for using the OpenCage API](https://geocoder.opencagedata.com/api#bestpractices), particularly our advice for [how to format forward geocoding queries](https://github.com/OpenCageData/opencagedata-roadmap/blob/master/query-formatting.md).  

6. Please put your source code on Github or otherwise make it open-source so others can contribute

7. Please let us know what you've built do we can [add it to the list](https://geocoder.opencagedata.com/code) and feature it on [our blog](https://blog.opencagedata.com). 

If you have any questions, please [just ask](https://geocoder.opencagedata.com/contact), we are here to help.

Thank you, and happy geocoding!
