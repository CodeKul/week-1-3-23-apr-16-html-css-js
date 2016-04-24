/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function getWetherInfo() {

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {

           var geoNames = JSON.parse(xmlHttp.responseText);
           
            console.log("List length = "+geoNames.geonames.length);
            
            var ulGeoNames = document.createElement("ul");
            for(var i = 0; i < geoNames.geonames.length; i++ ){
                
                var geoName = geoNames.geonames[i];
                var liGeoName = document.createElement("li");
                liGeoName.innerHTML = ""+geoName.fclName+"<br/>"+geoName.toponymName+"<br/>"+geoName.wikipedia;
                ulGeoNames.appendChild(liGeoName);
            }
            document.getElementById("divWeather").appendChild(ulGeoNames);
        }
    };
    xmlHttp.open("GET", "http://api.geonames.org/citiesJSON?north=44.1&south=-9.9&east=-22.4&west=55.2&lang=de&username=demo", true);
    xmlHttp.send();
}
