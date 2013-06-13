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

function goBack(){
    history.go(-1);
}

function go(){
    $.getScript(main_script, function(){
            goAlert('We have sent you an email with further instructions','Forgot Password');
            goAction();
            goBack();
    });
}

function goAction(){
    var email = document.getElementById('email').value;
    if(email){
        var data_obj = {email: email};
        $.getScript(main_script, function(){request('forgot/get',data_obj);});
    }else
        $.getScript(main_script, function(){goAlert('Please Fill out all fields','Empty Field');});
}

function goProfile(){
    $.getScript(main_script, function(){movePage('profile.html','slidefade','page',true,false);});
}