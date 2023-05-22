let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");
let result = document.getElementById("result")

searchBtn.addEventListener("click", () => {
    let countryName = countryInp.value;
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        result.innerHTML = `<img src="${data[0].flags.svg}"
        class="flag-img">
        <h2>${data[0].name.common}</h2>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Capital:</h4>
                <span>${data[0].capital[0]}</span>
            </div>
        </div>

    <div class="wrapper">
        <div class="data-wrapper">
            <h4>Continete:</h4>
            <span>${data[0].continents[0]}</span>
        </div>
    </div>

    <div class="wrapper">
        <div class="data-wrapper">
            <h4>População:</h4>
            <span>${data[0].population}</span>
        </div>
    </div>

    <div class="wrapper">
        <div class="data-wrapper">
            <h4>Moeda:</h4>
            <span>${data[0].currencies[Object.keys(data
                [0].currencies)].name
            } - ${Object.keys(data[0].currencies)
                [0]}</span>
        </div>
    </div>

    <div class="wrapper">
        <div class="data-wrapper">
            <h4>Língua comum:</h4>
            <span>${Object.values(data[0].languages)
                .toString()
                .split(",")
                .join(", ")}  
            </span>
        </div>
    </div>`
    }).catch(() =>{
            if(countryName.length == 0){
                result.innerHTML=`<h3>O campo de pesquisa não pode estar vazio</h3>`
            }
        }
    )
});