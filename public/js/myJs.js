/*
'use strict'
$(document).ready (() => {
	var divHeight = $('.color-overlay:eq(0)').height();
	var divWidth = $('')
});
*/
/*
$(function() {
// Video Plugin
$( ".color-overlay:eq(0)" ).append( $('.firstsquarepluginsvideo') );
});


$(function() {
// Video Plugin
$( " .color-overlay:eq(0)" ).append( $('.firstvideooverlay') );
});
*/

$(document).ready ( function(){
	var divHeight = $(' .firstsquarepluginsvideo').height();
	var divWidth = $(' .firstsquarepluginsvideo').width();

	console.log(divHeight);
	console.log(divWidth);
	//$('.firstsquarepluginsvideo').height(divHeight*2.5);
	

	// Now I have the size I need to put this size the video
	//$('.firstsquarepluginsvideo').height(divWidth);

	//var aspHeight = divWidth / divHeight;
/*
	if(aspHeight < 1.7){
		$('.firstsplgvideoframe').height(1.1 * divHeight);
		$('.firstsplgvideoframe').width(2 * divHeight);
	}
	if(aspHeight > 1.7){
		//$('.firstsplgvideoframe').height(0.7 * divWidth);
		//$('.firstsplgvideoframe').width(1.3 * divWidth);
		//$('.firstsquarepluginsvideo').height(2 * divHeight);
	}
*/
});

window.onresize = resize;

function resize() {
	var divHeight = $(' .firstsquarepluginsvideo').height();
	var divWidth = $(' .firstsquarepluginsvideo').width();

	console.log(divHeight);
	console.log(divWidth);
}

/*
var iframe = $('.firstsplgvideoframe')[0],
player = $f(iframe),
status = $('.status'); player.addEvent('ready', function() {
player.api('setVolume', 0);
});
*/