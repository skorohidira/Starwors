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






/*
window.addEventListener("load", init);

function init() {
    let preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
    let url = `https://swapi.co/api/people/`;
    Request(url);
}

function Request(url) {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", url, true);
    xhr.send();

    xhr.onreadystatechange = function () {
        if (xhr.readyState != 4) return;

        if (xhr.status != 200) {
            var errStatus = xhr.status;
            var errText = xhr.statusText;
            console.log(errStatus + ": " + errText);
        } else {
            renderPeople(JSON.parse(xhr.responseText));
        }
    }
}


function Pagination() {

    var paginationleElem = document.querySelector("#pagination");

    for (let i = 1; i < 10; i++) {

        let paginationDiv = document.createElement("div");
        paginationDiv.className = "pageRow";
        paginationleElem.appendChild(paginationDiv);

        let nextPage = document.createElement("div");
        nextPage.className = "page";
        nextPage.innerHTML = i;
        paginationDiv.appendChild(nextPage);

        nextPage.addEventListener("click", NextPage);
    }
};

function NextPage() {
    let btnPg = this;
    console.log(btnPg.innerHTML);
    NexPageRequest(btnPg.innerHTML);
}



function renderPeople(people) {
    console.log(people);

    var peopleElem = document.querySelector("#people");

    for (let i = 0; i < 10; i++) {

        let peopleDiv = document.createElement("tr");
        peopleDiv.className = "people";
        peopleElem.appendChild(peopleDiv);

        let name = document.createElement("td");
        name.className = "name";
        name.innerHTML = people.results[i].name;
        peopleDiv.appendChild(name);

        let birth_year = document.createElement("td");
        birth_year.className = "birth_year";
        birth_year.innerHTML = people.results[i].birth_year;
        peopleDiv.appendChild(birth_year);

        let height = document.createElement("td");
        height.className = "height";
        height.innerHTML = people.results[i].height;
        peopleDiv.appendChild(height);

        let mass = document.createElement("td");
        mass.className = "mass";
        mass.innerHTML = people.results[i].mass;
        peopleDiv.appendChild(mass);

        let hair_color = document.createElement("td");
        hair_color.className = "hair_color";
        hair_color.innerHTML = people.results[i].hair_color;
        peopleDiv.appendChild(hair_color);

        let skin_color = document.createElement("td");
        skin_color.className = "skin_color";
        skin_color.innerHTML = people.results[i].skin_color;
        peopleDiv.appendChild(skin_color);
    }
    Pagination();
}


function NexPageRequest(page) {
    console.log("new", page);
    let url = `https://swapi.co/api/people/?page=${page}`;
    let xhr = new XMLHttpRequest();

    xhr.open("GET", url, true);
    xhr.send();

    xhr.onreadystatechange = function () {
        if (xhr.readyState != 4) return;

        if (xhr.status != 200) {
            var errStatus = xhr.status;
            var errText = xhr.statusText;
            console.log(errStatus + ": " + errText);
        } else {
            renderPeople(JSON.parse(xhr.responseText));
        }
    }
}
*/
