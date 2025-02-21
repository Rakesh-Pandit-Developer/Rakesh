import emailjs from "@emailjs/browser"

export async function sendContactForm(data: {
  name: string
  email: string
  subject: string
  message: string
}) {
  // Send email using EmailJS
  const emailResult = await emailjs.send(
    "YOUR_SERVICE_ID",
    "YOUR_TEMPLATE_ID",
    {
      to_email: "rakeshpanditdeveloper@gmail.com",
      from_name: data.name,
      from_email: data.email,
      subject: data.subject,
      message: data.message,
    },
    "YOUR_PUBLIC_KEY",
  )

  // Send data to Google Apps Script
  const scriptURL = "YOUR_GOOGLE_APPS_SCRIPT_URL"
  await fetch(scriptURL, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })

  return emailResult
}

