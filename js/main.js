let xhr = new XMLHttpRequest();
xhr.open("GET", "https://swapi.co/api/people", true);
xhr.send();
xhr.onreadystatechange = function () {
    if (xhr.readyState != 4) return;
    if (xhr.status != 200) {
        var errStatus = xhr.status;
        var errText = xhr.statusText;
        console.log(errStatus + ": " + errText);
    } else {
        var data = JSON.parse(xhr.responseText);
        console.log(data);
        BildTable(data);
    }
}
let BildTable = (data) => {
    let table_data = document.querySelector("#data");

    for (let i = 0; i < data.results.length; i++) {

        var trTable = document.createElement("tr");

        var tdName = document.createElement("td");
        tdName.innerText = data.results[i].name;

        var tdBirth_year = document.createElement("td");
        tdBirth_year.innerText = data.results[i].birth_year;

        var tdHomeworld = document.createElement("td");
        tdHomeworld.innerText = data.results[i].homeworld;

        var tdStarships = document.createElement("td");
        tdStarships.innerText = data.results[i].starships;

        var tdSpecies = document.createElement("td");
        tdSpecies.innerText = data.results[i].species;

        table_data.appendChild(trTable);
        trTable.appendChild(tdName);
        trTable.appendChild(tdBirth_year);
        trTable.appendChild(tdHomeworld);
        trTable.appendChild(tdStarships);
        trTable.appendChild(tdSpecies);
    }
}

