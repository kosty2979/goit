$(function() {

 


   
        $('.jcarousel').jcarousel();

       

        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .jcarouselPagination({
      item: function(page) {
          return '<a href="#' + page + '">' + "&#9632;" + '</a>';
      }
  });
  

  $('.jcarousel').jcarouselAutoscroll({
      interval: 5000,
      target: '+=1',
      autostart: true
  });
  
  var accordActiv = $('.accord__show').eq(0)
  
  accordActiv.addClass('active');
  accordActiv.siblings('.accord__content')
                  .css("display", "block");
  accordActiv.children('i').removeClass("fa-plus")
                  .addClass("fa-minus")
 $(".accord__titel > span").on("click", function(){
        if($(this).hasClass('active')){
            $(this).removeClass("active");
            $(this).siblings('.accord__content').slideUp(200);
            $(".accord__titel > span i").removeClass("fa-minus").addClass("fa-plus");
        }else{
            $(".accord__titel > span i").removeClass("fa-minus").addClass("fa-plus");
            $(this).find("i").removeClass("fa-plus").addClass("fa-minus");
            $(".accord__titel > span").removeClass("active");
            $(this).addClass("active");
            $('.accord__content').slideUp(200);
            $(this).siblings('.accord__content').slideDown(200);
        }
    });
});

