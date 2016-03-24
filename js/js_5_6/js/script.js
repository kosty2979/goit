var timer = {

	body: document.body,
	starter: 0,
	oldTime: 0,
	countTimeLine: 1,
	reset: 0,

	createDiv:function () {		
		div = document.createElement( 'div');
		this.body.appendChild( div );
		div.className = 'wrapper';	
	},

	createDivForm:function () {		
		divForm = document.createElement( 'div');
		form.appendChild( divForm );
		divForm.className = 'divForm';	
	},

	createForm:function () {
		form = document.createElement( 'form');
		form.className = "form";
		div.appendChild( form );
		form.action = '#';
	},

	createPar: function  () {
		par = document.createElement( 'p' );
		form.appendChild( par );
		par.className = "clock";
		par.innerHTML = "00:00:00.000";
	},

	createTimeLine: function  ( name, value ) {
		timeLine = document.createElement( 'p' );
		divForm.insertBefore( timeLine, divForm.firstChild );
		/*divForm.appendChild( timeLine );*/
		timeLine.className = "timeLine";
		var a = this.countTimeLine + ". " + name+ " " + value ;
		this.countTimeLine ++;
		timeLine.innerHTML = a;
	},

	createButton:function ( butLabel ) {
		var button = document.createElement( 'input' );
		button.type = "button";
		button.value = butLabel;
		button.className = "button";
		form.appendChild( button );
	},

	calculationTime: function (t) {
		var ms = t % 1000;
		 
		t = Math.floor ( (t-ms)/1000 );
		var s = t % 60;

		t = Math.floor ( (t-s)/60 );
		var m = t % 60; 

		t = Math.floor ( (t-m)/60 );
		var h = t % 60;

		if ( h <  10 ) h = '0' + h;
		if ( m < 10 ) m = '0' + m;
		if ( s < 10 ) s = '0' + s;
		if ( ms < 100 ) ms = '0' + ms;
		if ( ms < 10 ) ms = '0' + ms;

		return w = h + ':' + m + ':' + s + '.' + ms;

	},

	startTime: function (startTime) { 
 	if (timer.reset == 0){
		var realDate = new Date();
		beginTime = realDate.getTime() - startDate.getTime();
		t = beginTime + startTime;

		dispText = this.calculationTime( t );
		
			if ( timer.starter == 1 ) {
		
					par.innerHTML = dispText;
					setTimeout( "timer.startTime(timer.oldTime)", 20 );
		
					} else {
		
					timer.oldTime = t;
					return;
					}
		}else{
			return;
		}

	},
 

	startStop: function () {
		 butStart = form.querySelector( 'input' );
		 butStart.addEventListener( 'click', start );

		function start () { 
				timer.reset = 0;
			if ( timer.starter==0 ){
				butStart.value = "STOP";
				timer.starter=1;

				startDate = new Date();
				timer.startTime( timer.oldTime );
			}else{
				butStart.value = "START";
				timer.starter=0;

				dispText2 = timer.calculationTime( beginTime );
				timer.createTimeLine( "Stop", dispText2 );
				}
		};
  
	},


	resetAll: function () {
   
		butReset = form.querySelectorAll( 'input' );
 		butReset[2].addEventListener( 'click', reset );

			function reset () {
				timer.reset = 1; 
				timer.starter = 0;
				timer.countTimeLine = 1;
				beginTime=0;
				startTime=0;
				t=0;
				form.removeChild( divForm );
				butStart.value = "START"
				timer.createDivForm();
				dispText= "00:00:00.000";
				par.innerHTML = dispText;
				timer.oldTime = 0;

			}

	},
	split: function () {

		butReset = form.querySelectorAll( 'input' );
 		butReset[1].addEventListener( 'click', sp );

			function sp () {
			if ( timer.starter == 1 ) { 
				timer.createTimeLine( "Split", dispText );
				}
			}
	},


run:function  () {
	this.createDiv();
	this.createForm();
	this.createPar();
	this.createButton( "START" );
	this.createButton( "SPLIT" );
	this.createButton( "RESET" );
	this.createDivForm();
	this.resetAll();
	this.split();
	this.startStop();
	},


}


timer.run()