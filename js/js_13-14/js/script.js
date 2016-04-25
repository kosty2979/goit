"use strict";
	var testData;
	var obj = {
			"name": "тест на проверку IQ",
			"quest": [
			 	{"title": "Почему?",
	 			"answers": ["потому", "по качану", "не знаю"],
	  			"correct": "потому"
	  			},
	  			{"title": "Где?",
	 			"answers": ["там", "не там", "вот там"],
	  			"correct": "там"
	  			},
	  			{"title": "Сколько?",
	 			"answers": ["столько", "500", "не знаю"],
	  			"correct": "столько"
	  			}
			],
			"result":[
			" Без коментариев.",
			" С вашим интелектом не стоит жить дальше.",
			" Среди обезьян вы будете своим человек.",
			" Можно ходить в театр."
			]
	};
$(function  () {

var	tmp = JSON.stringify(obj);

localStorage.setItem("test", tmp );

$("#createTest").on("click", function(){
	createTest();
	$("#checkTest").on("click", function(){
	checkTest();
	})
});

});

function createTest () {

	testData=localStorage.getItem("test") ;
	testData=JSON.parse(testData);
	$("#createTest").hide();

	var tmpl=$("#template").html();
	var html = _.template(tmpl)(testData);
	$("body").append (html);
	$(".lock").hide()
};

function checkTest (){
	var answer = [];
	var $elements = $(".label-input:checked");

	if ($elements.length!=testData.quest.length) {
			alert("Не все вопросы отмечены");
			
		$("li").each(function(){
			var w=$(this).find("input:checked");
			var e=w.length;
			if (e==0){
				$(this).css("color", "red");
				$(this).find("label").each(function(){
					$(this).css("color", "black");
			});



			}

	});
			return	
			} else {
				for (var i=0 ; i < $elements.length; i++){
					answer.push($elements[i].value)
			};
	};
	var result=0;
		testData.quest.forEach(function(item, i){
			
			if ( answer[i] == item.correct ){
				result++;
				};
		});
				
		calcAnswer(result);
				

	
};

function calcAnswer(num){
	var text= "Ваш результат " + num +" из " + testData.quest.length+". " + testData.result[num]
	createModal(text)

};
function createModal(line){
	$(".modal h3").html(line);
	$(".lock ").show(500);
	$(".shim").on("click", function(){
	$(".lock").hide(500);
	$('.label-input').removeAttr('checked');

	$("li").each(function(){
		$(this).css("color", "black");})

	})

}

	