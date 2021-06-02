async function GetData() {
    const responsemock = await fetch("./assets/Js/mock.json")
    if (responsemock.ok) {
        const responsejson = await responsemock.json()
        return responsejson
    }
};