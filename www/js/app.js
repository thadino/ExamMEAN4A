// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('todo', ['ionic'])

  .controller('TodoCtrl', function ($scope, $ionicLoading, $ionicModal, $http) {


    $ionicModal.fromTemplateUrl('new-task.html', function (modal) {
      $scope.taskModal = modal;
    }, {
      scope: $scope,
      animation: 'slide-in-up'
    });

    // Called when the form is submitted
    $scope.createTask = function (task) {
      $scope.tasks.push({
        title: task.title
      });
      $scope.taskModal.hide();
      task.title = "";
    };



    // Open our new task modal
    $scope.newTask = function () {
      $scope.taskModal.show();
    };

    // Close the new task modal
    $scope.closeNewTask = function () {
      $scope.taskModal.hide();
    };


    google.maps.event.addDomListener(window, 'load', function () {
      var myLatlng = new google.maps.LatLng(55.676098, 12.568337);

      var mapOptions = {
        center: myLatlng,
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      var map = new google.maps.Map(document.getElementById("map"), mapOptions);

      // navigator.geolocation.getCurrentPosition(function(pos) {
      //   map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
      //   var myLocation = new google.maps.Marker({
      //     position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
      //     map: map,
      //     title: "My Location"
      //   });
      // });


      $scope.setmarker = function (data) {

        $scope.taskModal.hide();
        google.maps.event.addListenerOnce(map, 'click', function () {

          data.forEach(
            function (d) {
              // $scope.tasks.push({
              //   title: d.name + " lat: " + d.lat + " long:" + d.long,
              // })

              // $scope.setmarker(data)


              var tempLatLng = new google.maps.LatLng(d.lat, d.long);
              var marker = new google.maps.Marker({
                map: map,
                animation: google.maps.Animation.DROP,
                position: tempLatLng,
                title: d.name + ", lat: " + d.lat + ", long: " + d.long
              });
            }
          )
        });
      };


      $scope.map = map;
    });


    $scope.getItems = function () {
      $http({method: 'GET', url: 'http://localhost:3000/get'})
        .success(function (data) {

          $scope.setmarker(data);
          data.forEach(
            function (d) {
              // $scope.tasks.push({
              //   title: d.name + " lat: " + d.lat + " long:" + d.long,
              // })

              // $scope.setmarker(data)

            }
          )
        });
    };


    // No need for testing data anymore
    $scope.tasks = [];



    // Create and load the Modal


  })


  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  });
