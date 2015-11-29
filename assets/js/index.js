$(window).resize(function() {
	centerContent($(this).height());
});

centerContent($(window).height());

function centerContent(documentHeight) {
	var content = $('.centered');
	content.css('margin-top', (documentHeight / 2) - (content.height() / 2));
}