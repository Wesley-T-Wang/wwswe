let al;
al = document.getElementById("alert-click");
al.addEventListener("click", callAlert);

let co;
co = document.getElementById("confirm-click");
co.addEventListener("click", callConfirm);

let pr;
pr = document.getElementById("prompt-click");
pr.addEventListener("click", callPrompt);

let spr;
spr = document.getElementById("safer-prompt");
spr.addEventListener("click", callSaferPrompt);

let res;
res = document.getElementById("result");

function callAlert(){
    alert("testing alert");
}

function callConfirm(){
    res.innerHTML = `The value returned by the confirm method is: ${confirm("confirm this message")}`;
}

function callPrompt(){
    let value = prompt("enter some text");
    if(value){
        res.innerHTML = `The value returned by the prompt method is: ${value}`;
    } else {
        res.innerHTML = "User didn't enter anything"
    }
}

function callSaferPrompt(){
    let dirty = prompt("enter some text");
    let value = DOMPurify.sanitize(dirty);
    console.log(dirty);
    console.log(value);
    if(value){
        res.innerHTML = `The value returned by the prompt method is: ${value}`;
    } else {
        res.innerHTML = "User didn't enter anything"
    }
}