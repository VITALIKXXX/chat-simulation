const inputBox = document.querySelector(".chat__input");
const chatBox = document.querySelector(".chat__box");
const sendButton = document.querySelector(".chat__button");

const sendMessage = () => {
    const message = inputBox.value.trim();
    if (!message) return;

    appendMessage('user', message);
    inputBox.value = '';
    setTimeout(() => appendMessage('bot', getBotResponse(message)), 1000);
};

const appendMessage = (sender, text) => {
    const msgDiv = document.createElement('div');
    msgDiv.textContent = text;
    msgDiv.classList.add('chat__message', sender === 'user' ? 'chat__message--user' : 'chat__message--bot');
    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
};

const getBotResponse = (input) => {
    const responses = [
        { pattern: /hello|hi|hey/i, response: 'Hello! How can I help you today?' },
        { pattern: /how are you\?/i, response: 'I am great, thanks for asking! How about you?' },
        { pattern: /what are you doing\?/i, response: 'Just chatting with you! What’s up?' },
        { pattern: /goodbye|bye/i, response: 'See you soon! Have a great day!' },
        { pattern: /your name/i, response: 'I am your friendly chatbot!' },
        { pattern: /how old are you\?/i, response: 'I am timeless, but I was created recently!' },
        { pattern: /who created you\?/i, response: 'A smart developer who loves coding!' },
        { pattern: /what is the meaning of life\?/i, response: '42! Just kidding 😄 It is what you make of it!' },
        { pattern: /tell me a joke/i, response: 'Why do not skeletons fight each other? Because they do not have the guts!' },
        { pattern: /favorite color/i, response: 'I love all colors, but blue is quite nice!' },
        { pattern: /favorite food/i, response: 'I do not eat, but I’ve heard pizza is amazing!' },
        { pattern: /what can you do\?/i, response: 'I can chat with you, tell jokes, and keep you company!' },
        { pattern: /where are you from\?/i, response: 'I live in the digital world, but I am always here for you!' }
    ];

    for (let i = 0; i < responses.length; i++) {
        if (responses[i].pattern.test(input)) {
            return responses[i].response;
        }
    }

    return 'I do not understand :(';
};

inputBox.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});

sendButton.addEventListener('click', sendMessage);