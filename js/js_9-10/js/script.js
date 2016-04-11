$(function() {

   $(".create").on("click", function(event){
        event.preventDefault();

        var theme = $( '.theme :selected' ).attr( 'value' );
       
        var resolut = $( '.resolut :selected' ).attr( 'value' );
        
        var number = $( '.number :selected' ).attr( 'value' );
        
        var line = $( "#tpl1" ).html();
        $( ".jcarousel ul li" ).remove();
        $( ".jcarousel-pagination a" ).remove();
        $( '.wrapper' ).hide()

        for (var i = 1; i <= number ; i ++ ){
            var tmp = line
                        .replace( /{{dir}}/ , theme )
                        .replace( /{{res}}/ , resolut )
                        .replace( /{{num}}/ , i );
          $(".jcarousel ul").append (tmp)           
        };

        loadJcarous();
                    
        $('.wrapper').slideDown();
   })



   function loadJcarous() {
        $('.jcarousel').jcarousel();

        $('.jcarousel-control-prev')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });


        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .jcarouselPagination();
    };



  $(' .niceCheck, select ').styler();

  $(".dropdown").hover(
        function(){
        $(this).children(".submenu").slideDown(150)
      },
        function(){    
        $(this).children(".submenu").slideUp(150)
      }
    );

  $(".dropright").hover(
        function(){   
        $(this).children(".submenu").slideDown(150)
      },
        function(){ 
        $(this).children(".submenu").slideUp(150)
      }
    );

  $(".menu a").hover(
        function(){
        $(this).animate( {
            "font-size": "+=3",
            "background-color":"#FA6055"
        }, 200)
    },
     function(){
        $(this).animate( {
            "font-size": "-=3",
            "background-color":"#F72516"
        }, 200)
    }
    )
     








});


