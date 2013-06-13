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
