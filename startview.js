function startside() {

    html =/*html*/ `
    ${showmeny()}
    <br><br>
    <center>
    <h1> Velkommen ${model.inputs.startpage.login}</h1>
    <img src="/ProsjektM2T3/logos/Cinema-PNG-Photo.png" class="cinema">
    <br><br>
    </center>
    `;

    Covid.innerHTML = html;
}
// <img src="/logos/Cinema.png" class="cinema">
