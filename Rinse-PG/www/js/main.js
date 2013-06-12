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
var base_url = 'http://rinse.herokuapp.com/public/';

function goAlert(message,title){
    
    navigator.notification.alert(
                                 message,  // message
                                 alertDismissed, // callback
                                 title,   // title
                                 'OK'   // buttonName
                                 );
    
}

function alertDismissed() {
    // do nothing
}

function zipSupported(zip){
    if(zip == 94123 || zip == 94109 || zip == 94115 ){
        return;
    }else
        goAlert('Your Zipcode is not supported at this time.','Zipcode');
}

function request(end_url,data0){
    $.ajax({
                //type: "POST",
                url: base_url+end_url,
                dataType: 'json',
                contentType: 'application/json',
                data: data0,
           success: function(result) {return result;},
           error: function(arguments) {alert(JSON.stringify(arguments));return arguments;}
           });
    
}

function movePage(page,trans,role,changeH,reload){
    
    $.mobile.changePage(page, {
                        transition: trans,
                        role : role,
                        changeHash:changeH,
                        reloadPage:reload
                        });
    
}