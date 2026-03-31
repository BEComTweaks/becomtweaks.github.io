const fakeAssistantResponses = [
  "I don't know.",
  'That request violates our Terms of Service. Click <u><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">here</a></u> for more information.',
];
let fakeAssistantReplyCount = 0;

function getFakeAssistantReply() {
  fakeAssistantReplyCount += 1;
  if (fakeAssistantReplyCount <= 2) {
    return fakeAssistantResponses[0];
  }
  const randomIndex = Math.floor(Math.random() * fakeAssistantResponses.length);
  return fakeAssistantResponses[randomIndex];
}

function appendFakeAssistantMessage(text, sender) {
  const messageContainer = document.getElementById("fakeAssistantMessages");
  if (!messageContainer) {
    return;
  }
  const messageElement = document.createElement("div");
  messageElement.className = `fake-assistant-message ${sender}`;
  messageElement.innerHTML = text;
  messageContainer.appendChild(messageElement);
  messageContainer.scrollTop = messageContainer.scrollHeight;
}

function openFakeAssistantPanel() {
  const panel = document.getElementById("fakeAssistantPanel");
  const toggleButton = document.querySelector(".fake-assistant-toggle");
  if (!panel || !toggleButton) {
    return;
  }
  panel.classList.add("open");
  panel.setAttribute("aria-hidden", "false");
  toggleButton.setAttribute("aria-expanded", "true");
  const input = document.getElementById("fakeAssistantInput");
  if (input) {
    input.focus();
  }
}

function closeFakeAssistantPanel() {
  const panel = document.getElementById("fakeAssistantPanel");
  const toggleButton = document.querySelector(".fake-assistant-toggle");
  if (!panel || !toggleButton) {
    return;
  }
  panel.classList.remove("open");
  panel.setAttribute("aria-hidden", "true");
  toggleButton.setAttribute("aria-expanded", "false");
}

function toggleFakeAssistantPanel() {
  const panel = document.getElementById("fakeAssistantPanel");
  if (!panel) {
    return;
  }
  if (panel.classList.contains("open")) {
    closeFakeAssistantPanel();
  } else {
    openFakeAssistantPanel();
  }
}

function sendFakeAssistantMessage() {
  const input = document.getElementById("fakeAssistantInput");
  if (!input) {
    return;
  }
  const userMessage = input.value.trim();
  if (userMessage.length === 0) {
    return;
  }
  appendFakeAssistantMessage(userMessage, "user");
  if (!document.querySelector(".fake-assistant-send").disabled) {
    document.querySelector(".fake-assistant-send").disabled = true;
  }
  input.value = "";
  window.setTimeout(
    () => {
      appendFakeAssistantMessage(getFakeAssistantReply(), "bot");
      document.querySelector(".fake-assistant-send").disabled = false;
    },
    Math.floor(Math.random() * 1000) + 500,
  );
}

const fakeAssistantInput = document.getElementById("fakeAssistantInput");
if (fakeAssistantInput) {
  fakeAssistantInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      sendFakeAssistantMessage();
    }
  });
}

document.addEventListener("keydown", function (event) {
  if (event.key !== "Escape") {
    return;
  }
  const panel = document.getElementById("fakeAssistantPanel");
  if (!panel || !panel.classList.contains("open")) {
    return;
  }
  closeFakeAssistantPanel();
});
