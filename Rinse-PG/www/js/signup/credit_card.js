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


var script_url = '../js/signup/signup_model.js';
var main_script = '../js/main.js';

function goBack(){
    history.go(-1);
}

function hasAccount(){
    $.getScript(main_script, function(){movePage('sign_in.html','slideup','page',true,true);});
}
function next(file){
    $.getScript(main_script, function(){movePage(file,'slidefade','page',true,true);});
}
function goProfile(){
    $.getScript(main_script, function(){movePage('profile.html','slidefade','page',true,false);});
}