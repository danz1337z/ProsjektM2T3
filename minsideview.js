function minside() {
    let html = `
   
    ${showmeny()}
    <center>
    <h1> ${model.app.currentpage} </h1>
    <img class="profilbilde" src="https://cdn.discordapp.com/attachments/956493727042514984/963050366549782538/unknown.png"></img>
    <br>
    <br>
    <div class="btn-group">
    <Button type="button" class="button" onclick="changePage('favs')">Mine favoritter(${model.app.antallFavoritter})</button>
    <Button type="button" class="button" onclick="changePage('skjult')">Skjult innhold(${model.app.antallHidet})</button>
    </div>
    <br>
    <br>
    <div class="ramme">
    <h2> Navn: ${model.inputs.startpage.login}</h2>
    <h2> Epost: ${model.app.currentepost}</h2>  
    <h2></hh2>Password: <input type="password" value="${model.inputs.startpage.pwd}" id="myInput"></h2>
    <h4><input type="checkbox" onclick="myFunction()">Show Password</h4>
    <br>
    <br>
    <br>
    <center>
    <input id="inpKey" oninput="add = this.value">
    </center>
    <br>
    <div class="btn-group">
    <button  type="button" class="button" onclick = "endre()">Endre navn</button>
    <button  type="button" class="button" onclick = "endre1()">Endre e-post</button>
    <button  type="button" class="button" onclick = "endre2()">Endre passord</button>
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