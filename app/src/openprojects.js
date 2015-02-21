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

(function() {
    'use strict';

    var openprojects = angular.module("openprojects", ['ngMaterial', 'ngRoute', 'ngMessages']);

    openprojects.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
                when('/', {
                    templateUrl: 'src/list/list.html',
                    controller: 'ListCtrl'
                }).
                when('/add', {
                    templateUrl: 'src/add/addForm.html',
                    controller: 'AddCtrl'
                }).
                when('/login', {
                    templateUrl: 'src/account/login.html',
                    controller: 'LoginCtrl'
                }).
                when('/project/:id', {
                    templateUrl: 'src/project/project.html',
                    controller: 'ProjectCtrl'
                }).

                otherwise({
                    redirectTo: '/'
                });
        }]);
} ());
