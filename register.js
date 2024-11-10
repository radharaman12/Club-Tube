function namevalid() {
    const name = document.getElementById("name").value;
    const nameInput = document.getElementById("name");
    const nameMessage = document.getElementById("namemessage");
    if (name.length > 2) {
        nameInput.style.borderColor = "green";
        nameMessage.textContent = "Valid Name";
        nameMessage.style.color = "green";
        return true;
    }
    else {
        nameInput.style.borderColor = "red";
        nameMessage.textContent = "Please enter valid name";
        nameMessage.style.color = "red";
        return false;
    }
}


function emailvalid() {
    const email = document.getElementById("email").value;
    const emailInput = document.getElementById("email");
    const emailMessage = document.getElementById("emailmessage");
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (emailPattern.test(email)) {
        emailInput.style.borderColor = "green";
        emailMessage.textContent = "Valid email";
        emailMessage.style.color = "green";
        return true;
    }
    else {
        emailInput.style.borderColor = "red";
        emailMessage.textContent = "Enter a valid email address";
        emailMessage.style.color = "red";
        return false;
    }
}

function biovalid() {
    const bio = document.getElementById("bio").value;
    const bioInput = document.getElementById("bio");
    const bioMessage = document.getElementById("biomessage");
    if (bio.length>=5) {
        emailInput.style.borderColor = "green";
        emailMessage.textContent = "Valid";
        emailMessage.style.color = "green";
        return true;
    }
    else {
        emailInput.style.borderColor = "red";
        emailMessage.textContent = "Invalid";
        emailMessage.style.color = "red";
        return false;
    }
}
document.getElementById("myform").addEventListener("submit",function(event){
    const isvalidName = namevalid();
    const isvalidemail = emailvalid();
    const isvalidbio= biovalid();
    if(!isvalidName || !isvalidemail || !isvalidbio){
        event.preventDefault();
    }
});
