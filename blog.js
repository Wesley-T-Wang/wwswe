let pshow = document.getElementById('pshow');
let pDialog = document.getElementById('pDialog');
let title = document.getElementById('title');
let date = document.getElementById('date');
let summary = document.getElementById('summary');
let pconfirm = document.getElementById('pconfirm');
let pcancel = document.getElementById('pcancel');

pshow.addEventListener('click', () => {
    pDialog.showModal();
});

pconfirm.addEventListener('click', () => {
    let t = title.value;
    let d = date.value;
    let s = summary.value;
    if(t === '' || d === '' || s=== ''){
        alert('Make sure to fill out all fields!')
    } else {
        let i = [t, d, s];
        addRow(i);
        title.value = '';
        date.value = '';
        summary.value = '';
    }
});

pcancel.addEventListener('click', () => {
    title.value = '';
    date.value = '';
    summary.value = '';
});

pDialog.addEventListener('close', ()=>{
    title.value = '';
    date.value = '';
    summary.value = '';
});

let eshow = document.getElementById('eshow');
let eDialog = document.getElementById('eDialog');
let etitle = document.getElementById('etitle');
let edate = document.getElementById('edate');
let esummary = document.getElementById('esummary');
let econfirm = document.getElementById('econfirm');
let ecancel = document.getElementById('ecancel');
let currentRow;

econfirm.addEventListener('click', () => {
    let t = etitle.value;
    let d = edate.value;
    let s = esummary.value;
    if(t === '' || d === '' || s=== ''){
        alert('Make sure to fill out all fields!')
    } else {
        let i = [t, d, s];
        submitEdit(currentRow, i);
        etitle.value = '';
        edate.value = '';
        esummary.value = '';
    }
});

ecancel.addEventListener('click', () => {
    etitle.value = '';
    edate.value = '';
    esummary.value = '';
});

// items = [['hello', 'chicken','4600']];
items = [];
let temp = JSON.parse(localStorage.getItem('posts'));
if(temp.length > 0){
    items = temp;
}

let blogs = document.getElementById('posts');
for(let i = 0; i < items.length; i++){
    curr = items[i];
    let node = document.createElement("tr");
    node.innerHTML = `<td>${curr[0]}</td><td>${curr[1]}</td><td>${curr[2]}</td><td><button onclick="editRow(['${curr[0]}', '${curr[1]}', '${curr[2]}'])" style="margin: 5px;"><i class='fas fa-pencil-alt'></i></button><button onclick="deleteRow(['${curr[0]}', '${curr[1]}', '${curr[2]}'])" style="margin: 5px;"><i class='fas fa-trash-alt'></i></button></td>`;
    blogs.appendChild(node);
}

function addRow(row){
    items.push(row);
    let node = document.createElement("tr");
    node.innerHTML = `<td>${row[0]}</td><td>${row[1]}</td><td>${row[2]}</td><td><button style="margin: 5px;" onclick="editRow(['${row[0]}', '${row[1]}', '${row[2]}'])"><i class='fas fa-pencil-alt'></i></button><button onclick="deleteRow(['${row[0]}', '${row[1]}', '${row[2]}'])" style="margin: 5px"><i class='fas fa-trash-alt'></i></button></td>`;
    blogs.appendChild(node);
    localStorage.setItem('posts', JSON.stringify(items));
}

function deleteRow(row){
    let index = -1;
    for(let i = 0; i < items.length; i ++){
        if(row[0]===items[i][0] && row[1] === items[i][1] && row[2] === items[i][2]){
            index = i;
        }
    }
    let j = blogs.childNodes[index + 2];
    blogs.removeChild(j);
    items.splice(index, 1);
    localStorage.setItem('posts', JSON.stringify(items));
}

function editRow(row){
    etitle.value = row[0];
    edate.value = row[1];
    esummary.value = row[2];
    currentRow = row;
    eDialog.showModal();
}

function submitEdit(row, newRow){
    let index = -1;
    for(let i = 0; i < items.length; i ++){
        if(row[0]===items[i][0] && row[1] === items[i][1] && row[2] === items[i][2]){
            index = i;
        }
    }
    let j = blogs.childNodes[index + 2];
    items[index][0] = newRow[0];
    items[index][1] = newRow[1];
    items[index][2] = newRow[2];
    j.innerHTML = `<td>${newRow[0]}</td><td>${newRow[1]}</td><td>${newRow[2]}</td><td><button style="margin: 5px;" onclick="editRow(['${newRow[0]}', '${newRow[1]}', '${newRow[2]}'])"><i class='fas fa-pencil-alt'></i></button><button onclick="deleteRow(['${newRow[0]}', '${newRow[1]}', '${newRow[2]}'])" style="margin: 5px"><i class='fas fa-trash-alt'></i></button></td>`;
    localStorage.setItem('posts', JSON.stringify(items));
}