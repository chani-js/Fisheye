class InjectPhotographers {
    constructor(photographers) {
        this.photographers = photographers
        this.filters = []
        this.onclick = this.onclickfilter.bind(this)
    }
    filtersByTags(photographersjson) {
        if (this.filters.length == 0)
            return photographersjson
        else {
            let photographe = []
            photographersjson.forEach(element => {
                let flag = false
                for (var i = 0; i < this.filters.length; i++) {
                    if (element.tags.includes(this.filters[i]) && flag == false) {
                        photographe.push(element)
                        flag = true
                    }
                }
            })
            return photographe
        }
    }
    onclickfilter(event) {
        let photographeContainer = document.getElementsByClassName("photographe-container")
        photographeContainer[0].innerHTML = ""
        event.target.classList.toggle("tagactive")
        const attr = event.target.getAttribute("data-attr")
        if (this.filters.includes(attr))
            this.filters.splice(this.filters.indexOf(attr), 1)
        else
            this.filters.push(attr)
        const photographerFiltered = this.filtersByTags(datas.photographers)
        this.render(photographerFiltered)
    }
    render(photographerJson) {
        const photoContainer = document.getElementsByClassName("photographe-container")
        let photographerFiltered = this.photographers
        if (photographerJson)
            photographerFiltered = photographerJson
        photographerFiltered.forEach(element => {
            const photographeCard = new PhotographeCard(element, photoContainer[0])
            photographeCard.render()
        })
    }
}