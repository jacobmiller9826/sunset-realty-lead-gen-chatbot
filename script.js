function sendMessage() {
  const input = document.getElementById('userInput');
  const log = document.getElementById('chatlog');
  const message = input.value.trim();
  if (!message) return;

  log.innerHTML += `<p><strong>You:</strong> ${message}</p>`;

  let reply = "Thanks for reaching out! May I get your name and what you're looking for in a property?";

  if (message.toLowerCase().includes("apartment") || message.toLowerCase().includes("home")) {
    reply = "Nice! What's your price range or preferred neighborhood?";
  }

  if (message.includes("@") || message.match(/\d{3}[-.\s]?\d{3}[-.\s]?\d{4}/)) {
    reply = "Perfect! One of our agents will be in touch shortly.";
  }

  log.innerHTML += `<p><strong>Bot:</strong> ${reply}</p>`;
  input.value = "";
  log.scrollTop = log.scrollHeight;
}
