$(document).ready(function() {

	var dataLinks = {
		url: "http://lorempixel.com/image_output/",
		thems: [
		"animals",
		"city",
		"nature"
		],
		resolution: "-q-c-600-400-",
		extension: ".jpg"
	}

	var tmpl=$("#template").html()
	var html = _.template(tmpl)(dataLinks);

	   $("body").append (html) 

	$("carousel-wrapper").myCarousel(500)

	var dataResume = {
			name: "Гнездилов Константин Викторович",
			linkSmall: "image/1.jpg",
			linkBig: "image/222.jpg",
			companyUrl: "http://unittel.prom.ua/about_us",
			companyName: "UNITTEL",
			aboutMe: "закончил 'Донецкий Техникум Промышленной Автоматики' по специальности 'Эксплуатация средств связи в угольной промышленности', потом окончил Украинскую Национальную Академия Связи им. А.С.Попова и получил степень специалиста факультета 'Телекомуникационные системы и сети'",
			reason: [
			"В моей отрасли кризис",
			"Работы нет",
			"Перспективное направление"
			],
			phone: "095 523 42 23",
			fLink: "https://www.facebook.com/profile.php?id=100007060695480",
			feedBack: "если вам нужно помочь, то я могу помочь"	
		}

	var tmpl2=$("#template2").html()
	var html2 = _.template(tmpl2)(dataResume);
	
	$("body").append (html2) 

})



