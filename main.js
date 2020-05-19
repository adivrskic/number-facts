var numberInput, factType;
var fact = document.getElementById("fact");
var apiBase = "http://numbersapi.com"; // /number/type

document.addEventListener('keyup', getFact);

function getFact() {
    numberInput = document.getElementById("number-input").value;
    factType = document.getElementById("fact-type-selector").value;

    fetch(apiBase + `/${ numberInput }/${ factType }`)
    .then(response => {
        if(response.ok) {
            return response.text()
        }
    })
    .then(data => {
        if(data == undefined) {
            console.log('hello')
            fact.classList.remove('visible');
            fact.innerText = '';
        } else {
            fact.classList.add('visible');
            fact.innerText = data;
        }
        
    })
    .catch(err => {
        console.log('error')
    })
}