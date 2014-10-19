#Headers bug reproduction

In nodejs, the same header for an http response can be set multiple times, by
passing an array as the second argument of the `http.ServerResponse.setHeader`
method. ([Link to the docs](http://nodejs.org/api/http.html#http_response_setheader_name_value)).

The same doesn't seem to be possible in Meteor, as this project shows.

![Chrome network tab](http://s18.postimg.org/rkbsuppt5/Screen_Shot_2014_10_19_at_12_09_05.png)
