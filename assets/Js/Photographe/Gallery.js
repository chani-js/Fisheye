class Gallery {

    constructor(medias, photographer, slider) {
        this.photographer = photographer
        this.medias = medias
        this.slider = slider

    }

    render(sort) {
        let photocontainer = document.getElementsByClassName("photo-container")
        let sortmedia = this.medias
            //console.log("sort", sort)
            // sort sert a trier les photos 
        if (sort) {

            sortmedia = this.medias.sort((a, b) => {
                if (a[sort] < b[sort]) { return -1; }
                if (a[sort] > b[sort]) { return 1; }
                return 0;
            })
        }
        // ajout des medias dans la carte du photographe en fonction de son id (le test est fait dans le injectphotographer)
        sortmedia.forEach((element, index) => {
            let card = `<div class="image-select slideshow" tabindex=${index}>`
            const media = new Media(element, this.photographer)
            card += media.render()
            card += `<div class="title-container">
                        <p class="photo-title">${element.title}</p>
                        <p>${element.likes}<i class="fas fa-heart"></i></p>
                    </div> </div>`
            photocontainer[0].insertAdjacentHTML("beforeend", card)

        })

        //Créeation du slide et affichage de l'image sur laquelle on clic
        let images = document.getElementsByClassName("image-select")
        let mod = document.getElementsByClassName("modal-slider")
            //console.log(images)
            /*add event listener du slider*/

        for (var i = 0; i < images.length; i++) {
            //console.log(images[i])
            images[i].setAttribute("image", i)
            images[i].addEventListener("click", (e) => {
                mod[0].classList.remove("modal-display")
                    //console.log(e.target.parentElement.getAttribute("image"))
                this.slider.goToSlide(parseInt(e.target.parentElement.getAttribute("image")))

            })

        }



        // tri des photos selon la date ou le nom ou le nombre de like

    }
    renderlike() {
        // compteur du nombre de like
        let compteur = 0;
        for (var i = 0; i < this.medias.length; i++) {
            compteur += this.medias[i].likes

            //console.log('compteur ', compteur)
        }
        var likeTotal = document.getElementById("like");
        // console.log('liketotal ', likeTotal)
        likeTotal.innerHTML += compteur += `<i class="fas fa-heart">`;

        // recupere et injecte le prix dans la div price
        var price = document.getElementById("price")
        console.log("prix", price)
        price.innerHTML += this.photographer.price += `€/jour`
            //console.log("prix en euros" + this.photographer.price)
    }

}