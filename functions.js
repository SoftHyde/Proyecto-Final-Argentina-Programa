function showInfo(information){
    document.getElementById("cvName").innerHTML = information.name.first + ' ' + information.name.last;
    document.getElementById("cvImg").src = information.picture.large
    document.getElementById("cvMail").innerHTML = information.email;
    document.getElementById("cvFecNac").innerHTML = information.dob.date.split('T')[0];
    document.getElementById("cvTel").innerHTML = information.cell;
    document.getElementById("cvDir").innerHTML =
        information.location.street.name +
        " " +
        information.location.street.number +
        ", " +
        information.location.city +
        ", " +
        information.location.country;
}

window.onload = function () {
    fetch("https://randomuser.me/api/").then((response) => {
        const responseObj = response.json();
        responseObj.then((data) => {
            const persona = data.results[0];
            localStorage.setItem("usuarioData", JSON.stringify(persona));
            showInfo(persona);
        });
    });
};

function copyToClipboard(idCampo) {
    let copyText = document.getElementById(idCampo).innerHTML;
    console.log(copyText);
    navigator.clipboard.writeText(copyText);
}

function sendMail(idMail){
    let mail = document.getElementById(idMail).innerHTML;
    parent.location = "mailto:"+ mail;
}