class Slider {
    constructor(medias, photographer) {
        this.medias = medias
        this.photographer = photographer
    }
    handleClickArrow(arrow) {
        console.log(arrow)
        const slide = document.getElementsByClassName("slide-active")[0]
        slide.classList.remove("slide-active")
        if (arrow == "precedent") {
            const slideprev = slide.previousSibling
            if (slideprev) {
                slideprev.classList.add("slide-active")
            } else {
                const slider = document.getElementsByClassName("slider-content")
                slider[0].lastChild.classList.add("slide-active")
            }
        } else {
            const slidenext = slide.nextSibling
            if (slidenext) {

                slidenext.classList.add("slide-active")
            } else {
                const slider = document.getElementsByClassName("slider-content")
                slider[0].firstChild.classList.add("slide-active")
            }
        }

    }
    renderMedias() {
            /* recuperation des medias pour les injecter dans le slider*/
            let slider = document.getElementsByClassName("slider-content")
            this.medias.forEach((element, index) => {

                /*changer pour afficher la photo cliquée en premier*/
                let slide = `<div class="slide ${index==0?"slide-active":""}">`
                const media = new Media(element, this.photographer)
                slide += media.render()
                slide += ` </div>`
                slider[0].insertAdjacentHTML("beforeend", slide)
            })

        }
        /*Creation de la modal et des boutons */
    render() {
        let modal = document.getElementsByClassName("modal-slider")
        let slider = `
        
                <div class="slider">
                <div class="slider-content"></div>
                    <div class="precedent"><</div>

                    <div class="suivant">></div>
                </div>`
        modal[0].insertAdjacentHTML("beforeend", slider)

        let previousbtn = document.getElementsByClassName("precedent")
        let nextbtn = document.getElementsByClassName("suivant")
        previousbtn[0].addEventListener("click", () => this.handleClickArrow("precedent"))
        nextbtn[0].addEventListener("click", () => this.handleClickArrow("suivant"))
    }
}