/*
 map_numbers:
 0 => pages/signup2.html
 1 => pages/credit_card.html
 2 => pages/sign_in.html
 */

function goMap(map_num){
    
    var file_name;
    
    switch (map_num){
            
            //assign parameters for respective page
            
        case 0:
            file_name = 'signup2.html';
            var params = new Array(file_name);
            params[file_name] = new Array();
            params[file_name][0] = 'name';
            params[file_name][1] = 'email';
            params[file_name][2] = 'phone';
            params[file_name][3] = 'password';
            return params;
            
        case 1:
            file_name = 'credit_card.html';
            var params = new Array(file_name);
            params[file_name] = new Array();
            params[file_name][0] = 'address';
            params[file_name][1] = 'address2';
            params[file_name][2] = 'zip';
            return params;
            
            
        case 3:
            file_name = 'sign_in.html';
            var params = new Array(file_name);
            params[file_name] = new Array();
            params[file_name][0] = 'email';
            params[file_name][1] = 'password';
            return params;
            
    }
    
}

