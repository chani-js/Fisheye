async function GetData() {
    const responsemock = await fetch("./assets/Js/mock.json")
    if (responsemock.ok) {
        const responsejson = await responsemock.json()
        return responsejson
    }
};

class Media {
    constructor(media, photographer) {
        this.media = media
        this.photographer = photographer
    }
    render() {
        if (this.media.image) {
            return `<img src="./assets/image/SamplePhotos/${this.photographer.name.split(" ")[0]}/${this.media.image}" alt="${this.media.title}">`
        } else
            return `<video controls src="./assets/image/SamplePhotos/${this.photographer.name.split(" ")[0]}/${this.media.video}" alt="${this.media.title}"></video>`
    }
}
class Gallery {
    constructor(medias, photographer) {
        this.photographer = photographer
        this.medias = medias
    }

    render() {
        let photocontainer = document.getElementsByClassName("photo-container")
        console.log(this.photographer.id)
        console.log(this.medias)
        this.medias.forEach(element => {
            let card = `<div class="image-select">`
            const media = new Media(element, this.photographer)
            card += media.render()
            card += `<p>${element.likes}<i class="fas fa-heart"></i></p> </div>`
            photocontainer[0].insertAdjacentHTML("beforeend", card)
        })


    }

}
class PhotographerCard {
    constructor(photographer) {
        this.photographer = photographer

    }


    render() {
        let headercontainer = document.getElementsByClassName("header-container")

        const photographecard = `
            <div class="photographe-name">
                ${this.photographer.name}
            </div>
            
            <div class="description">
                <div class="photographe-locate">
                    ${this.photographer.city}, ${this.photographer.country}
                </div>
                <div class="photographe-descr">
                    ${this.photographer.tagline}
                </div>
            </div>
            ${this.injectTag(this.photographer.tags)}
            <div class="image">
                        <!--insertion de l'imge en js-->
                        <img class="pics" src="./assets/image/SamplePhotos/PhotographersIDPhotos/${this.photographer.portrait}" alt="">
                    </div>
          `
        headercontainer[0].insertAdjacentHTML("beforeend", photographecard)
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
class InjectPhotographer {
    constructor(mock) {
        this.mock = mock
    }
    getPhotographer(photographers) {
        const querystring = window.location.search
        const urlparams = new URLSearchParams(querystring)
        var photographerid = urlparams.get("id")
        const photographe = photographers.filter(item => item.id == photographerid)
        return photographe[0]
    }
    render() {
        const photographer = this.getPhotographer(this.mock.photographers)
        const photographerCard = new PhotographerCard(photographer)
        const medias = this.mock.media.filter((element) => element.photographerId === photographer.id)
        const gallery = new Gallery(medias, photographer)
        photographerCard.render()
        gallery.render()


    }

}
document.addEventListener("DOMContentLoaded", async function(event) {
    const datas = await GetData()

    const injectHTML = new InjectPhotographer(datas)
    injectHTML.render()


});