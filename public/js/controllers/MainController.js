'use strict'

var app = angular.module('Busch', ['ngAnimate', 'ngTouch']);


app.controller('MainController', function($scope) {

    $scope.first = false;

    $scope.second = false;

    $scope.third = false;

    $scope.fourth = false;

    $scope.pics = false;

    $scope.uno = function() {
        console.log('this is ng-click', this.first)

        if (!$scope.first) {
            $scope.first = true;
            $scope.pics = false;
            $scope.second = false;
            $scope.third = false;
            $scope.fourth = false;

        }

        return $scope.first;
    }

    $scope.dos = function() {
        console.log('this is dos', this.second)

        if (!$scope.second) {
            $scope.first = false;
            $scope.pics = false;
            $scope.second = true;
            $scope.third = false;
            $scope.fourth = false;
        }

        return $scope.second;
    }

    $scope.tres = function() {
        console.log('this is tres', this.third)

        if (!$scope.third) {
            $scope.first = false;
            $scope.pics = false;
            $scope.second = false;
            $scope.third = true;
            $scope.fourth = false;
        }

        return $scope.third;
    }

    $scope.quatre = function() {
        console.log('this is quatre', this.third)

        if (!$scope.four) {
            $scope.first = false;
            $scope.pics = false;
            $scope.second = false;
            $scope.third = false;
            $scope.fourth =true;
        }

        return $scope.fourth;
    }

    $scope.look = function() {
        console.log('this is pics click')

        if (!$scope.pics) {
            $scope.pics = true;
            $scope.first = false;
            $scope.second = false;
            $scope.third = false;
            $scope.fourth = false;
        } 

        return $scope.pics;

    }

    // Set of Photos
    $scope.photos = [{
        src: 'pics/DSC_2723.jpg',
        desc: 'Image 01'
    }, {
        src: 'pics/DSC_2769.jpg',
        desc: 'Image 02'
    }, {
        src: 'pics/DSC_7201.jpg',
        desc: 'Image 03'
    }, {
        src: 'pics/DSC_7299.jpg',
        desc: 'Image 04'
    }, {
        src: 'pics/DSC_7384.jpg',
        desc: 'Image 05'
    }, {
        src: 'pics/DSC_7432.jpg',
        desc: 'Image 06'
    }];

    // initial image index
    $scope._Index = 0;

    // if a current image is the same as requested image
    $scope.isActive = function(index) {
        return $scope._Index === index;
    };

    // show prev image
    $scope.showPrev = function() {
        $scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.photos.length - 1;
    };

    // show next image
    $scope.showNext = function() {
        $scope._Index = ($scope._Index < $scope.photos.length - 1) ? ++$scope._Index : 0;
    };

    // show a certain image
    $scope.showPhoto = function(index) {
        $scope._Index = index;
    };
});
