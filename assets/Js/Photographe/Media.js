class Media {
    constructor(media, photographer) {
        this.media = media
        this.photographer = photographer
    }
    render() {
        // test pour afficher les images ou les videos
        if (this.media.image) {
            return `<img class="cursor-hover" src="./assets/image/SamplePhotos/${this.photographer.name.split(" ")[0]}/${this.media.image}" aria-label="${this.media.title}">`
        } else
            return `<video class="cursor-hover" controls src="./assets/image/SamplePhotos/${this.photographer.name.split(" ")[0]}/${this.media.video}" aria-label="${this.media.title}  "></video>`
    }

}