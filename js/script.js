$(document).ready(function()	{
	var $winHeight = $(window).outerHeight();
	var $jumHeight = $winHeight-90;
	$('.jumbo').css('height', $jumHeight);
	$('#join').css('margin-top', $jumHeight/3);
	$('#join').css('font-size', $jumHeight/8);
	$('#hoops').css('font-size', $jumHeight/10);

	$(window).resize(function()	{
		var $height = $(window).outerHeight()-90;
		$('.jumbo').css('height', $height);
		$('#join').css('margin-top', $height/3);
		$('#join').css('font-size', $height/8);
		$('#hoops').css('font-size', $height/10);
	});

	$('.button-white').hover(
		function()	{
			$(this).children().animate({backgroundColor: '#1394e2', color: '#fcfcfc'}, 150);
		},
		function()	{
			$(this).children().animate({backgroundColor: '#fcfcfc', color: '#1394e2'}, 150);
		}
	);

	$('.button-blue').hover(
		function()	{
			$(this).children().animate({backgroundColor: '#fcfcfc', color: '#e64314'}, 150);
		},
		function()	{
			$(this).children().animate({backgroundColor: 'transparent', color: '#fcfcfc'}, 150);
		}
	);

	$('.menuItems-white').hover(
		function()	{
			$(this).animate({backgroundColor: '#939393', color: '#fcfcfc'}, 150);
		},
		function()	{
			$(this).animate({backgroundColor: '#1394E2', color: '#fcfcfc'}, 150);
		}
	);

	$('.menuItems-blue').hover(
		function()	{
			$(this).animate({backgroundColor: '#939393', color: '#fcfcfc'}, 150);
		},
		function()	{
			$(this).animate({backgroundColor: '#fcfcfc', color: '#1394E2'}, 150);
		}
	);

	$('#home').click(function(){
		$(document.body).animate({scrollTop: 0}, 300);
		return false;
	});

	$('#about').click(function(){
		$(document.body).animate({scrollTop: $jumHeight}, 300);
	});

	$('#me').click(function(){
		$(document.body).animate({scrollTop: $jumHeight + 760}, 300);
	});

	$('#events').click(function(){
		$(document.body).animate({scrollTop: $jumHeight + 760 * 2}, 300);
	});

	$('#sponsors').click(function(){
		$(document.body).animate({scrollTop: $jumHeight + 760 * 2 + 520}, 300);
	});

	$('#contact').click(function(){
		$(document.body).animate({scrollTop: $jumHeight + 760 * 4 + 520}, 300);
	});

	$('#sponsor').click(function(){
		$(document.body).animate({scrollTop: $jumHeight + 760 * 4 + 520}, 300);
	})
});