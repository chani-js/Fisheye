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