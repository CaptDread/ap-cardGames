class Matching extends Game {
    
    start () {
        // super.start()

        for(let d = 0; d < 12; d++) {
            const [ nextCard ] = this.deck.deal(1)
            this.addCardToBoard(nextCard)
        }
    }
}

new Matching()