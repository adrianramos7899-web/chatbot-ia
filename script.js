// Chatbot logic

class Chatbot {
    constructor() {
        this.responses = {
            'hello': 'Hi there! How can I help you today?',
            'bye': 'Goodbye! Have a great day!',
            'thanks': 'You are welcome!',
        };
    }

    getResponse(message) {
        return this.responses[message.toLowerCase()] || 'Sorry, I do not understand that.';
    }
}

// Example usage:
const bot = new Chatbot();
console.log(bot.getResponse('hello'));