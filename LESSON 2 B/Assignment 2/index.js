let btnGet = document.querySelector('button');
let myTable =document.querySelector('#table');


let tableList =[
    {
        registrationNumber:'7893762098',
        firstName:'Ransom',
        lastName:'Eric',
        dateOfbirth:'25/3/1995',
        address:'Lagos Nigeria',
        StateOforigin:'Anambra'

    }
]

let headers = [' registrationNumber', 'firstName', 'lastName', 'dateOfbirth', 'address', '   StateOforigin' ];

btnGet.addEventListener('click', ()=>{
    let table = document.createElement('table');
    let headerRow = document.createElement('tr');

    headers.forEach(headerText =>{
        let header = document.createElement('th');
        let textNote = document.createTextNode(headerText);
        header.appendChild(textNote);
        headerRow.appendChild(header);
    });

    table.appendChild(headerRow);

    tableList.forEach(emp =>{
        let row = document.createElement('tr');

        Object.values(emp).forEach(text => {
        let cell = document.createElement('td');
        let textNote = document.createTextNode(text);
        cell.appendChild(textNote);
        row.appendChild(cell);
        })

        table.appendChild(row);

    });

    myTable.appendChild(table);
});