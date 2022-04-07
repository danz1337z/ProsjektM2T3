function minside() {
    let html = `
   
    ${showmeny()}
    <center>
    <h1> ${model.app.currentpage} </h1>
    <img class="profilbilde" src="http://img.gfx.no/1675/1675918/1200024500.jpg"></img>
    <br>
    <br>
    <h2> Navn: ${model.inputs.startpage.login}</h2>
    <h2> Epost: ${model.app.currentepost}</h2>  
    <h2></hh2>Password: <br><input type="password" value="${model.inputs.startpage.pwd}" id="myInput"></h2>
    <h2><input type="checkbox" onclick="myFunction()">Show Password</h2>
    <br>
    <br>
    <input id="inpKey" oninput="add = this.value"><br><br>
    <input class="btn" type="submit" Value ="Endre Navn" onclick = "endre()"><br>
    <input class="btn" type="button" Value ="Endre Epost" onclick = "endre1()"><br>
    <input class="btn" type="submit" Value ="Endre Passord" onclick = "endre2()"><br>
    </form>
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