var box = {

	body: document.body,
	position: 0,
	maxWidth: 0,
	reverse: 0,
	step: 5,

	createDiv:function () {		
		this.div = document.createElement( 'div');
		this.body.appendChild( this.div );
		this.div.className = 'wrapper';	
	},

	movie: function  () {

			box.maxWidth = document.body.clientWidth - box.div.clientWidth-box.step;
			
			if ( box.position >= box.maxWidth ) {
				box.reverse = 1;
			};

			if ( box.position <= 0 ) {
				box.reverse = 0;
			};
			
			

			if  (  box.reverse == 0 ) {

			box.position = box.position + box.step;
			var j = box.position + "px";
			box.div.style.left = j;	
			
			setTimeout( "box.movie(box.step)", 20 );
		} else {
			box.position = box.position - box.step;
			var j = box.position + "px";
			box.div.style.left = j;	
			
			setTimeout( "box.movie(box.step)", 20 );
		}
 
	},

	active: function() {
			 box.div.addEventListener( 'mousedown', box.speed );
	},
	speed: function () {
			box.step ++;
			box.div.innerHTML = box.step - 5;
			if ( box.step%2 ) { 
			box.div.style.backgroundColor = "#6f6";
		} else {
			box.div.style.backgroundColor = "red";
		}
	},


	

	run:function  () {
	this.createDiv();
	this.active();
	this.movie();

	}
	

}


box.run()