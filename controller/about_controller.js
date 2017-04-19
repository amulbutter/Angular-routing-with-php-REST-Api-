demo.controller('aboutController', function($scope) {
	$scope.message = 'Look! I am an about page.';

	$http.get("welcome.php")
	.then(function(response) {
		console.log(response);
		$scope.myWelcome = response.data;
	});
});