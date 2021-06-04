class PhotographeCard {
    constructor(mock, photoContainer) {
        /*this.name=mock.name
        this.id=mock.id
        this.city=mock.city
        this.country=mock.country
        this.tags=mock.tags
        this.tagline=mock.tagline
        this.price=mock.price
        this.portrait=mock.portrait*/
        this.mock = mock
        this.photoContainer = photoContainer

    }
    render() {
        const card = `
        <div class="photographe-card1">
            <a href="photographe.html?id=${this.mock.id}" class="photographe-card">
                <div class="image">
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