
let datas =[]
let filters= {
    portrait: true,
    art: true,
    fashion: true,
    architecture: true,
    travel: true,
    sports: true,
    animals:true,
    events: true
}
async function GetData() {
    const responsemock = await fetch("https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P5+Javascript+%26+Accessibility/FishEyeData.json")
        if (responsemock.ok) {
            const responsejson= await responsemock.json()
            return responsejson
        }

};



document.addEventListener("DOMContentLoaded", async function (event) {
    datas = await GetData()
    const photographers=hashtagfilters(datas.photographers)
    Addphotographers(photographers)
    const filterselements= document.getElementsByClassName("photographe-nav")
    Array.from(filterselements).forEach(element=> 
        element.addEventListener("click", onclickfilter)
    )
    
});


function Addphotographers(photographers) {
    let photographeContainer = document.getElementsByClassName("photographe-container")
    photographers.forEach(element => {
        const photographecard = `
        <div class="photographe-card">
            <a href="photographe.html?id=${element.id}" class="photographe-card">
                <div class="image">
                    <!--insertion de l'imge en js-->
                    <img class="pics" src="./assets/image/SamplePhotos/PhotographersIDPhotos/${element.portrait}" alt="">
                </div>
                <div class="photographe-description">
                    <h2 class="photographe-name" aria-label="Nom du photographe">
                            ${element.name}
                    </h2>
                    <div class="photographe-locate" aria-label="Localisation Géographique">
                        ${element.city}, ${element.country}
                    </div>
                    <div class="photographe-descr">
                        ${element.tagline}
                    </div>
                    <div class="photographe-price" aria-label="Prix de la prestation">
                    ${element.price}$
                    </div>
                </div>
            </a>
            <ul class="hashtag-${element.id} hashtag-ul">   
            </ul>
        </div>
      `
        photographeContainer[0].insertAdjacentHTML("beforeend", photographecard)
        AddTag(element.tags, element.id)
    });
}



function AddTag(tags, photographerID) {
    // concataination avec ES2016
    let tagcontainer = document.getElementsByClassName(`hashtag-${photographerID}`)
    tags.forEach(element => {
        const tag = `
        <li class="photographe-tag"><a href="#${element}">#${element}</a></li>
        `
        tagcontainer[0].insertAdjacentHTML("beforeend", tag)
    })
}

function hashtagfilters(photographers){
    let photographe=[]

    photographers.forEach(element => {
        let flag=false
        for (const filter in filters) {
            if(element.tags.includes(filter) && flag==false && filters[filter]){
            // flag false pour eviter les doublons dans le tableau de photographe
                photographe.push(element)
                flag=true
            }
        }
    })
    
    return photographe
}

function onclickfilter(event){
    let photographeContainer = document.getElementsByClassName("photographe-container")
    photographeContainer[0].innerHTML=""
    event.target.classList.toggle("tagactive")
    const attr=event.target.getAttribute("data-attr")
    filters[attr]=!filters[attr]
    const photographers=hashtagfilters(datas.photographers)
    Addphotographers(photographers)
}
