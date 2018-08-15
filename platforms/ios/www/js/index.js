/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function () {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function (id) {
        var parentElement = document.getElementById(id)

        console.log('Received Event: ' + id);


    }
};

app.initialize();

ons.ready(function () {
    console.log("Onsen UI is ready!");
    document.addEventListener('show', function (event) {
        var page = event.target;
        var titleElement = document.querySelector('#toolbar-title');

        if (page.matches('#first-page')) {
            titleElement.innerHTML = 'Work Days';
        } else if (page.matches('#second-page')) {
            titleElement.innerHTML = 'PPH';
        } else if (page.matches('#third-page')) {
            titleElement.innerHTML = 'Run Time';
        } else if (page.matches('#fourth-page')) {
            titleElement.innerHTML = 'Gram Weight';
        }
    });

});

