(function($) {
  $.fn.myCarousel = function(delay) {

  	var $carousel =  $(".carousel-wrapper"); 

    $carousel.append ('<div class="button-left">&lsaquo;</div>');
    $carousel.append ('<div class="button-right">&rsaquo;</div>');

    var elementsList = $(".carousel-wrapper ul").addClass("carousel-list");
    var elementsCount = $(".carousel-wrapper li").addClass("carousel-element").length;
    var getLeft = $('.button-left');
    var getRigh = $('.button-right');
    
  	var time = delay || 200
    var picWidht = 600;
    var currentLeftValue = 0;
    var minimumOffset = - ((elementsCount-1) * picWidht);
    var maximumOffset = 0;
    getLeft.hide(400)

    getLeft.click(function() {        
        if (currentLeftValue != maximumOffset) {
        	getRigh.show(400);
            currentLeftValue += picWidht;
            elementsList.animate({ left : currentLeftValue + "px"}, time);
        } 
        if (currentLeftValue == maximumOffset){
        	getLeft.hide(400)
        }
    });
 
    getRigh.click(function() {        
        if (currentLeftValue != minimumOffset) {
        	getLeft.show(400);
            currentLeftValue -= picWidht;
            elementsList.animate({ left : currentLeftValue + "px"}, time);
        }  
        if (currentLeftValue == minimumOffset){
        	getRigh.hide(400)
        }     
    });

    return this;
 };
})(jQuery);