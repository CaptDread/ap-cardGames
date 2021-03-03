let flipCount = "0"
let firstVal = '0'
let secVal = '0'



class Card{
    suit = null //heart, spade, club, diamond 
    rank = null // "A", "1", "2", ... "j", "Q", "K"

    constructor(suit, rank){
        this.suit = suit
        this.rank = rank
    }

    render() {
        const cardEl = document.createElement('div')
        cardEl.classList.add('card')
        cardEl.classList.add('inactive')
        
        const suitEl = document.createElement('span')
        suitEl.classList.add(this.suit)
        suitEl.classList.add('suit')
        suitEl.innerHTML = this.suit
        
        const rankEl = document.createElement('span')
        rankEl.classList.add(this.rank)
        rankEl.innerHTML = this.rank
        rankEl.classList.add('rank')
        
        
        cardEl.appendChild(rankEl)
        cardEl.appendChild(suitEl)
        cardEl.addEventListener('click', function(){
            cardEl.classList.remove('inactive')
            cardEl.classList.add('active')
            rankEl.classList.add ('isVisible')
            if (flipCount === '0'){
                let firstVal = rankEl.innerHTML
                console.log("1stVal", firstVal)
                flipCount ++
            } else if (flipCount === 1){
                let flipped = document.querySelectorAll('.isVisible')
                let firstVal = flipped[0].innerHTML
                let secVal = flipped[1].innerHTML

                console.log("1stVal", firstVal)
                console.log("2ndVal", secVal)

                if (firstVal === secVal){
                    console.log("good match")
                    for (let m = 0; m < flipped.length; m++){
                        flipped[m].classList.remove('isVisible')
                    }
                    let matchedCards = document.querySelectorAll('.active')
                    for (let w = 0; w < wrongCards.length; w++) {
                        matchedCards[w].classList.remove('active')
                    }
                } else {
                    console.log('no match')
                    for (let m = 0; m < flipped.length; m++){
                        flipped[m].classList.remove('isVisible')
                    }
                    let wrongCards = document.querySelectorAll('.active')
                    for (let w = 0; w < wrongCards.length; w++) {
                        wrongCards[w].classList.add('inactive')
                        wrongCards[w].classList.remove('active')
                    }
                }
            }
        })

        return cardEl
    }
}