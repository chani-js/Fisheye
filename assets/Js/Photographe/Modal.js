function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// DOM Elements
const modalbg = document.querySelector(".display-none");
const form = document.querySelector("form");
const success = document.querySelector(".success");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeBtn = document.querySelectorAll(".close-event");

// constante message erreur
const minchar = "Veuillez entrer 2 caractères ou plus";


// add event listeners
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));
// open modal
function launchModal() {
    success.style.display = "none";
    form.style.display = "block";
    modalbg.style.display = "block";
    form.reset();

    // reinitialise les champs d'erreur au lancement
    const formDatas = document.querySelectorAll(".formData");
    formDatas.forEach((formData) => {
        clearError(formData)
    })

}

//
function closeModal(e) {
    // recuperation de l'element cliqué sur le e
    //.closest recupere l'element parent afin de le cacher en display none
    e.currentTarget.closest('.display-none').style.display = "none";
}


// validate
function validate() {
    let validate = true
    const formDatas = document.querySelectorAll(".formData");

    formDatas.forEach((formData) => {
        clearError(formData)
        const field = formData.querySelector("input")
        const fieldName = field.getAttribute("name")

        let fieldValue = document.forms["reserve"][fieldName].value
        if (field.getAttribute("type") == 'checkbox') {
            fieldValue = field.checked
        }

        switch (fieldName) {
            case 'first':
                if (!checkMinLength(fieldValue)) {
                    setError(formData, minchar)
                    validate = false
                }
                break;
            case 'last':
                if (!checkMinLength(fieldValue)) {
                    setError(formData, minchar)
                    validate = false
                }
                break;
            case 'email':
                if (!checkEmail(fieldValue)) {
                    setError(formData, 'must be an adress mail')
                    validate = false
                }
                // creer la case pour le message avec une longueur de 25 minimum
                break;
            default:
                console.log(`no ${fieldName} found.`);
        }

    });

    if (validate) {
        success.style.display = "block";
        form.style.display = "none";
    }

    return validate
}


function checkMinLength(str) {
    if (str && str.length >= 2)
        return true
    return false
}

function checkEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return email && re.test(String(email).toLowerCase());
}

function checkQuantity(quantity) {
    if (quantity && Math.sign(quantity) >= 0 && quantity < 100)
        return true
    return false
}

function setError(formData, error) {
    formData.setAttribute('data-error-visible', 'true')
    formData.setAttribute('data-error', error)
}

function clearError(formData) {
    formData.removeAttribute('data-error-visible');
    formData.removeAttribute('data-error');
}



// constante 
/*const modalbtn = document.querySelectorAll(".bouton")
const form = document.querySelector("form")
const minchar = "Ce champ doit contenir 2 caractères ou plus";
const mail = "Vous devez entrer une adresse Mail valide";
const mincharmessage = "Ce champs doit contenir 25 caractères ou plus";

modalbtn.forEach((btn) => btn.addEventListener("click", launchModal));


function launchModal() {
    form.style.display = "block"
    form.reset()
}

function validate() {
    let validate = true
    const formdatas = document.querySelectorAll("FormPhoto")
    let fieldValue = document.forms["contact"][fieldValue].value


    switch ("") {
        case 'prenom':
            if (!checkMinLength(fieldValue)) {
                setError(formdatas, minchar)
                validate = false
            }
            break;
        case 'nom':
            if (!checkMinLength(fieldValue)) {
                setError(formdatas, minchar)
                validate = false
            }
            break;
        case 'mail':
            if (!checkMail(fieldValue)) {
                setError(formdatas, mail)
                validate = false
            }
        case 'message':
            if (!checkMessage(fieldValue)) {
                setError(formdatas, mincharmessage)
                validate = false
            }
        default:
            console.log('pas de ......')
    }
}




function checkMinLength(str) {
    if (str && str.length >= 2) {
        return true
    } else
        return false
}

function checkMessage(str) {
    if (str && str.length >= 25) {
        return true
    } else
        return false
}

function checkMail(email) {
    const mail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // comencer par retunrer un email si le champ n'est pas vide
    //et ensuite verifier la chaine de caractere en prenant les Maj comme des Min
    return email && mail.test(String(email).toLowerCase())
}*/