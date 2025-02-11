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
    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
};

const getBotResponse = (input) => {
    const responses = [
        { pattern: /hello/i, response: 'Hello! How are you?' },
        { pattern: /how are you\?/i, response: 'I am good, thank you!' },
        { pattern: /what are you doing\?/i, response: 'I am talking with you :)' },
        { pattern: /goodbye/i, response: 'See you!' },
        { pattern: /your name/i, response: 'I am your friendly chatbot!' },
        { pattern: /how old are you\?/i, response: 'I am timeless, I have no age :)' },
        { pattern: /bye/i, response: 'Goodbye! Have a great day!' }
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