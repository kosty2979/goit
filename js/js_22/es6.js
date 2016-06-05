"use strict";
	let testData;
	const obj = {
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
$(() => {

let tmp = JSON.stringify(obj);

localStorage.setItem("test", tmp );

$("#createTest").on("click", () => {
	createTest();
	$("#checkTest").on("click", () => {
	checkTest();
	})
});

});

function createTest () {

	testData=localStorage.getItem("test") ;
	testData=JSON.parse(testData);
	$("#createTest").hide();

	let tmpl=$("#template").html();
	let html = _.template(tmpl)(testData);
	$("body").append (html);
	$(".lock").hide()
};

function checkTest (){
	let answer = [];
	let $elements = $(".label-input:checked");

	if ($elements.length!=testData.quest.length) {
			alert("Не все вопросы отмечены");
			
		$("li").each(function(){
			let w=$(this).find("input:checked");
			let e=w.length;
			if (e==0){
				$(this).css("color", "red");
				$(this).find("label").each(function(){
					$(this).css("color", "black");
			});



			}

	});
			return	
			} else {
				for (let i=0 ; i < $elements.length; i++){
					answer.push($elements[i].value)
			};
	};
	let result=0;
		testData.quest.forEach((item, i) => {
			
			if ( answer[i] == item.correct ){
				result++;
				};
		});
				
		calcAnswer(result);
				

	
};

function calcAnswer(num){
	let text= "Ваш результат " + num +" из " + testData.quest.length+". " + testData.result[num];
	createModal(text)

};
function createModal(line){
	$(".modal h3").html(line);
	$(".lock ").show(500);
	$(".shim").on("click", () => {
	$(".lock").hide(500);
	$('.label-input').removeAttr('checked');

	$("li").each(function(){
		$(this).css("color", "black");})

	})

}

	