var gpio = require("pi-gpio");
var intervalId;
var durationId;
var durationId2;
var apDoor = 15;    // header pin 16 = GPIO port 23
var flatDoor = 16;

function openMain(){
	
	gpio.open(apDoor, "output", function(err) {
	        gpio.write(apDoor, 0, function() {});
	});

	durationId = setTimeout( function(){
	  clearTimeout(durationId);
	  gpio.write(apDoor, 1, function() { // turn off pin 15
	  gpio.close(apDoor); // then Close pin 15
	  });
	}, 400); // duration in mS
	
}

function openFlat(){
		
	gpio.open(flatDoor, "output", function(err) {
	        gpio.write(flatDoor, 0, function() {});
	});

	durationId2 = setTimeout( function(){
	  clearTimeout(durationId2);
	  gpio.write(flatDoor, 1, function() { // turn off pin 16
	  gpio.close(flatDoor); // then Close pin 16
	  });
	}, 400); // duration in mS	
}

module.exports.openMain = openMain;
module.exports.openFlat = openFlat;