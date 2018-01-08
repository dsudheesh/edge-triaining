// For each city, wait for the HTTP response and extract the 
// RSS XML

var paloAltoJson = getJson('paloAlto');
var anchorageJson = getJson('anchorage');
var honoluluJson = getJson('honolulu');
var newyorkJson = getJson('newyork');
var dublinJson = getJson('dublin');

//  convert all 5 RSS responses to JSON and compose

var json = {};

json.paloAlto  = extractTempSunriseSunset(paloAltoJson);
json.anchorage = extractTempSunriseSunset(anchorageJson);
json.honolulu  = extractTempSunriseSunset(honoluluJson);
json.newyork   = extractTempSunriseSunset(newyorkJson);
json.dublin    = extractTempSunriseSunset(dublinJson);


// get the response content as a json object
var responseJson = response.content.asJSON;

// set the weather data in response object
responseJson.weatherData = json;

// update the response content, providing a pretty print
response.content = JSON.stringify(responseJson, null, 2);
context.setVariable("myPayload", JSON.stringify(responseJson, null, 2));




//  =========== functions =========

// Given a name, take the exchange from the session object
// wait for the HTTP response to complete
// check for errors
// check the status code is 200
// return the XML as an XML object.

function getJson(name) {
	 var exchange = context.session[name];
	 exchange.waitForComplete(1000);
	 if (exchange.isSuccess()) {
		var resp = exchange.getResponse();
		// check the status code
		if (resp.status==200) {
		  return resp.content.asJSON;
        }else{
          
			throw "Failed to connect to "+name+". Status code is " + resp.status;
        }
     }else{
       
		throw "Failed to connect to " + name + ". Error is {" + exchange.getError() + "} ";
     }
}

// Extract values from the XML 
// The format of the RSS is as follows :
//<rss xmlns:yweather='http://xml.weather.yahoo.com/ns/rss/1.0'>
//         <channel>
//		  ...
//		  <item>
//		     <yweather:condition  text='Light Rain' temp='54'   />
//		  </item>
//		  ...
//		  <yweather:astronomy sunrise='6:37 am'   sunset='7:38 pm'/>
//        ...
//        </channel>
//</rss>"
//

function extractTempSunriseSunset(json) {
    
	var yweather = new Namespace('http://xml.weather.yahoo.com/ns/rss/1.0');
	var temp =  json.main.temp;
	var sunrise =  json.sys.sunrise;
	var sunset =  json.sys.sunset;
	var j = { "temp" : temp ,  "sunrise" : sunrise , "sunset" : sunset };
	return j;
}