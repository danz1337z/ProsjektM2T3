function search() {
    let html = /*html*/`
    ${showmeny()}
    <h3>Søk</h3>
    <input 
        type="text" 
        oninput="model.inputs.search.text=this.value"
        value="${model.inputs.search.text}"
    />
    <button onclick="updateView()">Søk</button>
    
    <h5>Søkeresultater:</h5>
    <ul>
    ${divInfo()}
    </ul>
`;
    Covid.innerHTML = html;
}

function divInfo() {
    let html = '';
    let people = model.inputs.people;
    const searchText = model.inputs.search.text;
    if (searchText !== '') {
        people = filterPeople(searchText, people);
    }
    for (let i = 0; i < model.inputs.people.length; i++) {
        const person = people[i];
        html += /*html*/`
            <li>${person.name} ${person.email}</li>
        `;
    }


    return html;
    Covid.innerHTML = html;
}

function filterPeople(searchText, people) {

}
