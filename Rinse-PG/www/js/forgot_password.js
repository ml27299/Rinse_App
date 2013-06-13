var main_script = '../js/main.js';

function goBack(){
    history.go(-1);
}

function go(){
    $.getScript(main_script, function(){
            goAlert('We have sent you an email with further instructions','Forgot Password');
            goAction();
            goBack();
    });
}

function goAction(){
    var email = document.getElementById('email').value;
    if(email){
        var data_obj = {email: email};
        $.getScript(main_script, function(){request('forgot/get',data_obj);});
    }else
        $.getScript(main_script, function(){goAlert('Please Fill out all fields','Empty Field');});
}

function goProfile(){
    $.getScript(script_url, function(){movePage('profile.html','slidefade','page',true,false);});
}