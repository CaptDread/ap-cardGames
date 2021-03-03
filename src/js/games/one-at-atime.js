class OneAtATime extends Game {
    
    start () {
        // super.start()

        console.log("OAAT check")
        const [ nextCard ] = this.deck.deal(1)
        this.addCardToBoard(nextCard)
    }
}

new OneAtATime()