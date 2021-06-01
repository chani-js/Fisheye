async function GetData() {
    const responsemock = await fetch("./assets/Js/mock.json")
    if (responsemock.ok) {
        const responsejson = await responsemock.json()
        return responsejson
    }

};


class InjectPhotographers {
    constructor(photographers) {
        this.photographers = photographers
        this.filters = []
        this.onclick = this.onclickfilter.bind(this)
    }

    filtersByTags(photographersjson) {
        if (this.filters.length == 0)
            return photographersjson
        else {
            let photographe = []
            photographersjson.forEach(element => {
                let flag = false
                for (var i = 0; i < this.filters.length; i++) {
                    if (element.tags.includes(this.filters[i]) && flag == false) {
                        photographe.push(element)
                        flag = true
                    }
                }
            })

            return photographe
        }
    }
    onclickfilter(event) {
        let photographeContainer = document.getElementsByClassName("photographe-container")
        photographeContainer[0].innerHTML = ""
        event.target.classList.toggle("tagactive")
        const attr = event.target.getAttribute("data-attr")
        if (this.filters.includes(attr))
            this.filters.splice(this.filters.indexOf(attr), 1)
        else
            this.filters.push(attr)
        const photographerFiltered = this.filtersByTags(datas.photographers)
        this.render(photographerFiltered)

    }


    render(photographerJson) {
        const photoContainer = document.getElementsByClassName("photographe-container")
        let photographerFiltered = this.photographers
        if (photographerJson)
            photographerFiltered = photographerJson
        photographerFiltered.forEach(element => {
            const photographeCard = new PhotographeCard(element, photoContainer[0])
            photographeCard.render()
        })


    }


}

class PhotographeCard {
    constructor(mock, photoContainer) {
        this.mock = mock
        this.photoContainer = photoContainer

    }
    render() {
        const card = `
        <div class="photographe-card1">
            <a href="photographe.html?id=${this.mock.id}" class="photographe-card">
                <div class="image">
                    <!--insertion de l'imge en js-->
                    <img class="pics" src="./assets/image/SamplePhotos/PhotographersIDPhotos/${this.mock.portrait}" alt="">
                </div>
                <div class="photographe-description">
                    <h2 class="photographe-name" aria-label="Nom du photographe">
                            ${this.mock.name}
                    </h2>
                    <div class="photographe-locate" aria-label="Localisation Géographique">
                        ${this.mock.city}, ${this.mock.country}
                    </div>
                    <div class="photographe-descr">
                        ${this.mock.tagline}
                    </div>
                    <div class="photographe-price" aria-label="Prix de la prestation">
                    ${this.mock.price}$
                    </div>
                </div>
            </a>
            ${this.injectTag(this.mock.tags)}
        </div>
      `
        this.photoContainer.insertAdjacentHTML("beforeend", card)

    }

    injectTag(tags) {
        // concataination avec ES2016
        let ul = `<ul class="hashtag hashtag-ul">  `
        tags.forEach(element => {
            const tag = `
            <li class="photographe-tag"><a href="#${element}">#${element}</a></li>
            `
            ul += tag
        })
        ul += `</ul>`
        return ul
    }

}


document.addEventListener("DOMContentLoaded", async function(event) {
    const datas = await GetData()

    const injectHTML = new InjectPhotographers(datas.photographers)
    injectHTML.render()
    const filterselements = document.getElementsByClassName("photographe-nav")
    Array.from(filterselements).forEach(element =>
        element.addEventListener("click", injectHTML.onclick)
    )
});