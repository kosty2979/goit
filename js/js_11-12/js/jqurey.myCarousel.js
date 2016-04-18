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

 
    getLeft.click(function() {        
        if (currentLeftValue != maximumOffset) {
            currentLeftValue += picWidht;
            elementsList.animate({ left : currentLeftValue + "px"}, time);
        }        
    });
 
    getRigh.click(function() {        
        if (currentLeftValue != minimumOffset) {
            currentLeftValue -= picWidht;
            elementsList.animate({ left : currentLeftValue + "px"}, time);
        }        
    });

    return this;
 };
})(jQuery);