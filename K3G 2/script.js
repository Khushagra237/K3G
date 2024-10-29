function sendMail() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const mailtoLink = `mailto:k3gdistributors@gmail.com?subject=Contact from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
    
    window.location.href = mailtoLink;

    document.getElementById("formMessage").innerText = "Thank you, " + name + "! Your message has been prepared for sending.";
    document.getElementById("contactForm").reset();
}
