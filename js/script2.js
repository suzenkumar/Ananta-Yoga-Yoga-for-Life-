
document.getElementById("adminLoginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const userId = document.getElementById("userId").value.trim();
  const centerCode = document.getElementById("centerCode").value.trim();
  const password = document.getElementById("password").value.trim();

  const validUserIds = ["anantayoga756001", "antayoga756001"];
  const validCenterCode = "756001";
  const validPassword = "admin@756001"; // Change as needed

  if (validUserIds.includes(userId) && centerCode === validCenterCode && password === validPassword) {
      alert("Login successful!");
      window.location.href = "https://docs.google.com/spreadsheets/d/1x5e5Lwsl-uev2DKUSNtaniRHK8G36drlWqoIiyPNv3Y/edit?usp=sharing"; // Change this to your actual dashboard
  } else {
      alert("Invalid credentials. Please try again.");
  }
});
      
     