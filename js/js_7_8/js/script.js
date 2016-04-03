$(document).ready(function() {

	/*------tabs-------*/
	$('ul.tabs li').on('click', function(){
		var activClass = this.className.slice( 1,2 );
		var divClass = "tab-content" + activClass;

		$( 'ul.tabs li' ).removeClass( 'tab-active' );
		$( 'div.wrapper-content div' ).removeClass( 'content-active' );

		$( this ).addClass( 'tab-active' );
		$( 'div.' + divClass ).addClass( 'content-active' );
	});

	/*-----form-------*/
	$('input').hover( function(){
		
		var $text = $ (this).data( "title" );
		var $div = $ (this).siblings( '.tip' );
		$($div).text($text)
		.css ('display' , 'inline-block')

	},function() {

		$ (this).siblings( '.tip' ).css ('display' , 'none')

	});
	
	$('.button').on('click', function(el){
		el.preventDefault();
		$('input').trigger("mouseenter")
	})


});