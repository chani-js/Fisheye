class Gallery {
    constructor(medias, photographer) {
        this.photographer = photographer
        this.medias = medias
    }

    render() {
        let photocontainer = document.getElementsByClassName("photo-container")
        this.medias.forEach(element => {
            let card = `<div class="image-select">`
            const media = new Media(element, this.photographer)
            card += media.render()
            card += `<div class="title-container">
                        <p class="photo-title">${element.title}</p>
                        <p>${element.likes}<i class="fas fa-heart"></i></p>
                    </div> </div>`
            photocontainer[0].insertAdjacentHTML("beforeend", card)
        })


    }

}