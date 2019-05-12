$('head').append('<link rel="stylesheet" href="style.css" type="text/css" />');

var idleTime = 0;
var timeIdle = 1;
var overlay = jQuery('<div id="overlay"><div id="text"></div></div>');

$(document).ready(function() {
	$(document).ready(function getdate(){
  	var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var month = today.getMonth() + 1;
    var day = today.getDate();
    var year = today.getFullYear();
    var timeOfDay;
    if (h < 12) {
    	timeOfDay = "AM";
    } else {
    	timeOfDay = "PM";
    }
    if(h == 0) {
    	h = 12;
    }
    if(m < 10) {
    	m = "0" + m;
    }
    if(s < 10) {
    	s = "0" + s;
    }
						
    var time = h + " : " + m + " : " + s + " " + timeOfDay;
    var str = "Today is:";
    var date = month + " - " + day + " - " + year;

		overlay = jQuery('<div id="overlay"><div id="text">' + time + '<br><br>' + str + '<br>' + date + '</div></div>');
		setTimeout(function(){getdate()}, 500);
	});

	var idleInterval = setInterval(timerIncrement, 60000);

	$(document).mousemove(function (e) {
  	$( "#overlay" ).remove();
		idleTime = 0;
	});
	$(document).keypress(function (e) {
  	$( "#overlay" ).remove();
		idleTime = 0;
	});

	function timerIncrement() {
		idleTime++;
		if (idleTime > timeIdle) {
    	$( "#overlay" ).remove();
   		overlay.appendTo(document.body);
		}
	}

});