document.getElementById("vacation-form").onsubmit = () => {

    let isValid = true;

    clearErrors();

    let destination = document.getElementById("destination").value;
    if (destination === "none") {
        document.getElementById("destination-error").style.display = "block";
        isValid = false;
    }


    let date = document.getElementById("date").value;
    if (date === "") {
        document.getElementById("error-date").style.display = "block";
        isValid = false;
    }

    let number = document.getElementById("number").value.trim();
    if (number === "" || Number(number) < 1) {
        document.getElementById("error-number").style.display = "block";
        isValid = false;
    }

    return isValid;

};

function clearErrors() {

    let errors = document.getElementsByClassName("error");
    for (let i = 0; i < errors.length; i++) {
        errors[i].style.display = "none";
    }

}