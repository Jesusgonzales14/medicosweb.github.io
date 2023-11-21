function submitForm() {
    
    var nombres = document.getElementsByName("nombres")[0].value;
    var apellidos = document.getElementsByName("apellidos")[0].value;
    var email = document.getElementsByName("email")[0].value;

    if (nombres && apellidos && email) {
        document.getElementById("thanks-message").style.display = "block";

        
        setTimeout(function () {
            document.getElementById("thanks-message").style.display = "none";
        }, 2000);
        document.getElementById("myForm").reset();
    }
}