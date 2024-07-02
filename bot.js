var defaultMessages = [
    {text:"Hello! ", response:"How can I help you today?"},
    { text: "Please provide your order number", response: "Sure, please provide your order number so I can assist you." },
    { text: "Need help with shipping", response: "I can help you with shipping queries. Please provide more details." },
    { text: "Product information", response: "Sure, which product are you interested in? I'll provide you with the information." }
];

// Display default messages on page load
document.addEventListener("DOMContentLoaded", function() {
    var chatBox = document.getElementById("chat-box");

    defaultMessages.forEach(function(message) {
        var messageElement = document.createElement("div");
        messageElement.classList.add("default-message");
        messageElement.textContent = message.text;
        messageElement.addEventListener("click", function() {
            var botMessageElement = document.createElement("div");
            botMessageElement.classList.add("chat-message");
            botMessageElement.innerHTML = "<p>" + message.response + "</p>";
            chatBox.appendChild(botMessageElement);

            // Scroll to the bottom of the chat box
            chatBox.scrollTop = chatBox.scrollHeight;
        });
        chatBox.appendChild(messageElement);
    });

    // Scroll to the bottom of the chat box
    chatBox.scrollTop = chatBox.scrollHeight;
});
setTimeout(function() 
{
        var botResponse = generateResponse(userInput);

        // Remove typing visual effect
        chatMessages.removeChild(typingElement);

        // Append bot message to chat box
        var botMessageElement = document.createElement("div");
        botMessageElement.classList.add("message-container", "received");
        botMessageElement.innerHTML = "<p>" + botResponse + "</p>";
        chatMessages.appendChild(botMessageElement);

        // Scroll to the bottom of the chat container
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 2000); // Simulate delay for bot response

function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    var chatBox = document.getElementById("chat-box");

    // Append user message to chat box
    var userMessageElement = document.createElement("div");
    userMessageElement.classList.add("user-message");
    userMessageElement.innerHTML = "<p>" + userInput + "</p>";
    chatBox.appendChild(userMessageElement);

    // Clear the input field
    document.getElementById("user-input").value = "";

    // Generate response (replace with your logic)
    var botResponse = generateResponse(userInput);

    // Append bot message to chat box
    var botMessageElement = document.createElement("div");
    botMessageElement.classList.add("chat-message");
    botMessageElement.innerHTML = "<p>" + botResponse + "</p>";
    chatBox.appendChild(botMessageElement);

    // Scroll to the bottom of the chat box
    chatBox.scrollTop = chatBox.scrollHeight;
}




function generateResponse(userInput) {
    // Replace with actual logic to generate responses based on user input
    // Example:
    if (userInput.toLowerCase().includes("hey")) {
        return "Hi there! How can I help you?";
    } else if (userInput.toLowerCase().includes("order")) {
        return "Please provide your order number so I can assist you.";
    } else {
        return "Please confirm the order details given below: 1.Order Id 2.Email Id 3.Contact Number "
        
    }
}