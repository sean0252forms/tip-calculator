var message=document.getElementById("message_body")
message.innerHTML=''
var messageList=["page is not working","page is missing","page not found"]
/*for (let i = 0; i  < messageList.length; i++) {
    const element = messageList[i];
    var currentElement=document.createElement("div")
    currentElement.innerText=element
    message.appendChild(currentElement)
}*/
function choose(){
    return messageList[Math.floor(Math.random()*messageList.length)]
}
message.innerText=choose()
// console.log(message)
function changeMsg(){
    message.innerText=choose()
}