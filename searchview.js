function search() {
    let html = /*html*/`
    ${showmeny()}
    <h3>Søk</h3>
    <input 
        type="text" 
        oninput="model.inputs.search.text=this.value"
        value="${model.inputs.search.text}"
    />
    <button>Søk</button>
    
    <h5>Søkeresultater:</h5>
    ${divInfo()}

`;
    Covid.innerHTML = html;
}
function divInfo() {
    let html = '';
    const people = model.people;
    for (let i = 0; i < people.length; i++) {
        const person = people[i];
        html += /*html*/`
            <li>${person.name} ${person.email}</li>
        `;
    }


    return;
    Covid.innerHTML = html;
}

