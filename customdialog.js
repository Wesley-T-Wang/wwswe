let pshow = document.getElementById('pshow');
let pDialog = document.getElementById('pDialog');
let outputBox = document.getElementById('result');
let selectEl = document.getElementById('in');
let pconfirm = document.getElementById('pconfirm');
let pcancel = document.getElementById('pcancel');
pshow.addEventListener('click', () => {
    pDialog.showModal();
});

pconfirm.addEventListener('click', () => {
    if(selectEl.value === ''){
        outputBox.innerHTML = "User didn't enter anything"
    } else {
        outputBox.innerHTML = `The value returned by the custom prompt method is: ${selectEl.value}`;
        selectEl.value = '';
    }
});

pcancel.addEventListener('click', () => {
    outputBox.innerHTML = "User didn't enter anything"
    selectEl.value = '';
});

let ashow = document.getElementById('ashow');
let aDialog = document.getElementById('aDialog');
let aconfirm = document.getElementById('aconfirm');

ashow.addEventListener('click', () => {
    aDialog.showModal();
});

let cshow = document.getElementById('cshow');
let cDialog = document.getElementById('cDialog');
let cconfirm = document.getElementById('cconfirm');
let ccancel = document.getElementById('ccancel');

cshow.addEventListener('click', () => {
    cDialog.showModal();
});

cconfirm.addEventListener('click', () => {
    outputBox.value = "The value returned by the confirm method is: true";
});

ccancel.addEventListener('click', () => {
    outputBox.value = "The value returned by the confirm method is: false";
});

let sshow = document.getElementById('sshow');
let sDialog = document.getElementById('sDialog');
let sselectEl = document.getElementById('sin');
let sconfirm = document.getElementById('sconfirm');
let scancel = document.getElementById('scancel');

sshow.addEventListener('click', () => {
    sDialog.showModal();
});

sconfirm.addEventListener('click', () => {
    let dirty = sselectEl.value;
    let clean = DOMPurify.sanitize(dirty);
    if(sselectEl.value === ''){
        outputBox.innerHTML = "User didn't enter anything"
    } else {
        outputBox.innerHTML = `The value returned by the custom prompt method is: ${clean}`;
        sselectEl.value = '';
    }s
});

scancel.addEventListener('click', () => {
    outputBox.innerHTML = "User didn't enter anything"
    sselectEl.value = '';
});
