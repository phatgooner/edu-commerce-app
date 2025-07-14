class MessageParser {
    constructor(actionProvider) {
        this.actionProvider = actionProvider;
    }

    parse(message) {
        if (message.trim().length > 0) {
            this.actionProvider.handleMessage(message);
        }
    }
}

export default MessageParser;