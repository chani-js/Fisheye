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
        const like = new Compteur()
        const slider = new Slider(medias, photographer)
        const gallery = new Gallery(medias, photographer, slider)
        photographerCard.render()
        gallery.render()
        like.likes()
        slider.render() /* creation de la modal */
        slider.renderMedias() /* inject medias dans le modal */
    }

}