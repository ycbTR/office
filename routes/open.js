var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

	var gpio = require("pi-gpio");

	var intervalId;
	var durationId;
	var gpioPin = 16;    // header pin 16 = GPIO port 23

	gpio.open(gpioPin, "output", function(err) {
	        gpio.write(gpioPin, 1, function() {});
	});

	durationId = setTimeout( function(){
	  clearTimeout(durationId);
	  gpio.write(gpioPin, 0, function() { // turn off pin 16
	  gpio.close(gpioPin); // then Close pin 16
	  process.exit(0); // and terminate the program
	  });
	}, 200); // duration in mS
	
  res.send('respond with a resource');
});

module.exports = router;
