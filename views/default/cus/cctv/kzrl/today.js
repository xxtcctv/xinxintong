var app = angular.module('kzrl', []);
app.controller('ctrl', ['$scope', '$http', function ($scope, $http) {
    $scope.openOne = function (incident) {
        location.href = '/views/default/cus/cctv/kzrl/incident.html?id=' + incident.id;
    };
    $scope.timeline = function (direction) {
        var url = '/rest/cus/cctv/kzrl/timeline',
            incident;
        if (direction) {
            if (direction === 'F') {
                incident = $scope.timelines[0];
            } else if (direction === 'B') {
                incident = $scope.timelines[$scope.todays.length - 1];
            }
            url += '?articleid=' + incident.id;
            url += '&direction=' + direction;
        }
        $http.get(url).success(function (rsp) {
            $scope.timelines = rsp.data;
        });
    };
    $http.get('/rest/cus/cctv/kzrl/today').success(function (rsp) {
        $scope.todays = rsp.data;
    });
}]);