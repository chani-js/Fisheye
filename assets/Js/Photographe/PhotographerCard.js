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
/*class PhotographerName {
    constructor(photographer) {
        this.photographer = photographer

    }
    render() {
        let names = document.getElementsByClassName("contact-name")

        const name = `<div class="names">
                        ${this.Photographer.name}
                       </div> `
        console.log("toto" + "name")
        names.insertAdjacentHTML("beforeend", name)
    }
}*/