var app = angular.module('kzrl', []);
app.controller('ctrl', ['$scope', '$http', function ($scope, $http) {
	$scope.openOne = function (incident) {
		location.href = '/views/default/cus/cctv/kzrl/incident.html?id=' + incident.id;
	};
	$scope.timeline = function() {
		$http.get('/rest/cus/cctv/kzrl/timeline').success(function (rsp) {
			$scope.timelines = rsp.data;
		});
	};
	$http.get('/rest/cus/cctv/kzrl/today').success(function (rsp) {
		$scope.todays = rsp.data;
	});
}]);