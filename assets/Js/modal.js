// constante 
const modalbtn = document.querySelectorAll(".bouton")
const form = document.querySelector("form")
const minchar = "Ce champs doit contenir 2 caractères ou plus";
const mail = "Vous devez entrer une adresse Mail valide";

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

//Vérification champs nom et prénom avec un minimum de 2 lettres
function launchModal() {
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
}