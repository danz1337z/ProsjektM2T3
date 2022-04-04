function favs() {
    let html = `
    ${showmeny()}
    <br>
    <h1> Dine favoritter </h1>
     `;
    for (let i = 0; i < model.app.favOs.length; i++) {
        html += `
         <b>
        ${model.app.favOs[i]}
         <Button onclick="openInNewTab('${model.app.favOs[i]}');"> Se den på Netflix</Button>
        <button onclick="slett(${i})">Slett</button>
        </b>
       
        <hr>
        `};
    appDiv.innerHTML = html;
}