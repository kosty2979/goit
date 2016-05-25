
	var app = angular.module("note-app", []);

	app.controller( "NoteCtrl", function( $scope, mySrvc, $timeout){

		$scope.startCategory = ["low", "middle", "high"] ;
		$scope.startTags = ["home", "work", "time"] ;
		$scope.className = ["default", "red", "green", "blue","yellow"];	

		$scope.notes = mySrvc.getDataLocal('myNotes')|| [];
		$scope.tags = mySrvc.getDataLocal('myTags')|| $scope.startTags;
		$scope.category =mySrvc.getDataLocal('myCat')|| $scope.startCategory;	
		 
		//$scope.category = ["low", "medium", "hight"];	
		mySrvc.clearNote($scope);

		



/*----control for note------*/
		$scope.addNote = function(){
			
			var newNote = {
				text: $scope.text,
				name: mySrvc.remSymb($scope.name, 19),
				cat: $scope.catName,
				class: $scope.activeClass,
				time: mySrvc.time(),
				tags: $scope.noteTag	
			};

			$scope.notes.push(newNote);
			mySrvc.setDataLocal('myNotes', $scope.notes);
			mySrvc.clearNote($scope);	
		};

		$scope.delNote = function(num){
			mySrvc.remInArr($scope.notes, num)
			mySrvc.setDataLocal('myNotes', $scope.notes);
		};
/*----control for Tag------*/
		$scope.addTag = function(){
			var newTag = mySrvc.remSymb($scope.nameTag, 6)
		  if (mySrvc.inArr($scope.tags, newTag)){
		  	$scope.nameTag = "";
		  }else{
		  	if ($scope.tags.length>7){
		  		$scope.nameTag = "";
		  	}else{
					$scope.tags.push(newTag);
					mySrvc.setDataLocal('myTags', $scope.tags);
			  	$scope.nameTag = "";
					}
		  }		
		};
		$scope.delTag = function(num){
			mySrvc.remInArr($scope.tags, num);
			if ($scope.tags.length === 0){
		  		mySrvc.setDataLocal('myTags', $scope.startTags);
		  		$scope.tags = mySrvc.getDataLocal('myTags');
		  	}
			mySrvc.setDataLocal('myTags', $scope.tags);		
		};
/*----control for category------*/
		$scope.addCat = function(){
			var newCat = mySrvc.remSymb($scope.nameCat, 6)
		  if (mySrvc.inArr($scope.category, newCat)){
		  	$scope.nameCat = "";
		  }else{
		  	if ($scope.category.length>15){
		  		$scope.nameCat = "";
		  	}else{
					$scope.category.push(newCat);
					mySrvc.setDataLocal('myCat', $scope.category);
			  	$scope.nameCat = "";
					}
		  }		
		};
		$scope.delCat = function(num){
			mySrvc.remInArr($scope.category, num);
			if ($scope.category.length === 0){
		  		mySrvc.setDataLocal('myCat', $scope.startCategory);
		  		$scope.category = mySrvc.getDataLocal('myCat');
		  	}		
			mySrvc.setDataLocal('myCat', $scope.category);
		};

/*----control for note edit ------*/

		$scope.edit = function(note){	
			note.editOn = true;
		};
		$scope.endEdit = function(note){
			note.editOn = false;
			mySrvc.setDataLocal('myNotes', $scope.notes);
		};
		$scope.offEdit = function(note){
			note.editOn = false;
			$scope.notes = mySrvc.getDataLocal('myNotes');
		};

/*----total notes------*/
		$scope.getTotal = function(){
			return $scope.notes.length;
		};


$scope.toggleCheck = function (arr, name) {
        if (arr.indexOf(name) === -1) {
            arr.push(name);
        } else {
            arr.splice(arr.indexOf(name), 1);
        }
    };


		$scope.newTime = mySrvc.time;	
		});

app.service('mySrvc', function(){ 

  return {
    getDataLocal: function(name){
      return angular.fromJson(localStorage.getItem(name));
    },
    setDataLocal: function(name, obj){
      localStorage.setItem(name, angular.toJson(obj));
    },
   
    clearNote: function ($scope){
    	
			$scope.text = "";
			$scope.name = "";
			$scope.catName = $scope.category[0];
			$scope.activeClass = $scope.className[0];
			$scope.time  = "";
			$scope.noteTag  = [];
			

  	},

  	time: function(){
  		 var time = Date.now() ;
  		 return time;
  	},
  	inArr: function (arr, val) {
			return arr.indexOf(val)>=0	
			},
  	remSymb: function (name, num) {
			return name.substr(0 , num);
			},
  	remInArr: function (name, num) {
			return name.splice(num, 1);
			} 
			
	}

})
