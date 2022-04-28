function incrementCountDiv () {
    let elem = document.querySelector("#count");
    elem.textContent =  parseInt(elem.textContent) + 1;
}

function annoyingPopUp () {
    alert("Super annoying")
}

function whisper(x) {
    console.log(x, x + x);
}

function createBeerElement(data) {
    if (!data) {
        throw "No data provided"
    }
    const elem = document.createElement("li");
    const n = document.createElement("h5")
    n.textContent = data.name
    elem.append(n)
    const t = document.createElement("span")
    t.textContent = data.tagline
    elem.appendChild(t)
    return elem;
}

function collect() {
    fetch("https://api.punkapi.com/v2/beers")
        .then(res => res.json())
        .then(data => {
            data.forEach(b => {
                const x = createBeerElement(b);
                document.querySelector("#data").appendChild(x);
            })
        })
        .catch(err => console.log(err));
}

if (typeof exports !== 'undefined') {
    module.exports = {
        annoyingPopUp,
        createBeerElement,
        incrementCountDiv,
        collect
    };
}