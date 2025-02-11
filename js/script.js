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
    const responses = {
        'hello': 'Hello! How are you?',
        'how are you?': 'I am good, thank you!',
        'what are you doing?': 'I am talking with you :)',
        'goodbye': 'See you!'
    };
    return responses[input.toLowerCase()] || 'I do not understand :(';
};

inputBox.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});

sendButton.addEventListener('click', sendMessage);