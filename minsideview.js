function minside() {
    let html = `
   
    ${showmeny()}
    <center>
    <h1> ${model.app.currentpage} </h1>
    <img class="profilbilde" src="https://i.pinimg.com/originals/02/5b/aa/025baa5b2cd7e46b6b4730247f6663ed.png"></img>
    <br>
    <br>
    <div class="btn-group">
    <Button type="button" class="button" onclick="changePage('favs')">Mine favoritter(${model.app.antallFavoritter})</button>
    <Button type="button" class="button" onclick="changePage('skjult')">Skjult innhold(${model.app.antallHidet})</button>
    </div>
    <br>
    <br>
    <div class="ramme">
    <h2> Brukernavn: ${model.inputs.startpage.login}</h2>
    <h2> Passord: <input type="password" value="${model.inputs.startpage.pwd}" id="showpw"></h2>
    <h4><input type="checkbox" onclick="myFunction()">Vis passord</h4>
    <br>
    <center>
    <input id="inpKey" oninput="add = this.value">
    </center>
    <br><br>
    <div class="btn-group">
    <button  type="button" class="button" onclick = "endre()">Endre brukernavn</button>
    <button  type="button" class="button" onclick = "endre2()">Endre passord</button>
    <br>
    <br>
    <button  type="button" class="buttis" onclick = "login()">Logg ut</button>
    </div>
    </div>
    </form>
    </center>
    
    `;

    Covid.innerHTML = html;
}

function endre() {
    model.inputs.startpage.login = add;
    updateView();
}
function endre1() {
    model.app.currentepost = add;
    updateView();
}
function endre2() {
    model.inputs.startpage.pwd = add;
    updateView();
}


//<Button type="button" class="button" onclick="changePage('skjult')">Skjult innhold(${model.app.antallHidet})</button>
