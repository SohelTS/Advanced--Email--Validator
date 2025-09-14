let input = document.getElementById("inputBox");
let checkBtn = document.getElementById("checkBtn");
let advancedCheck = document.getElementById("advancedCheck");

let domainMessage = document.getElementById("domainMessage");
let smtpMessage = document.getElementById("smtpMessage");

checkBtn.addEventListener("click", validate);

async function validate() {
  let email = input.value.trim();
  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;

  // Reset messages
  domainMessage.textContent = "";
  smtpMessage.textContent = "";

  if (!pattern.test(email)) {
    setMessage(domainMessage, "❌ Invalid email format", "invalid");
    return;
  }

  if (!advancedCheck.checked) {
    setMessage(domainMessage, "✅ Email format looks valid", "valid");
    return;
  }

  try {
  
    let resMx = await fetch("/api/validate-mx", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    let mxData = await resMx.json();

    if (!mxData.ok) {
      setMessage(domainMessage, `❌ Domain ${mxData.domain || ""} is not valid (no MX found)`, "invalid");
      return;
    }
    setMessage(domainMessage, `✅ Domain ${mxData.domain} is valid (MX records found)`, "valid");

    //Mailbox (SMTP) Check
    let resSmtp = await fetch("/api/validate-smtp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    let smtpData = await resSmtp.json();

    if (smtpData.ok) {
      setMessage(smtpMessage, `✅ Mailbox exists at ${email}`, "valid");
    } else {
      setMessage(smtpMessage, `❌ Mailbox does not exist at ${email}`, "invalid");
    }
  } catch (err) {
    setMessage(smtpMessage, "⚠️ Server error. Try again later.", "invalid");
  }
}

function setMessage(el, text, type) {
  el.textContent = text;
  el.className = type + " show";
}
