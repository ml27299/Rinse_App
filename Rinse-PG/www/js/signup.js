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

var base_url = 'http://rinse.herokuapp.com/public';

function goBack(){
    history.go(-1);
}

function goNext(file){
    
    if(file == 'signup2.html'){
        var name =  document.getElementById('name').value;
        var password =document.getElementById('password').value;
        var email =document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        window.localStorage.setItem("name", name);
        window.localStorage.setItem("email", email);
        window.localStorage.setItem("phone", phone);
        window.localStorage.setItem("password", password);
    }else if(file == 'credit_card.html'){
        var address = document.getElementById('address').value;
        var address2 = document.getElementById('address2').value;
        var zip = document.getElementById('zip').value;
        window.localStorage.setItem("address", address);
        window.localStorage.setItem("zip", zip);
        if(address2)
            window.localStorage.setItem("address2", address2);
    }
    
    if((name && email && phone && password) || (address && zip))
        $.mobile.changePage( file, {
                            transition: 'slidefade',
                            role : 'page',
                            changeHash:true,
                            reloadPage:true
                            });
    else
        goAlert();
}

function alertDismissed() {
    // do nothing
}

function post(){
    
    var name = window.localStorage.getItem('name');
    var email = window.localStorage.getItem('email');
    var phone = window.localStorage.getItem('phone');
    var password = window.localStorage.getItem('password');
    var address = document.getElementById('address').value;
    var address2 = document.getElementById('address2').value;
    var zip = document.getElementById('zip').value;
    if(address && zip){
        $.ajax({
           //type: "POST",
                url: base_url+"/user/post",
                dataType: "json",
                contentType: "application/json",
                data: {
                        "name":name,
                        "email":email,
                        "phone":phone,
                        "password":password,
                        "address":address,
                        "address2":address2,
                        "zip":zip
                },
               success: function(result) {
                    alert("Success: " + JSON.stringify(result));
                    
               },
                error: function(arguments) {
                    alert("Error: " + JSON.stringify(arguments));
               }
           });
    goNext('credit_card.html');
    }else
        goAlert();
    
}

function hasAccount(){
    $.mobile.changePage('sign_in.html', {
                        transition: 'slideup',
                        role : 'page',
                        changeHash:true,
                        reloadPage:true
                        });
}

function signIn(){
    
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    
    if(email && password){
        $.ajax({
               //type: "POST",
               url: base_url+"/user/get",
               dataType: "json",
               contentType: "application/json",
               data: {
               "email":email,
               "password":password
               },
               success: function(result) {
                    alert("Success: " + JSON.stringify(result));
                    var objJSON = eval("(function(){return " + JSON.stringify(result) + ";})()");
                    var user_info = new Array();
                
               
               },
               error: function(arguments) {
               alert("Error: " + JSON.stringify(arguments));
               }
               });
        goNext('credit_card.html');
    }else
        goAlert();
        
    
}

function goAlert(){
    navigator.notification.alert(
                                 'Please Fill out all fields',  // message
                                 alertDismissed,         // callback
                                 'Empty Field',            // title
                                 'OK'                  // buttonName
                                 );
}