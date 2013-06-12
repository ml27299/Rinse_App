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


var main_script = 'js/main.js';

function onDeviceReady() {
    navigator.splashscreen.hide();
}

function nextPage(){
    var main_script = 'js/main.js';
    var name = window.localStorage.getItem('name');
    var email = window.localStorage.getItem('email');
    var phone = window.localStorage.getItem('phone');
    var address = window.localStorage.getItem('address');
    var zip = window.localStorage.getItem('zip');
    if(!email || !name || !phone || !zip || !address)
        $.getScript(main_script, function(){movePage('pages/signup.html','slidefade','page',true,true);});
    else
        $.getScript(main_script, function(){movePage('pages/confirm_now.html','slidefade','page',true,true);});
}

function logOut(){
    refreshPage();
    var name = window.localStorage.getItem('name');
    var email = window.localStorage.getItem('email');
    var phone = window.localStorage.getItem('phone');
    var address = window.localStorage.getItem('address');
    var zip = window.localStorage.getItem('zip');

    if(email && name && phone && zip && address)
        document.write('<a href="javascript:goLogOut();" align = "center">Log Out?</a>');
}

function goLogOut(){
    var main_script = 'js/main.js';
    window.localStorage.clear();
    $.getScript(main_script, function(){goAlert('You have been logged out','Logout');});
    refreshPage();
}

function refreshPage()
{
    $.mobile.changePage(window.location.href, {
                             allowSamePageTransition: true,
                             transition: 'none',
                             reloadPage: true
                             });
}