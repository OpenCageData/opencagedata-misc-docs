If you are developing a new library or integration that uses the [OpenCage Geocoder](https://opencagedata.com) please follow these guidelines:

0. This may seem obvious, but before you start please take 10-15 minutes and [read the API docs](https://opencagedata.com/api). It's only one page. 

1. OK, ready? First, check [the existing list of libraries](https://opencagedata.com/code) and make sure what you are planning on writing doesn't already exist. Perhaps you can extend one of the existing projects rather than restarting from scratch?

2. Your library should NOT make a request unless you have a valid API key. Please do not store a key in the library, we recommend setting it via an environment variable.

3. Ensure that your code [respects the various response codes](https://opencagedata.com/api#codes). Don't unintentionally build a denial of service tool. Specifically, if you see `402` or `403` response codes, you library should stop rather than just carry on. 
  * For testing you can use the following API keys:
      * The key `4372eff77b8343cebfc843eb4da4ddc4` will always return a `402` response. [Sample request](https://api.opencagedata.com/geocode/v1/json?key=4372eff77b8343cebfc843eb4da4ddc4&q=52.51627%2C13.37769&pretty=1&no_annotations=1).
      * The key `2e10e5e828262eb243ec0b54681d699a` will always return a `403` response. [Sample request](https://api.opencagedata.com/geocode/v1/json?key=2e10e5e828262eb243ec0b54681d699a&q=52.51627%2C13.37769&pretty=1&no_annotations=1).

4. Similarly, please make sure you handle the case where the request is valid, but no results are returned. To create this situation in a test you can request the query `NOWHERE-INTERESTING` which will return a valid response with 0 results.

5. Please use a unique user-agent string, so we can see how different libraries are being used and more easily identify the source of any problems. 

6. Be aware that the API response varies slightly between free trial accounts and paid customer accounts. Paid accounts do not have the `rate` section of the response ([see docs](https://opencagedata.com/api#rate-limiting)) because paying customers have no hard limits. 

7. Please realise we are offering a geocoding API for the entire world. The world is a _very_ diverse place. **Design your code to be forgiving**, avoid making assumptions about what will be in the `components` portion of the results. As an example: don't assume we will always return a postcode, much of the world doesn't use postcodes. Indeed, you can not even assume we will return a country or ISO codes, the requested location could be in the middle of the ocean. Please see [our discussion of components in the API docs](https://opencagedata.com/api#formatted). 

8. In your documentation or README, please point your users the [best practices for using the OpenCage API](https://opencagedata.com/api#bestpractices), particularly our advice for [how to format forward geocoding queries](https://github.com/OpenCageData/opencagedata-roadmap/blob/master/query-formatting.md).  

9. In your documentation please show a few common usecases:

      * at least one example of both forward and reverse geocoding
      * print a result to STDOUT
      * what happens when there are no results - it was a valid query, but no results were found.
      
10. Please ensure that you support [the various optional API parameters](https://opencagedata.com/api#forward-opt), particularly things like `countrycode`, `abbrv`, `language`, etc.  

11. Please put your source code on Github, gitlab, etc to make it easy for others to contribute.

12. Please add a license to your code. Which one is up to you, but no license makes it harder for others to contribute. 

13. In your documentation please list any relevant prerequisites that need to be installed for your code to work. Ideally show the exact commands needed to install those prereqs.

14. Please submit your code to the relevant package manager (npm, CPAN, etc) for that language, and link to this in the documentation. 

15. Please set up an automated build from a service like [TravisCI](https://travis-ci.org) and add a build status badge on the README

16. Finally, don't forget to let us know what you've built so we can [add it to the list](https://opencagedata.com/code) and feature it on [our blog](https://blog.opencagedata.com) (of course giving you full credit for your work)! 

If you have any questions, please [just ask](https://opencagedata.com/contact), we are here to help.

Thank you, and happy geocoding!
