function getBathValue() {
  var uiBathrooms = document.getElementsByName("uiBathrooms");
  for(var i in uiBathrooms) {
    if(uiBathrooms[i].checked) {
      // FIX: Return the numeric VALUE attribute of the checked radio button
      return parseInt(uiBathrooms[i].value); 
    }
  }
  return -1; // Should not happen if a default is checked
}

function getBHKValue() {
  var uiBHK = document.getElementsByName("uiBHK");
  for(var i in uiBHK) {
    if(uiBHK[i].checked) {
      // FIX: Return the numeric VALUE attribute of the checked radio button
      return parseInt(uiBHK[i].value); 
    }
  }
  return -1;
}

function onClickedEstimatePrice() {
  console.log("Estimate price button clicked");
  var sqft = document.getElementById("uiSqft");
  var bhk = getBHKValue();
  var bathrooms = getBathValue();
  var location = document.getElementById("uiLocations");
  var estPrice = document.getElementById("uiEstimatedPrice");

  var url = "http://127.0.0.1:5000/predict_home_price"; //Use this if you are NOT using nginx which is first 7 tutorials
  //var url = "/api/predict_home_price"; // Use this if  you are using nginx. i.e tutorial 8 and onwards

  $.post(url, {
      total_sqft: parseFloat(sqft.value),
      bhk: bhk,
      bath: bathrooms,
      location: location.value
  },function(data, status) {
      console.log(data.estimated_price);
      estPrice.innerHTML = "<h2>" + data.estimated_price.toString() + " Lakh</h2>";
      console.log(status);
  });
}

function onPageLoad() {
    console.log( "document loaded" );
    var url = "http://127.0.0.1:5000/get_location_names"; 

    $.get(url, function(data, status) {
        console.log("got response for get_location_names request");
        if(data) {
            var locations = data.location;
            var uiLocations = document.getElementById("uiLocations");
            
            // 1. CLEAR all existing options
            $('#uiLocations').empty(); 
            
            // 2. RE-ADD the default option explicitly
            // This option ensures the user sees a prompt and can select a valid location
            var defaultOption = new Option("Choose a Location", ""); // Value is often set to an empty string
            defaultOption.disabled = true;
            defaultOption.selected = true;
            $('#uiLocations').append(defaultOption);

            // 3. POPULATE with dynamic locations
            for(var i in locations) {
                var opt = new Option(locations[i]);
                $('#uiLocations').append(opt);
            }
        }
    });
}

window.onload = onPageLoad;