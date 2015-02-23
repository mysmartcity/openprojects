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

    var _projects = [{
        id: 0,
        name: "Testing application",
        description: "City description alerts bla",
        repository: "https://github.com/test/alerts",
        license: "Apache2",
        demo: "http://demoapp.com",
        status: "Inceput",
        idea: {
            firstName: "Dan",
            lastName: "Popescu"
        },
        image: "style/images/piata-mea-logo-1.png",
        team: [{
                firstName: "Ion",
                lastName: "Dacian",
                email: "ion.dacian@test.com",
                link: "http://www.google.com",
                role: "Programator"
            },{
                firstName: "Alex",
                lastName: "Ionescu",
                email: "alex.ionescu@test.com",
                link: "http://www.google.com",
                role: "Designer"
            },{
                firstName: "Marius",
                lastName: "Stelian",
                email: "marius.stelian@test.com",
                link: "http://www.google.com",
                role: "Tester"
            }
        ]
    },{
        id: 1,
        name: "City Alerts",
        description: "City description alerts bla",
        repository: "https://github.com/test/alerts",
        license: "Apache2",
        demo: "http://demoapp.com",
        status: "Inceput",
        idea: {
            firstName: "Dan",
            lastName: "Popescu"
        },
        image: "style/images/piata-mea-logo-1.png",
        team: [{
            firstName: "Ion",
            lastName: "Dacian",
            email: "ion.dacian@test.com",
            link: "http://www.google.com",
            role: "Programator"
        },{
            firstName: "Alex",
            lastName: "Ionescu",
            email: "alex.ionescu@test.com",
            link: "http://www.google.com",
            role: "Designer"
        },{
            firstName: "Marius",
            lastName: "Stelian",
            email: "marius.stelian@test.com",
            link: "http://www.google.com",
            role: "Tester"
        }
        ]
    },{
        id: 2,
        name: "Piata Mea Alerts",
        description: "City description alerts bla",
        repository: "https://github.com/test/alerts",
        license: "Apache2",
        demo: "http://demoapp.com",
        status: "Inceput",
        idea: {
            firstName: "Dan",
            lastName: "Popescu"
        },
        image: "style/images/piata-mea-logo-1.png",
        team: [{
            firstName: "Ion",
            lastName: "Dacian",
            email: "ion.dacian@test.com",
            link: "http://www.google.com",
            role: "Programator"
        },{
            firstName: "Alex",
            lastName: "Ionescu",
            email: "alex.ionescu@test.com",
            link: "http://www.google.com",
            role: "Designer"
        },{
            firstName: "Marius",
            lastName: "Stelian",
            email: "marius.stelian@test.com",
            link: "http://www.google.com",
            role: "Tester"
        }
        ]
    },{
        id: 3,
        name: "Fix my street",
        description: "City description alerts bla",
        repository: "https://github.com/test/alerts",
        license: "Apache2",
        demo: "http://demoapp.com",
        status: "Inceput",
        idea: {
            firstName: "Dan",
            lastName: "Popescu"
        },
        image: "style/images/piata-mea-logo-1.png",
        team: [{
            firstName: "Ion",
            lastName: "Dacian",
            email: "ion.dacian@test.com",
            link: "http://www.google.com",
            role: "Programator"
        },{
            firstName: "Alex",
            lastName: "Ionescu",
            email: "alex.ionescu@test.com",
            link: "http://www.google.com",
            role: "Designer"
        },{
            firstName: "Marius",
            lastName: "Stelian",
            email: "marius.stelian@test.com",
            link: "http://www.google.com",
            role: "Tester"
        }
        ]
    }
    ];

    var ProjectsService = function(FirebaseService) {
        return {
            //getList: function() {
            //    return _projects;
            //},
            //get: function(id) {
            //    return _projects[id];
            //}
            getList: function(callback) {
                return {
                    success: function(callback) {
                        FirebaseService.getList(callback);
                    }
                };
            },
            get: function(id) {
                return {
                    success: function(callback) {
                        FirebaseService.get(id, callback);
                    }
                };
            },
            add: function(project) {
                FirebaseService.add(project);
            },
            remove: function(id) {
                FirebaseService.remove(id)
            }
        }
    };

    app.factory("ProjectsService", ProjectsService);

} (angular.module("openprojects")));