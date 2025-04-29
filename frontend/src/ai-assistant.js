import { markStep } from './guide.js';

const chatWindow = document.getElementById('chat-window');
const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');

const ASSISTANT_API_URL = 'http://localhost:4000/chat'; // Ensure this matches the assistant server port

// Store message history for context
let messageHistory = [];

/**
 * Adds a message to the chat window UI.
 * @param {string} role 'user' or 'assistant'.
 * @param {string} content The message text.
 */
const addMessageToUI = (role, content) => {
  if (!chatWindow) return;
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', role);
  messageElement.textContent = content;
  chatWindow.appendChild(messageElement);
  chatWindow.scrollTop = chatWindow.scrollHeight; // Scroll to bottom
};

/**
 * Sends the user's message to the AI assistant backend and displays the response.
 * @param {string} message The user's message.
 */
const sendChatMessage = async (message) => {
  addMessageToUI('user', message);
  messageHistory.push({ role: 'user', content: message });

  // Show typing indicator (optional)
  addMessageToUI('assistant', 'Pensando...');

  try {
    const response = await fetch(ASSISTANT_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ messages: messageHistory }), // Send history
    });

    // Remove typing indicator
    const typingIndicator = chatWindow.querySelector('.message.assistant:last-child');
    if (typingIndicator && typingIndicator.textContent === 'Pensando...') {
        chatWindow.removeChild(typingIndicator);
    }

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data.reply && data.reply.content) {
      addMessageToUI('assistant', data.reply.content);
      messageHistory.push({ role: 'assistant', content: data.reply.content });
      // Automatically mark step 18 after first successful interaction?
      // markStep(18);
    } else {
        addMessageToUI('assistant', 'No he podido obtener una respuesta.');
    }

  } catch (error) {
     // Remove typing indicator even on error
    const typingIndicator = chatWindow.querySelector('.message.assistant:last-child');
    if (typingIndicator && typingIndicator.textContent === 'Pensando...') {
        chatWindow.removeChild(typingIndicator);
    }
    console.error('Error sending chat message:', error);
    addMessageToUI('assistant', 'Error al conectar con el asistente. Revisa la consola.');
  }
};

// Event listener for the chat form submission
if (chatForm) {
  chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = chatInput.value.trim();
    if (message) {
      sendChatMessage(message);
      chatInput.value = ''; // Clear input field
    }
  });
}

// Initial message or setup can go here if needed
console.log('AI Assistant module loaded.');
// Example: Add a welcoming message
// addMessageToUI('assistant', 'Hola! Soy tu asistente. Pregúntame tus dudas sobre Axios o la API.'); 