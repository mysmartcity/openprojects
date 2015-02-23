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

    var FirebaseService = function() {
        var firebase = new Firebase('https://openprojects.firebaseio.com/');
        var projects = firebase.child("projects");

        var projectList = null;
        var updateCallbackId = null;
        //
        // Function will be called from ListCtrl to update list each time
        //
        var updateCallbackList = function() {};
        var updateCallbackGet = function() {};

        projects.on("value", function(snapshot) {
            projectList = snapshot.val();
            updateCallbackList(projectList);
            updateCallbackGet(projectList[updateCallbackId]);
        });

        return {
            add: function(project) {
                projects.push(project);
            },
            getList: function(callback) {
                updateCallbackList = callback;
                if (projectList) {
                    updateCallbackList(projectList);
                }
            },
            get: function(id, callback) {
                updateCallbackGet = callback;
                updateCallbackId = id;

                if (projectList) {
                    updateCallbackGet(projectList[updateCallbackId]);
                }
            },
            remove: function(id) {
                var node = new Firebase('https://openprojects.firebaseio.com/projects/' + id);
                node.remove();
            }
        }
    };

    app.factory("FirebaseService", FirebaseService);

} (angular.module("openprojects")));