If you are developing a new library or integration that uses the [OpenCage Geocoder](https://opencagedata.com) please follow these guidelines:

0. This may seem obvious, but before you start please take 10-15 minutes and [read the API docs](https://opencagedata.com/api). It's only one page. 

1. OK, ready? First, check [the existing list of libraries](https://opencagedata.com/code) and make sure what you are planning on writing doesn't already exist. Perhaps you can extend one of the existing projects rather than restarting from scratch?

2. Your library should NOT make a request unless you have a valid API key. Please do not store a key in the library, we recommend setting it via an environment variable.

3. Ensure that your code [respects the various response codes](https://opencagedata.com/api#codes). Don't unintentionally build a denial of service tool. Specifically, if you see `402` or `403` response codes, you library should stop rather than just carry on. 
      * For testing the API key `2e10e5e828262eb243ec0b54681d699a` will always return a `403` response.

4. Please use a unique user-agent string, so we can see how different libraries are being used and more easily identify the source of any problems. 

5. Be aware that the API response varies slightly between free trial accounts and paid customer accounts. Paid accounts do not have the `rate` section of the response ([see docs](https://opencagedata.com/api#rate-limiting)) because paying customers have no hard limits. 

6. In your documentation or README, please point your users the [best practices for using the OpenCage API](https://opencagedata.com/api#bestpractices), particularly our advice for [how to format forward geocoding queries](https://github.com/OpenCageData/opencagedata-roadmap/blob/master/query-formatting.md).  

7. In your documentation please show a few common usecases:

      * at least one example of both forward and reverse geocoding
      * print a result to STDOUT
      
8. Please ensure that you support [the various optional API parameters](https://opencagedata.com/api#forward-opt), particularly things like `countrycode`, `abbrv`, `language`, etc.  

9. Please put your source code on Github, gitlab, etc to make it easy for others to contribute.

10. Please add a license to your code. Which one is up to you, but no license makes it harder for others to contribute. 

11. In your documentation please list any relevant prerequisites that need to be installed for your code to work. Ideally show the exact commands needed to install those prereqs.

12. Please submit your code to the relevant package manager (npm, CPAN, etc) for that language, and link to this in the documentation. 

13. Please set up an automated build from a service like [TravisCI](https://travis-ci.org) and add a build status badge on the README

14. Finally, don't forget to let us know what you've built so we can [add it to the list](https://opencagedata.com/code) and feature it on [our blog](https://blog.opencagedata.com) (of course giving you full credit for your work)! 

If you have any questions, please [just ask](https://opencagedata.com/contact), we are here to help.

Thank you, and happy geocoding!
