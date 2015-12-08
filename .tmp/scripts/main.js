"use strict";

console.log('\'Allo \'Allo!'); // eslint-disable-line no-console

//jQuery time
var current_fs, next_fs, previous_fs;
var left, opacity, scale;
var animating;

var create_fs = 1;
$(".submit_btn").click(function () {
	if (function (create_fs) {
		return 1;
	}) {
		$("fieldset:first-of-type").removeClass('fadeIn', 'slideRight_animation').css("display", "none");
		$("fieldset:last-of-type").css("display", 'block').addClass('slideRight_animation');
		create_fs = 2;
		//alert (create_fs);
		$(".submit_btn").html('save');
		$(".prevbutton").css("display", "block").addClass('slideLeft_animation');
	}
});

$(".prevbutton").click(function () {
	if (create_fs = 2) {
		$("fieldset:last-of-type").removeClass('slideRight_animation', 'slideLeft_animation').css("display", "none");
		$("fieldset:first-of-type").css("display", 'block').addClass('slideLeft_animation');
		create_fs = 1;
		$(".submit_btn").html('Next');
		$(".prevbutton").css("display", "none");
	}
});

$("#account_create_btn").click(function () {
	$("#account_create_btn").css("display", "none");
	$("fieldset:last-of-type").css("display", 'block').addClass('slideRight_animation');
});
//# sourceMappingURL=main.js.map
