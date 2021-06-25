// Chargement du Json
async function GetData() {
    const responsemock = await fetch("./assets/Js/mock.json")
    if (responsemock.ok) {
        const responsejson = await responsemock.json()
        return responsejson
    }

};


//Chargement des items sur la page au clic
document.addEventListener("DOMContentLoaded", async function(event) {
    datas = await GetData()
    const injectHTML = new InjectPhotographers(datas.photographers)
    injectHTML.render()
    const filterselements = document.getElementsByClassName("photographe-nav")
    Array.from(filterselements).forEach(element =>
        element.addEventListener("click", injectHTML.onclick)
    )
});