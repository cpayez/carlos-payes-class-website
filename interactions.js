 const button= document.querySelector ("#button");
 const message= document.querySelector ("#message");

 function changeMessage(params) {
    message.textContent = "You clicked the button!";
    message.style.color = "red";
    button.style.display ="none";
 }
 button.addEventListener ("click", changeMessage);
 button.addEventListener ("click", changeButton);
 button.addEventListener ("click", hide);

