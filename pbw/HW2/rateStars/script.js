$(document).ready(function() {
	$("li").hover(function() {
		$(this).prevAll().andSelf().addClass("over");
	}, function() {
		$(this).prevAll().andSelf().removeClass("over");
	});
	$("li").on("click", function() {
		$(this).prevAll().andSelf().addClass("highlight");
		$(this).nextAll().removeClass("highlight");
		var index = $(this).index("li");
		$("p > span").text(index+1 + " stars");
	});
});