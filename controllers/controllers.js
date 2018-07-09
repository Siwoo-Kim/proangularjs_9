/**
 * @author SiWoo Kim,
 * @email sm123tt@gmail.com
 * @version 1.0.0
 * @since 2018-07-09 오전 7:39
 * @github : https://github.com/Siwoo-Kim
 **/


angular.module("myApp.Controllers", [])
    .controller("dayCtrl", function ($scope, days) {
        $scope.day = days.today;
    })
    .controller("tomorrowCtrl", function ($scope, days) {
        $scope.day = days.tomorrow;
    });
