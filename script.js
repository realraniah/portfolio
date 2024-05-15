// Get user's inputs and forward to my email
function sendMail() {
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    }

    emailjs.send("service_cjzll8o", "template_017d5ku", parms)
        .then(function() {
            alert("Your message has been sent!\n\nThank you for reaching out. I will respond as promptly as possible upon reading your message. I look forward to working with you soon!");
        })
        .catch(function(error) {
            console.error('There was an error sending the email: ', error);
            alert("There was an error sending the email. Please try again later.");
        });
}


//Opening new tab when clicked
function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
  }
