window.onload = function() {
	// alert( "welcome" );
}


$(document).ready(function() {

	$('.sk-input').change(
		function() {
			updateSkillPoints();
		}
	);

});


$( ".sk-input" ).change(function() {
	alert( "Handler for .change() called.");
});


var loadSkills = function() {
	window.skPts = 60;
}