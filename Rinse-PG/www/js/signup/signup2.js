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


var model_script = '../js/signup/signup_model.js';
var main_script = '../js/main.js';

function goBack(){
    history.go(-1);
}
function post(){
    
    //get relevent parameters to send to server
    var name = window.localStorage.getItem('name');
    var email = window.localStorage.getItem('email');
    var phone = window.localStorage.getItem('phone');
    var password = window.localStorage.getItem('password');
    var address = document.getElementById('address').value;
    var address2 = document.getElementById('address2').value;
    var zip = document.getElementById('zip').value;
    
    if(address && zip){
   
        $.getScript(main_script, function(){
        zipSupported(zip);
        var data_obj = {name:name,email:email,phone:phone,password:password,address:address,address2:address2,zip:zip};
        
            request('user/post',data_obj);
            goNext(1);
        });
    }else
        $.getScript(main_script, function(){goAlert('Please Fill out all fields','Empty Field');});
    
}

function hasAccount(){
    $.getScript(main_script, function(){movePage('sign_in.html','slideup','page',true,true);});
}
