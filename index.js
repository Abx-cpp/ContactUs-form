    const form = document.getElementById('contactForm');

    
    
    
form.addEventListener('submit' , (e) => {
    
    e.preventDefault()
    const email = document.getElementById('email').value;
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; // this is regex for email

    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return;
    }


    document.getElementById('successMessage').textContent = "Your message has been sent successfully!";
    this.reset();
})