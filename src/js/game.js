class Game {
    constructor(deckSize) {
        this.deckSize = deckSize
        this.deck = new Deck(deckSize)

        this.setupListeners()

        new MessageHandler()
    }

    setupListeners(){
        document.getElementById('start').addEventListener('click', this.handleStart)
        document.getElementById('shuffle').addEventListener('click', this.shuffle)
        document.getElementById('finish').addEventListener('click', this.finish)
    }

    showMessage(message) {
        let evt = new CustomEvent('message', { detail: { message: message }})
        document.dispatchEvent(evt)

        setTimeout(() => {
            let evt = new CustomEvent('clear-message')
            document.dispatchEvent(evt)
        }, 5000);
    }

    // start = () => {
    //     console.log('parent start')
    // }

    handleStart =() => {
        this.showMessage('the game is a foot')
        this.start()
    }

    shuffle = () => {
        this.showMessage('shuffling ...')
        this.deck.shuffle()
        this.showMessage('the deck has been shuffled')

    }

    finish() {

    }


    addCardToBoard(card) {
        const deckEl = document.getElementById('deck')
        const cardEl = card.render()
        deckEl.appendChild(cardEl)

    }

    

    showAll() {
        // var deckEl = document.getElementById('deck')
        // deckEl.innerHTML = ''

        this.cards.forEach((card) => {
            this.addCardToBoard(card)
            // const cardEl = card.render()
            // deckEl.appendChild(cardEl)
        })
    }
}