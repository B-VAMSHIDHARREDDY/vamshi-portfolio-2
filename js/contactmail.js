document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    // Initialize EmailJS
    emailjs.init("bD4SA5qisdw-RarM5");

    const emailParams = {
      from_name: formData.get("name"),
      from_email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    emailjs
      .send("service_rujgpvf", "template_femthil", emailParams)
      .then(function (response) {
        if (response.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Email sent successfully!",
          });
          form.reset();
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Failed to send email. Please try again later.",
          });
        }
      })
      .catch(function (error) {
        console.error("Error sending email:", error);
      });
  });
