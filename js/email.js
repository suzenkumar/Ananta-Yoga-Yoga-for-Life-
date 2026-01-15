(function () {
    emailjs.init("856c8683-6433-422c-a1a0-d5947a729160"); // 🔁 Replace with your EmailJS public key
  })();

  function sendResetInfo() {
    const validUserIds = ["anantayoga756001", "antayoga756001"];
    const validCenterCode = "756001";
    const validPassword = "admin@756001";

    const resetData = {
      name: "Ananta Yoga Admin",
      time: new Date().toLocaleString(),
      message: `🔐 Admin Reset Request\n\n👤 User IDs: ${validUserIds.join(", ")}\n🏢 Center Code: ${validCenterCode}\n🔑 Password: ${validPassword}`
    };

    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", resetData)
      .then(function (response) {
        alert("✅ Reset information sent to anantayogaforall@gmail.com.");
      }, function (error) {
        console.error("EmailJS Error:", error);
        alert("❌ Failed to send reset information. Please try again.");
      });
  }