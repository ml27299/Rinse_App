var main_script = 'js/main.js';

function onDeviceReady() {
    navigator.splashscreen.hide();
    console.log("Hello");
}

function nextPage(){
    var main_script = 'js/main.js';
    var name = window.localStorage.getItem('name');
    var email = window.localStorage.getItem('email');
    var phone = window.localStorage.getItem('phone');
    var address = window.localStorage.getItem('address');
    var zip = window.localStorage.getItem('zip');
    if(!email || !name || !phone || !zip || !address)
        $.getScript(main_script, function(){movePage('pages/signup.html','slidefade','page',true,true);});
    else
        $.getScript(main_script, function(){movePage('pages/confirm_now.html','slidefade','page',true,true);});
}

function logOut(){
    var name = window.localStorage.getItem('name');
    var email = window.localStorage.getItem('email');
    var phone = window.localStorage.getItem('phone');
    var address = window.localStorage.getItem('address');
    var zip = window.localStorage.getItem('zip');

    if(email && name && phone && zip && address){
        $('#logout').show();
    }
    
}

function goLogOut(){
    var main_script = 'js/main.js';
    window.localStorage.clear();
    $.getScript(main_script, function(){goAlert('You have been logged out','Logout');refreshPage();});
    
}

function refreshPage()
{
    $.mobile.changePage(window.location.href, {
                             allowSamePageTransition: true,
                             transition: 'none',
                             reloadPage: true
                             });
}