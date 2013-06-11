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

var mapper_script = '../js/mapper.js';
var main_script = '../js/main.js';
var base_url = 'http://rinse.herokuapp.com/public/';


function goNext(map_num){
    
    var fields = new Array();
    var fields_value = new Array();
    var params = new Array(new Array());
    var list_params = new Array();
    var file;
    
    $.getScript(mapper_script, function(){
                
                //get parameters for page
                params = goMap(map_num); 
            
                for(file in params){
                    fields = params[file];
                }
                
                //get values for parameters for page
                for(var x = 0; x < fields.length; x++){
                    var some_value = document.getElementById(fields[x]).value;
                    if(some_value)
                        fields_value[x] = some_value;
                }
    
                if(fields_value.length != 0){
                    storeVar(fields,fields_value);
                    movePage(file,'slidefade','page',true,true);
                }else
                    $.getScript(main_script, function(){goAlert('Please Fill out all fields','Empty Field');});
    });
}


function storeVar(fields, fields_value){
    
    //store parameter values in local storage
    for(var i = 0; i < fields.length; i++)
        window.localStorage.setItem(fields[i], fields_value[i]);
    
}
