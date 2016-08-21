$(document).ready(function() {
	$("li").on("click", function() {
		$(this).addClass("activeTab");
		$(this).siblings().removeClass("activeTab");
		var index = $(this).index("li");
		$("div").eq(index).addClass("active");
		$("div").eq(index).siblings().removeClass("active");
	});
});