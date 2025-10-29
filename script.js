function SendMail() {
    var params = {
      email: document.getElementById("email").value,
    };
    emailjs
      .send("service_ehzmg6d", "template_7a6du7h", params)
      .then(function (res) {
        alert("Email sent successfully!" + res.status);
      });
  }