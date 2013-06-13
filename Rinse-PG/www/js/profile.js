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

var main_script = '../js/main.js';


function getData(){
    var name = window.localStorage.getItem('name');
    var email = window.localStorage.getItem('email');
    var phone = window.localStorage.getItem('phone');
    var address = window.localStorage.getItem('address');
    var zip = window.localStorage.getItem('zip');
    
    if(!email || !name || !phone || !zip || !address)
        $.getScript(main_script, function(){goAlert('Please sign in to view profile','Sign in');});
    var all = new Array();
    all[0] = name;
    all[1] = email;
    all[2] = phone;
    all[3] = address;
    all[4] = zip;
    setData(all);
}

function setData(all){
    $('#first_name').val(all[0]);
    $('#last_name').val(all[0]);
    $('#emailAddress').val(all[1]);
    $('#phone_profile').val(all[2]);
    $('#address_profile').val(all[3]);
    $('#zip_profile').val(all[4]);
}

function goProfile(){
    $.getScript(main_script, function(){movePage('profile.html','slidefade','page',true,false);});
}


