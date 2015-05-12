'use strict'

var app = angular.module('Busch', []);

app.controller('MainController', function($scope){

$scope.first = true; 

$scope.two = false; 

$scope.three = false; 

$scope.four = false;

$scope.uno = function(){
	console.log('this is ng-click', this.first)

	if(!$scope.first){
		$scope.first = true;
	} else

	$scope.first = false;

	return $scope.first;
}




})