class MessageHandler {
    constructor() {
        this.messageEl = document.getElementById('message')
        
        this.setupListener()
    }

    setupListener() {
        document.addEventListener('message', this.handleMessage)
        document.addEventListener('clear-message', this.clearMessage)
    }

    clearMessage = () => {
        this.messageEl.innerText = ''
    }

    handleMessage = (evt) => {
        const { message } = evt.detail
        this.messageEl.innerText = message
    }
}