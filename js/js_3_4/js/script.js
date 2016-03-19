
var createTest = {
	body: document.body,

	createDiv:function () {
		div = document.createElement( 'div');
		this.body.appendChild( div );
		div.className = 'wrapper';
	},

	createTitel:function  ( title ){
		var h1 = document.createElement( 'h1' );
		h1.className = "head1";
		var text = document.createTextNode( title );
		h1.appendChild( text );
		div.appendChild( h1 );
    },	

	createForm:function () {
		form = document.createElement( 'form');
		form.className = "form";
		div.appendChild( form );
		form.action = '#';
	},

	createOl: function  () {
		ol = document.createElement( 'ol' );
		form.appendChild( ol );
	},
	
	createLi: function ( text2 ){
		li = document.createElement( 'li' );
		li.className = "li";
		var text = document.createTextNode( text2 );
		li.appendChild( text );
		ol.appendChild( li );
	},

	createСheckBox:function ( name, value, text ) {

		var label = document.createElement( 'label' );
		label.className = 'label';
		var text = document.createTextNode( text );

		var input = document.createElement( 'input' );
		input.type = "radio";
		input.name = name;
		input.value = value;
		input.className = "label-input";

		label.appendChild( input );
		label.appendChild( text );
		li.appendChild( label );
	},

    createButton:function ( butLabel ) {
		var button = document.createElement( 'input' );
		button.type = "submit";
		button.value = butLabel;
		button.className = "button-input";
		form.appendChild( button );
	},

    run:function  (y, testTitle, butLabel) {
    	// y - json = [{
		//  title: " ",
		//  name: " ",
		//  answers: [' ', ' ', ' '],
		//  correct: ' '
		// }]
    	// testTitle - название теста
    	// butLabel - надпись на кнопке

	this.createDiv();
	this.createTitel( testTitle );
	this.createForm();
	this.createOl ();


	json.forEach(function(item){
	createTest.createLi( item.title );

	item.answers.forEach(function(answer){
	    createTest.createСheckBox(item.name, answer, answer);
		})
	});
	
	this.createButton( butLabel );
	}


	
}

createTest.run(json, titel, buttText);
