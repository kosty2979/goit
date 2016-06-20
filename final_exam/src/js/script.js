function updatePictures(input) {
  var page = randomNum(20);
  var API_KEY = '2763192-f60ef475d94e3c3bae5956be1';
  var URL = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + encodeURIComponent(input) + "&order=popular&image_type=photo&per_page=7"+"&page="+page +"&callback=?";
  $.getJSON(URL, function(data) {
    if (parseInt(data.totalHits) > 0) {
      var html = $('#template').html();
      var tmpl = _.template(html);
      var content = tmpl(data);
      $(".gallery__pictures").empty().append(content);
      $('.grid').masonry({
        itemSelector: '.item',
      });
    }  else {
        showModal('No results or no connection');
      }
  })
};

function searchPartners() {
  var page = randomNum(30);
  var $block=$(".partners__wrapper");
  $block.slideUp(100);
  var URL = "http://api.randomuser.me/?page=" + page + "&results=4";
  $.getJSON(URL, function(data) {
    if (data.results.length > 0) { 
      var html = $('#template2').html();
      var tmpl = _.template(html);
      var content = tmpl(data);
      
      $block.empty().append(content);
      $block.slideDown(800);
    }else{
      showModal('No results or no connection');
      $block.slideDown(800);  
    }
  })  
};

function randomNum(max){
  return Math.round(Math.random()*max||10)
};


function showModal(text){
  $(".modal__new h3").html(text);
  $(".lock").show(400);
  setTimeout(function() {
    $(".lock").hide(400);
  }, 1000);
};


  $(function() {
    updatePictures('');
    jQuery(".fancyimage").fancybox();


    function scrollTo(id, delay){
      var top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, delay || 400);
    };
    /*-----carousel-----*/
    $('.jcarousel').jcarousel({
      wrap: 'both',
      animation: {
        duration: 300,
        easing:   'linear',
        complete: function() {
        }},
      });
    $('.sliders__arrow--left').jcarouselControl({
      target: '-=1'
    });
    $('.sliders__arrow--right').jcarouselControl({
      target: '+=1'
    });

    $('.jcarousel--1').jcarouselAutoscroll({
      interval: 2500,
      target: '+=1',
      autostart: true
    });
    $('.jcarousel--2').jcarouselAutoscroll({
      interval: 4500,
      target: '+=1',
      autostart: true
    });
    $('.jcarousel--3').jcarouselAutoscroll({
      interval: 6300,
      target: '+=1',
      autostart: true
    });

    /*----animate scroll to partners----*/
    $(".wrapper--header").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href');
      scrollTo(id, 900);
    });
    /*----gallery----*/   
    $("#gallery__form").submit(function(event) {
      event.preventDefault();
      var input = $.trim($("#gallery__input").val());
      $("#gallery__input").val("")
      if (!input) {
       showModal('invalid request');
     }
     else {
      var id  = $(this).attr('data-href');
      scrollTo(id);
      updatePictures(input);
    }
  });
    /*---search partners---*/
    $(".partners__seeOther").on("click", function(){
      var id  = $(this).attr('data-href');
      scrollTo(id);
      searchPartners();
    })
    





  });