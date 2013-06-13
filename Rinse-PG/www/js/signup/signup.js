var script_url = '../js/signup/signup_model.js';
function goBack(){
    history.go(-1);
}
function hasAccount(){
    $.getScript(script_url, function(){movePage('sign_in.html','slideup','page',true,true);});
}
function goProfile(){
    $.getScript(script_url, function(){movePage('profile.html','slidefade','page',true,false);});
}