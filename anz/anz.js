
var useragent = navigator.userAgent;    
var iOS = (useragent.match(/(iPad|iPhone|iPod)/g) ? true : false );
var isSafariVersion = (useragent.match(/Version\/(4.0|4.0.4|4.0.5|5.0.2|5.1|6.0|7.0)/g) ? true : false);
var isMobileSafari = (iOS&isSafariVersion ? true : false);

if(isMobileSafari == true){
    $("#ics").css("display", "block");
}
