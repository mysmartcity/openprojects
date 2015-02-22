/* Copyright 2014 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(app) {
    'use strict';

    var AddCtrl = function($scope, $location, ProjectsService, $mdToast) {
        //$scope.project = {"name":"Date deschise","idea":{"lastName":"Isfan","firstName":"Petru"},"description":"Aplicatie pentru date deschise","eventName":"Open data hackathon","license":"Apache2","status":"Beta", submissionDate: "22/2/2015", image: "https://farm2.staticflickr.com/1050/938408499_5bc5817b63_o_d.jpg", repository: "https://github.com/mysmartcity/openprojects"};

        //$scope.status = ["Inceput", "Dezvoltare", "Beta", "Productie"];

        $scope.cancel = function() {
            goHome();
        };

        $scope.save=function() {
            //console.log(JSON.stringify($scope.project));
            ProjectsService.add($scope.project);

            $mdToast.show(
                $mdToast.simple()
                    .content('Proiectul a fost adaugat cu succes!')
                    .position("top right")
                    .hideDelay(3000)
            );
        };

        var goHome = function() {
            $location.path("#/");
        };
    };

    app.controller("AddCtrl", AddCtrl);

} (angular.module("openprojects")));