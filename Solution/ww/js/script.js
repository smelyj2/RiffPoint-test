function zhideShowDiv(){ 
	$('.drop-block-area').toggle();
}

function modalOpen(event) {	
event.preventDefault();
	$('.overlay')
		.fadeIn(400, function(){
			$('.drop-block-area').css('display', 'block').animate({right:'-1%'},400)  
		});
}

function modalClose() {	
	$('.drop-block-area')
		.animate({right:'-69%'}, 400,
			function(){
				$('.overlay').fadeOut(400);
			}
		);
}