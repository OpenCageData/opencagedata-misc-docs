This document shows how to query the
[OpenCage geocoder](https://opencagedata.com) using
William Durand's [Geocoder-PHP](http://geocoder-php.org/Geocoder/) library.

To get tests passing we had to:

* Install PHP (php-cli package on Ubuntu)
* Install Composer (https://getcomposer.org/download/)
* Install php-curl, php-xml and php-mbstring
* Run `composer install` and `composer install --dev`
* Run `cp phpunit.xml.dist phpunit.xml` and add your OpenCage API key (to get a free trial key register on the OpenCage site)
* Run `composer test`

_Example Reverse_

    #!/usr/bin/env php
    <?php

    require __DIR__ . '/vendor/autoload.php';

    use Http\Adapter\Guzzle7\Client as GuzzleAdapter;
    use Geocoder\Query\ReverseQuery;

    $adapter  = new GuzzleAdapter();
    $provider = new \Geocoder\Provider\OpenCage\OpenCage($adapter, 'YOUR-OPENCAGE-API-KEY');
    $geocoder = new \Geocoder\StatefulGeocoder($provider, 'en');

    $results = $geocoder->reverseQuery(ReverseQuery::fromCoordinates(37.4856225, -122.1468803));

    echo $results->first()->getStreetName() . "\n";

_Example Forward_

    #!/usr/bin/env php
    <?php

    require __DIR__ . '/vendor/autoload.php';

    use Http\Adapter\Guzzle7\Client as GuzzleAdapter;
    use Geocoder\Query\GeocodeQuery;

    $adapter  = new GuzzleAdapter();
    $provider = new \Geocoder\Provider\OpenCage\OpenCage($adapter, 'YOUR-OPENCAGE-API-KEY');
    $geocoder = new \Geocoder\StatefulGeocoder($provider, 'en');

    $results = $geocoder->geocodeQuery(GeocodeQuery::create('1 Hacker Way, Menlo Park, 94025'));

    $coords = $results->first()->getCoordinates();

    echo json_encode([ 'lat' => $coords->getLatitude(), 'lon' => $coords->getLongitude() ]) . "\n";



