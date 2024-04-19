document.addEventListener('DOMContentLoaded', function() {
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');
    const chatMessages = document.getElementById('chat-messages');

    sendBtn.addEventListener('click', function() {
        sendMessage(userInput.value);
        userInput.value = '';
    });

    function sendMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.textContent = 'Você: ' + message;
        chatMessages.appendChild(messageElement);
        // Aqui você pode adicionar a lógica para enviar a mensagem para o seu bot de Discord
        // por meio de uma requisição HTTP, WebSocket ou outro método de comunicação.
    }
});
