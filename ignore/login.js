let correctPass="1234"
let correctUser="user"
function signIn(){
var username=document.getElementById("username")
var password=document.getElementById("password")
var messagebtn=document.getElementById("msgBtn")
var user=username.value
var pass=password.value
if(user==correctUser&&pass==correctPass){
    messagebtn.hidden=false
}else{
    messagebtn.hidden=true
}
}
setInterval(function(){
    signIn()
},1)