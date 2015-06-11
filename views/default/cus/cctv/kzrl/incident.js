var app = angular.module('kzrl', []);
app.config(['$locationProvider', function ($lp) {
	$lp.html5Mode(true);
}]);
app.controller('ctrl', ['$scope', '$http', '$location', function ($scope, $http, $location) {
	var id = $location.search().id, url = '/rest/cus/cctv/kzrl/get';
	url += '?articleid=' + id;
	$scope.openNearby = function () {
		location.href = '/views/default/cus/cctv/kzrl/nearby.html?id=' + id;
	};
	$http.get(url).success(function (rsp) {
		$scope.incident = rsp.data;
	});
}]);