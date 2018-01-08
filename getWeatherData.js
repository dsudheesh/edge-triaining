//
//  Make 5 HTTP callouts to Yahoo weather to get the weather for 5 cities 
//  The calls are all asynchronous and execute in parallel
//  httpClient returns an exchange object that will contain the HTTP response. . . when it arrives
//
var appId = context.getVariable('demoWeatherappId');
print(appId);
var paloAlto = httpClient.get('http://api.openweathermap.org/data/2.5/weather?id=5345032&APPID='+appId); 
context.session['paloAlto'] = paloAlto;

var anchorage = httpClient.get('http://api.openweathermap.org/data/2.5/weather?id=5879400&APPID='+appId); 
context.session['anchorage'] = anchorage;

var honolulu = httpClient.get('http://api.openweathermap.org/data/2.5/weather?id=5856194&APPID='+appId);
context.session['honolulu'] = honolulu;

var newyork = httpClient.get('http://api.openweathermap.org/data/2.5/weather?id=5128638&APPID='+appId);
context.session['newyork'] = newyork;

var dublin = httpClient.get('http://api.openweathermap.org/data/2.5/weather?id=4192205&APPID='+appId);
context.session['dublin'] = dublin;