window.onload=function(){ 
	document.title='新天地'; 
	if(isnull(window.localStorage.getItem('customer'))){
		window.location.href = "login.html";
	}
	customer = JSON.parse(window.localStorage.getItem("customer"));
} 
function isnull(str){
	if(!!str && str != null && str.length > 0 && 'null' != str && 'undefined' != str){
        return false;
    }else{
        return true;
    }
}
