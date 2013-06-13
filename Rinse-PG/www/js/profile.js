var main_script = '../js/main.js';


function getData(){
    var name = window.localStorage.getItem('name');
    var email = window.localStorage.getItem('email');
    var phone = window.localStorage.getItem('phone');
    var address = window.localStorage.getItem('address');
    var zip = window.localStorage.getItem('zip');
    
    if(!email || !name || !phone || !zip || !address)
        $.getScript(main_script, function(){goAlert('Please sign in to view profile','Sign in');});
    var all = new Array();
    all[0] = name;
    all[1] = email;
    all[2] = phone;
    all[3] = address;
    all[4] = zip;
    setData(all);
}

function setData(all){
    $('#first_name').val(all[0]);
    $('#last_name').val(all[0]);
    $('#emailAddress').val(all[1]);
    $('#phone_profile').val(all[2]);
    $('#address_profile').val(all[3]);
    $('#zip_profile').val(all[4]);
}

function goProfile(){
    $.getScript(script_url, function(){movePage('profile.html','slidefade','page',true,false);});
}


