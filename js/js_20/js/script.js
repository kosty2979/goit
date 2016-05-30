$(function(){

 var skills = _.chain(obj)
 							.map("skills")//получаем колекцию массивов из поля skills
 							.flatMap()// преобразуем ее в один массив 
 							.sortBy(function (i) {
 								 return i.toLowerCase()
 								})// сортируем
 							.union()// отбираем уникальные
 							.value();

skills.forEach(function(item){
	$(".skills").append("<span style='padding: 10px'>" + item +"</span> ")
})

 var friends =_.chain(obj)
 								.map("friends")// получаем колекцию объектов из поля friends
 								.flatMap()// преобразуем ее в один массив 
 								.map("name")// отбираем значение только поля name
 								.union()// отбираем уникальные
 								.value();
friends.forEach(function(item){
	$(".friends").append("<span style='padding: 20px'>" + item +"</span> ")
})

var name =_.chain(obj)
						/*.map( function(o){// создаем из них колекцию объектов
						return _.pick(o,['name','friends'])// возвращакм только поля	name и friends
						})
						.flatMap()//преобразуем ее в один массив */
						.sortBy('friends') //сортируем по  friends
						.value();

name.forEach(function(item){
	$(".name").append("<span style='padding: 20px'>" + item.name + "(" + item.friends.length + ")" +"</span> ")
})

var name2 =_.chain(obj)
						.sortBy('friends') //сортируем по  friends
						.map("name")//получаем колекцию объектов из поля name
						.flatMap()// преобразуем ее в один массив 
						.value();

name2.forEach(function(item){
	$(".name2").append("<span style='padding: 20px'>" + item +"</span> ")

})
})	