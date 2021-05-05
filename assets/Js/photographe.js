
const message='Download impossible'

console.log('toto');


function GetData(){
    fetch("./assets/Js/mock.json")
    .then(function(response){
        console.log(response)
        if(response.ok){
            response.json().then(function(data){
                console.log(data)
            Addphotographers(data.photographers)
            })
        }
    })
    .catch(function(error){
        console.log('Probléme de l\'opérateur fetch'+error.message)
    })
    };

document.addEventListener("DOMContentLoaded", function(event) { 
   GetData()
  });

  function Addphotographers(photographers){
      let photographeContainer = document.getElementsByClassName("photographe-container")
      photographers.forEach(element => {
          const photographecard = `
          <a href="" class="photographe-card">
          <div class="image">
              <!--insertion de l'imge en js-->
              
              <img class="pics" src="./assets/image/SamplePhotos/PhotographersIDPhotos/${element.portrait}" alt="">
          </div>
          <div class="photographe-description">
              <h2 class="photographe-name" aria-label="Nom du photographe">
                    ${element.name}
              </h2>
              <div class="photographe-locate" aria-label="Localisation Géographique">
                  ${element.city}, ${element.country}
              </div>
              <div class="photographe-descr">
                ${element.tagline}
              </div>
              <div class="photographe-price" aria-label="Prix de la prestation">
              ${element.price}$
              </div>
          </div>

      </a>
        <ul class="hashtag-${element.id}">
           
        </ul>
      `

      photographeContainer[0].insertAdjacentHTML("beforeend",photographecard)
      AddTag(element.tags,element.id)
      

      });

  }
  function AddTag(tags,photographerID){
      // concataination avec ES2016
    let tagcontainer = document.getElementsByClassName( `hashtag-${photographerID}`)
    tags.forEach(element =>{
        const tag = `
        <li class="photographe-tag"><a href="${element}">${element}</a></li>
        ` 
        tagcontainer[0].insertAdjacentHTML("beforeend",tag)
    })
  }

