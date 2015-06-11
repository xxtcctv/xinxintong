var app = angular.module('kzrl', []);
app.config(['$locationProvider', function ($lp) {
	$lp.html5Mode(true);
}]);
app.controller('ctrl', ['$scope', '$http', '$location', function ($scope, $http, $location) {
	var id = $location.search().id, url = '/rest/cus/cctv/kzrl/nearby?articleid=' + id;
	$scope.openOne = function (incident) {
		location.href = '/views/default/cus/cctv/kzrl/incident.html?id=' + incident.id;
	};
	$http.get(url).success(function (rsp) {
		$scope.incidents = rsp.data;
	});
}]);