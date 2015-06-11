var app = angular.module('kzrl', []);
app.config(['$locationProvider', function ($lp) {
    $lp.html5Mode(true);
}]);
app.controller('ctrl', ['$scope', '$http', '$location', function ($scope, $http, $location) {
    var id = $location.search().id, url = '/rest/cus/cctv/kzrl/get';
    url += '?articleid=' + id;
    var geoSuccessCallback = function (position) {
        $scope.position = position;
        url += '&lat=' + position.coords.latitude;
        url += '&lng=' + position.coords.longitude;
        $http.get(url).success(function (rsp) {
            $scope.incident = rsp.data;
        });
    };
    var geoError = function (error) {
        var x;
        switch (error.code) {
            case error.PERMISSION_DENIED:
                x = "User denied the request for Geolocation.";
                break;
            case error.POSITION_UNAVAILABLE:
                x = "Location information is unavailable.";
                break;
            case error.TIMEOUT:
                x = "The request to get user location timed out.";
                break;
            case error.UNKNOWN_ERROR:
                x = "An unknown error occurred.";
                break;
        }
        console.log('geo error', x);
        $http.get(url).success(function (rsp) {
            $scope.incident = rsp.data;
        });
    };
    var requestPosition = function () {
        var nav;
        nav = window.navigator;
        if (nav !== null) {
            var geoloc = nav.geolocation;
            if (geoloc !== null) {
                geoloc.getCurrentPosition(geoSuccessCallback, geoError);
            }
            else {
                alert("Geolocation API is not supported in your browser");
            }
        } else {
            alert("Navigator is not found");
        }
    };
    if (/MicroMessenger/i.test(navigator.userAgent) || /YiXin/i.test(navigator.userAgent)) {
        requestPosition();
    } else {
        $http.get(url).success(function (rsp) {
            $scope.incident = rsp.data;
        });
    }
    $scope.openNearby = function () {
        location.href = '/views/default/cus/cctv/kzrl/nearby.html?id=' + id;
    };
}]);