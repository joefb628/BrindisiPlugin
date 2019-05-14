var idleTime = 0;
var timeIdle = 25;
var overlay = jQuery('<div id="overlay"><div id="text"></div></div>');

jQuery(document).ready(function() {
    jQuery(document).ready(function getDate(){
        var today = new Date();
        var hour = today.getHours();
        var minute = today.getMinutes();
        var second = today.getSeconds();
        var month = today.getMonth() + 1;
        var day = today.getDate();
        var year = today.getFullYear();
        var timeOfDay;
        if (hour < 12) {
            timeOfDay = "AM";
        } else {
            timeOfDay = "PM";
        }
        if(hour == 0) {
            hour = 12;
        }
        if(minute < 10) {
            minute = "0" + minute;
        }
        if(second < 10) {
            second = "0" + second;
        }
    
        var time = hour + ":" + minute + ":" + second + " " + timeOfDay;
        var str = "Today is";
        var date = month + "/" + day + "/" + year;

        overlay = jQuery('<div id="overlay"><div id="text">' + time + '<br><br>' + str + '<br>' + date + '</div></div>');
        setTimeout(function(){getDate()}, 500);
    });
    
    jQuery(document).mousemove(function (e) {
        jQuery( "#overlay" ).remove();
        idleTime = 0;
    });
    jQuery(document).keypress(function (e) {
        jQuery( "#overlay" ).remove();
        idleTime = 0;
    });

    var idleInterval = setInterval(timerIncrement, 200);

    function timerIncrement() {
        idleTime++;
        if (idleTime > timeIdle) {
        jQuery( "#overlay" ).remove();
        overlay.appendTo(document.body);
        }
    }

});