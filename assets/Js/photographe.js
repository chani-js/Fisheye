

console.log('toto');

document.addEventListener("DOMContentLoaded", async function (event) {
    const datas = await GetData()
    console.log(datas)
    const photographer = getphotographer(datas.photographers)
    console.log(photographer)
    Addphotographer(photographer)
    
});

async function GetData() {
    const responsemock = await fetch("./assets/Js/mock.json")
        if (responsemock.ok) {
            const responsejson= await responsemock.json()
            return responsejson
        }

};

function getphotographer(photographers){
    const querystring= window.location.search
    const urlparams= new URLSearchParams(querystring)
    const photographerid= urlparams.get("id")
    const photographe= photographers.filter(item => item.id==photographerid)
    return photographe[0]
}

function Addphotographer(photographer) {
    let headercontainer = document.getElementsByClassName("header-container")

    const photographecard = `
        <div class="photographe-name">
            ${photographer.name}
        </div>
        
        <div class="description">
            <div class="photographe-locate">
                ${photographer.city}, ${photographer.country}
            </div>
            <div class="photographe-descr">
                ${photographer.tagline}
            </div>
        </div>
        <ul class="hashtag">   
        </ul>
      `
    headercontainer[0].insertAdjacentHTML("beforeend", photographecard)
    AddTag(photographer.tags)
}


function AddTag(tags) {
    // concataination avec ES2016
    let tagcontainer = document.getElementsByClassName(`hashtag`)
    tags.forEach(element => {
        const tag = `
        <li class="photographe-tag"><a href="${element}">#${element}</a></li>
        `
        tagcontainer[0].insertAdjacentHTML("beforeend", tag)
    })
}

