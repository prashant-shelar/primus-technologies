function sendEmail(){
    let params = {
        name: document.getElementById("firstname").value + document.getElementById("lastname").value,
        email: document.getElementById("email").value,
        gender: document.getElementById("occupation").value,
        phone: "+91"+ document.getElementById("phone").value,
        address: document.getElementById("address").value,
        attachment: document.getElementById("upload").value
    }
   emailjs.send("Service_ID","template_ID",params).then(alert("Email Sent Successfully!!!"));l
}