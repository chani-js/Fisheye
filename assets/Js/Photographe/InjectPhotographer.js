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
            //filtre selon l'id su photogrphe pour recuperer seulements ses photos
        const medias = this.mock.media.filter((element) => element.photographerId === photographer.id)
        const slider = new Slider(medias, photographer)
        const gallery = new Gallery(medias, photographer, slider)
        photographerCard.render()
        gallery.render("date")
        gallery.renderlike()
        slider.render() /* creation de la modal */
        slider.renderMedias() /* inject medias dans le modal */
        var select = document.getElementsByClassName("select-tri")[0]
        select.addEventListener("change", (event) => {
            let photocontainer = document.getElementsByClassName("photo-container")[0]
            photocontainer.innerHTML = " "
                //console.log("event", event)
                //affiche l(image ) sur laquelle on  cliquer dns le slider en premier
            gallery.render(event.target.value)
        })
    }

}