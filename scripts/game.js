
// Not in use. Placeholder to be used.
let gamesettings = {
    backgroundSpeed: 0,
    treeSpeed: 0,
    cowSpeed: 0,
    cloudSpeed: 0,
    weather: 'clear',
}

let config = {
    width: 960,
    height: 540,
    backgroundColor: 0x000000,
    scene: [Scene1, Scene2],
    physics:{
        default: "arcade",
        arcade:{
            debug: false
        }
    }
    
}
const successCallback = (position) => {
    console.log(position.coords.latitude, position.coords.longitude);
    //document.getElementById(`location`).innerHTML = `Latitude: `+ position.coords.latitude + ` Longitude: `+position.coords.longitude;
    getCity(position);
  };
  
  
  const errorCallback = (error) => {
    console.error(error);
  };
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback,{
    enableHighAccuracy: true,
    timeout: 5000
  });
  
  
  function getCity(position) { 
    let xhr = new XMLHttpRequest(); 
    let lat = position.coords.latitude;
    let lng = position.coords.longitude; 
  
  
    xhr.open(`GET`, `https://us1.locationiq.com/v1/reverse.php?key=69771d303c7ec1&lat=` + 
    lat + `&lon=` + lng + `&format=json`, true); 
    xhr.send(); 
    xhr.onreadystatechange = processRequest; 
    xhr.addEventListener(`readystatechange`, processRequest, false); 
  
    function processRequest(e) { 
      if (xhr.readyState == 4 && xhr.status == 200) { 
        let response = JSON.parse(xhr.responseText); 
        let city = response.address.city; 
        console.log(city); 
        //document.getElementById(`city`).innerHTML = `City: `+ city;
        return; 
      } 
    } 
}


let game = new Phaser.Game(config);