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

    var ProjectCtrl = function($scope, $routeParams, ProjectsService) {
        var idProject = $routeParams.id;
        //debugger;
        ProjectsService.get(idProject)
            .success(function(data) {
                //
                // Without this, angular does not update the view
                //
                if ($scope.$$phase !== "$digest" && $scope.$$phase !== "$apply") {
                    $scope.$apply(function(){
                        $scope.project = data;
                    });
                } else {
                    $scope.project = data;
                }
            });
    };

    app.controller("ProjectCtrl", ProjectCtrl);

} (angular.module("openprojects")));