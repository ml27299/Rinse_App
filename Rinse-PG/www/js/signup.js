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

var base_url = 'http://rinse.herokuapp.com/public/user';

function goBack(){
    history.go(-1);
}

function goNext(file){
    
    if(file == 'signup2.html'){
        var name =  document.getElementById('name').value;
        window.localStorage.setItem("name", name);
        var email =document.getElementById('email').value;
        window.localStorage.setItem("email", email);
        var phone = document.getElementById('phone').value;
        window.localStorage.setItem("phone", document.getElementById('phone').value);
        var password =document.getElementById('password').value;
        window.localStorage.setItem("password", password);
    }else if(file == 'credit_card.html'){
        var address = document.getElementById('address').value;
        var address2 = document.getElementById('address2').value;
        var zip = document.getElementById('zip').value;
        window.localStorage.setItem("address", address);
        if(address2)
            window.localStorage.setItem("address2", address2);
        window.localStorage.setItem("zip", zip);
    }
    
    if((name && email && phone && password) || (address && zip))
        $.mobile.changePage( file, {
                            transition: 'slidefade',
                            role : 'page',
                            changeHash:true,
                            reloadPage:true
                            });
    else
        navigator.notification.alert(
                                     'Please Fill out all fields',  // message
                                     alertDismissed,         // callback
                                     'Empty Field',            // title
                                     'OK'                  // buttonName
                                     );
}
function alertDismissed() {
    // do something
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
           url: base_url+"/post",
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
           error: function() {
           alert("Error: " + JSON.stringify(arguments));
           }
           });
    goNext('credit_card.html');
    }else
        navigator.notification.alert(
                                     'Please Fill out all fields',  // message
                                     alertDismissed,         // callback
                                     'Empty Field',            // title
                                     'OK'                  // buttonName
                                     );
    
}

function hasAccount(){
    $.mobile.changePage('sign_in.html', {
                        transition: 'slideup',
                        role : 'page',
                        changeHash:true,
                        reloadPage:true
                        });
}
