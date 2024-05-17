document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Display the message sent notification
  document.getElementById("notification").classList.remove("hidden");

  // Hide the notification after 3 seconds
  setTimeout(function() {
      document.getElementById("notification").classList.add("hidden");
  }, 3000);

  // Optionally, you can reset the form fields after submission
  document.getElementById("contact-form").reset();
});
