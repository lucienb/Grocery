var app = angular.module("practice", ["firebase"]);
app.controller('practiceCtrl', function($scope, $firebaseAuth){
 var ref = new Firebase("https://scorching-heat-390.firebaseio.com");
var auth = $firebaseAuth(ref);

  $scope.login = function () {
	console.log("Hello Login");
    auth.$authWithPassword($scope.user).then(function (auth){
	}, function (error) {
	  $scope.error = error;
	});
};

  // create an instance of the authentication service
  $scope.register = function (){
console.log(auth);
auth.$createUser($scope.user).then(function (user){
	
$scope.login();
}, function (error){
	$scope.error = error;
	console.log($scope.error);
});
};

$scope.user = {
email: '', 
password: ''
};

});
