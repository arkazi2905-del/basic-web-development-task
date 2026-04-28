function scrollToContact() {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth"
  });
}

document.getElementById("sendBtn").addEventListener("click", function () {
  alert("Message sent successfully!");
});

