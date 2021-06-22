class Gallery {
    constructor(medias, photographer, slider) {
        this.photographer = photographer
        this.medias = medias
        this.slider = slider

    }

    render() {
        let photocontainer = document.getElementsByClassName("photo-container")
        this.medias.forEach(element => {
            let card = `<div class="image-select slideshow ">`
            const media = new Media(element, this.photographer)
            card += media.render()
            card += `<div class="title-container">
                        <p class="photo-title">${element.title}</p>
                        <p>${element.likes}<i class="fas fa-heart"></i></p>
                    </div> </div>`
            photocontainer[0].insertAdjacentHTML("beforeend", card)

        })
        let images = document.getElementsByClassName("image-select")
        let mod = document.getElementsByClassName("modal-slider")
        console.log(images)
            /*add event listener du slider*/

        for (var i = 0; i < images.length; i++) {
            console.log(images[i])
            images[i].setAttribute("image", i)
            images[i].addEventListener("click", (e) => {
                mod[0].classList.remove("modal-display")
                console.log(e.target.parentElement.getAttribute("image"))
                this.slider.goToSlide(parseInt(e.target.parentElement.getAttribute("image")))

            })

        }
    }

}