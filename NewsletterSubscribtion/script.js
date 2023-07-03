document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  let email = document.getElementById("email").value; // Get the value of the email input

  localStorage.setItem("email", email);

 
  window.location.href = "success.html";
});
