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



//======================================================== FASTCLICK
function FastButton(element, handler) {
    this.element = element;
    this.handler = handler;
    element.addEventListener('touchstart', this, false);
};
FastButton.prototype.handleEvent = function(event) {
    switch (event.type) {
        case 'touchstart': this.onTouchStart(event); break;
        case 'touchmove': this.onTouchMove(event); break;
        case 'touchend': this.onClick(event); break;
        case 'click': this.onClick(event); break;
    }
};
FastButton.prototype.onTouchStart = function(event) {
    
    event.stopPropagation();
    this.element.addEventListener('touchend', this, false);
    document.body.addEventListener('touchmove', this, false);
    this.startX = event.touches[0].clientX;
    this.startY = event.touches[0].clientY;
    isMoving = false;
};
FastButton.prototype.onTouchMove = function(event) {
    if(Math.abs(event.touches[0].clientX - this.startX) > 10 || Math.abs(event.touches[0].clientY - this.startY) > 10) {
        this.reset();
    }
};
FastButton.prototype.onClick = function(event) {
    this.reset();
    this.handler(event);
    if(event.type == 'touchend') {
        preventGhostClick(this.startX, this.startY);
    }
};
FastButton.prototype.reset = function() {
    this.element.removeEventListener('touchend', this, false);
    document.body.removeEventListener('touchmove', this, false);
};
function preventGhostClick(x, y) {
    coordinates.push(x, y);
    window.setTimeout(gpop, 2500);
};
function gpop() {
    coordinates.splice(0, 2);
};
function gonClick(event) {
    for(var i = 0; i < coordinates.length; i += 2) {
        var x = coordinates[i];
        var y = coordinates[i + 1];
        if(Math.abs(event.clientX - x) < 25 && Math.abs(event.clientY - y) < 25) {
            event.stopPropagation();
            event.preventDefault();
        }
    }
};
document.addEventListener('click', gonClick, true);
var coordinates = [];
function initFastButtons() {
    new FastButton(document.getElementById("fastclick"), goSomewhere);
};
function goSomewhere() {
    var theTarget = document.elementFromPoint(this.startX, this.startY);
    if(theTarget.nodeType == 3) theTarget = theTarget.parentNode;
    
    var theEvent = document.createEvent('MouseEvents');
    theEvent.initEvent('click', true, true);
    theTarget.dispatchEvent(theEvent);
};
//========================================================
