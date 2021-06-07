var slide = new Array("./assets/image/SamplePhotos/Ellie-Rose/Architecture_Connected_Curves.jpg", "./assets/image/SamplePhotos/Ellie-Rose/Architecture_Cross_Bar.jpg", "./assets/image/SamplePhotos/Ellie-Rose/Architecture_Horseshoe.jpg", "./assets/image/SamplePhotos/Ellie-Rose/Architecture_Connected_Curves.jpg");
var numero = 0;
var slidep = new Media
slidep.render()

async function GetData() {
    const responsemock = await fetch("./assets/Js/mock.json")
    if (responsemock.ok) {
        const responsejson = await responsemock.json()
        return responsejson
    }
};


function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slidep").src = slide[numero];
}