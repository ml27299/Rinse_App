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


function signIn(){
    
    
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    
    if(email && password){
        
        var data_obj = {email: email, password : password};
        
        request('user/get',data_obj);
        
    }else
        $.getScript(main_script, function(){goAlert('Please Fill out all fields','Empty Field');});
    
    
}

function request(end_url,data0){
    $.ajax({
           //type: "POST",
           url: base_url+end_url,
           dataType: 'json',
           contentType: 'application/json',
           data: data0,
           success: function(result) {
           var responseString = JSON.stringify(result);
           if(responseString){
                var res = JSON.parse(responseString);
                window.localStorage.setItem('name', res.name);
                window.localStorage.setItem('email', res.email);
                window.localStorage.setItem('phone', res.phone);
                window.localStorage.setItem('address', res.address);
                window.localStorage.setItem('zip', res.zip);
                movePage('confirm_now.html','slidefade','page',true,true);
            }else
                $.getScript(main_script, function(){ goAlert('Something went wrong', 'Error');});
},
           error: function(arguments) {alert(JSON.stringify(arguments));return arguments;}
           });
    
}


function forgotPassword(){
    $.getScript(main_script, function(){
            movePage('forgot_password.html','slidefade','page',true,true);
    });
}

function goProfile(){
    var email = document.getElementById('emailAddress').value;
    if(!email)
    $.getScript(script_url, function(){movePage('profile.html','slidefade','page',true,false);});
}
