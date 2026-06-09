document.addEventListener("DOMContentLoaded", () => {

  const footerLinks = document.querySelectorAll("footer a");

  footerLinks.forEach(link => {
    link.addEventListener("click", () => {
      console.log(`Opening: ${link.href}`);
    });
  });

});