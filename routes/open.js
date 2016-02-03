var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	
	var gpio = require("pi-gpio");

	var intervalId;
	var durationId;
	var durationId2;
	var apDoor = 15;    // header pin 16 = GPIO port 23
	var flatDoor = 16;

	gpio.open(apDoor, "output", function(err) {
	        gpio.write(apDoor, 1, function() {});
	});

	durationId = setTimeout( function(){
	  clearTimeout(durationId);
	  gpio.write(apDoor, 0, function() { // turn off pin 15
	  gpio.close(apDoor); // then Close pin 15
	  });
	}, 600); // duration in mS
	
	
	gpio.open(flatDoor, "output", function(err) {
	        gpio.write(flatDoor, 1, function() {});
	});

	durationId2 = setTimeout( function(){
	  clearTimeout(durationId2);
	  gpio.write(flatDoor, 0, function() { // turn off pin 16
	  gpio.close(flatDoor); // then Close pin 16
	  });
	}, 250); // duration in mS

	res.redirect('/');  
});

module.exports = router;
