let user = ["Benjamin"]
let epost = ["epost@.no"]
let pwd = ["*****"]
let add = "";
function minside() {
    let html = `
   
    ${showmeny()}
    <center>
    <h1> ${model.app.currentpage} </h1>
    <img class="profilbilde" src="http://img.gfx.no/1675/1675918/1200024500.jpg"></img>
    <br>
    <br>
    <h2> Navn: ${user}</h2>
    <h2> Epost: ${epost}</h2>  
    <h2>Passord: ${pwd}</h2>
    <input id="inpKey" oninput="add = this.value"><br>
    <input class="fuck" type="button" Value ="Endre Navn" onclick = "endre()">
    <input class="fuck" type="button" Value ="Endre Epost" onclick = "endre1()">
    <input class="fuck" type="button" Value ="Endre Passord" onclick = "endre2()">
    <br>
    <br>
    <div class="btn-group">
    <Button type="button" class="button" onclick="changePage('favs')">Mine favoritter(${model.app.antallFavoritter})</button>
    <Button type="button" class="button" onclick="changePage('skjult')">Skjult innhold(${model.app.antallHidet})</button>
    </div>

    </center>
    `;

    Covid.innerHTML = html;
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
