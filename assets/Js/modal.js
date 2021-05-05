


// constante message erreur
const minchar = "Veuillez entrer 2 caractères ou plus pour le champ du nom";
const option  = "Vous devez entrer une adresse Mail valide";

//Vérification champs nom et prénom avec un minimum de 2 lettres

function checkMinLength(str){
    if(str && str.length >=2){
        return true
    }else
    return false
}

// Vérification d'une adresse mail valide

function checkMail(email){
    const mail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // comencer par retunrer un email si le champ n'est pas vide
    //et ensuite verifier la chaine de caractere en prenant les Maj comme des Min
    return email && mail.test(String(email).toLowerCase())
}