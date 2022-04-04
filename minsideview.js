let user = ["Benjamin"]
let epost = ["epost@.no"]
let pwd = ["*****"]
let add = "";
function minside() {
    let html = `
    <input id="inpKey" type="text" placeholder="Movie Title">
        <input id="inpValue" type="text" placeholder="Realse Date">
        <button type="button" id="btn2Insert">Legg til</button>
        <br>
        <div id="lsOutput"></div>
    ${showmeny()}
    <center>
    <h1> ${model.app.currentpage} </h1>
    <img class="profilbilde" src="https://kvener.no/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png"></img>
    <br>
    <input id="inpKey" oninput="add = this.value">
    <br><br>
    <div> Navn: ${user} -- <Button onclick = "endre()">Endre Navn</Button><br></div>
    <div> Epost: ${epost} -- <Button onclick = "endre1()">Endre Epost</Button><br></div>
    <div>Passord: ${pwd} -- <Button onclick = "endre2()">Endre Passord</Button><br></div>
    <br><br>
    <div class="btn-group">
    <Button type="button" class="button" onclick="changePage('favs')">Mine favoritter(${model.app.antallFavoritter})</button>
    <Button type="button" class="button" onclick="changePage('skjult')">Skjult innhold(${model.app.antallHidet})</button>
    </div>
    </center>
    
    `;

    appDiv.innerHTML = html;
}

function endre() {
    user = add;
    updateView();
}
function endre1() {
    epost = add;
    updateView();
}
function endre2() {
    pwd = add;
    updateView();
}


const inpKey = document.getElementById("inpKey");
const inpValue = document.getElementById("inpValue");
const btn2Insert = document.getElementById("btn2Insert");
const lsOutput = document.getElementById("lsOutput");

btn2Insert.onclick = function () {
    const key = inpKey.value;
    const value = inpValue.value;
    if (key && value) {
        localStorage.setItem(key, value);
        location.reload();
    }

};

function slett(index) {
    localStorage.clear();
    location.reload();

}









///////////////////////////////////////



// const inpKey = document.getElementById("inpKey");
// const inpValue = document.getElementById("inpValue");
// const btnInsert = document.getElementById("btnInsert");
// const lsOutput = document.getElementById("lsOutput");

// btnInsert.onclick = function () {
//     const key = inpKey.value;
//     const value = inpValue.value;
//     if(key && value){
//         localStorage.setItem(key, value);
//         location.reload();
//     }

// };

// for(let i = 0; i < localStorage.length; i++){
//     const key = localStorage.key(i);
//     const value = localStorage.getItem(key);
//     lsOutput.innerHTML += /*html*/ `
//     <br>
//     ${key}: ${value}
//     <br>
//     <button onclick="slett(${i})">Slett</button>`;
// };

// function slett(index){
//     localStorage.clear();
//     location.reload();
// };