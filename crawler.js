var request = require('request');
var url = "http://opendata.epa.gov.tw/ws/Data/UV/?$format=json";
var fs = require('fs');
var data = [];

function crawler(){
	request(url, function(err, response, body){
		if(err) return err;
		data = JSON.parse(body);
		for(var obj in data){
			if(data[obj].SiteName == '臺北' && data[obj].County == '臺北市'){
				// console.log(data[obj].UVI);
				//write uv data to arduino
			}
		}
	});
}

crawler();