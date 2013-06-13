var model_script = '../js/signup/signup_model.js';
var main_script = '../js/main.js';

function goBack(){
    history.go(-1);
}
function post(){
    
    //get relevent parameters to send to server
    var name = window.localStorage.getItem('name');
    var email = window.localStorage.getItem('email');
    var phone = window.localStorage.getItem('phone');
    var password = window.localStorage.getItem('password');
    var address = document.getElementById('address').value;
    var address2 = document.getElementById('address2').value;
    var zip = document.getElementById('zip').value;
    
    if(address && zip){
   
        $.getScript(main_script, function(){
        zipSupported(zip);
        var data_obj = {name:name,email:email,phone:phone,password:password,address:address,address2:address2,zip:zip};
        
        $.getScript(model_script, function()
        {
            request('user/post',data_obj);
            goNext(1);
        });
        });
    }else
        $.getScript(main_script, function(){goAlert('Please Fill out all fields','Empty Field');});
    
}

function hasAccount(){
    $.getScript(model_script, function(){movePage('sign_in.html','slideup','page',true,true);});
}
