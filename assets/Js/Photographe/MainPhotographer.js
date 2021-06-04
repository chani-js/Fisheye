document.addEventListener("DOMContentLoaded", async function(event) {
    const datas = await GetData()
    const injectHTML = new InjectPhotographer(datas)
    injectHTML.render()
});