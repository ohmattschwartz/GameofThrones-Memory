const cardFaces = [
  'arya.png', 'bran.png', 'cersei.png', 'hound.png', 'jamie.png', 'joffrey.png', 'jonsnow.png', 'khaleesi.png', 'robb.png', 'sansa.png', 'stoneheart.png', 'tyrion.png'
]

let numArray = []
let turnCards = []
let matchedCards = []

const setNumArray = () => {
  for (var i = 0; i < cardFaces.length; i++) {
    numArray.push(i)
  } return numArray
}

const getImageNum = () => {
  let index = Math.floor(Math.random() * numArray.length)
  let num = numArray.splice(index,1)[0]
  return num
}

function handleImgClick (j,cardFace,cardBack,init){
  if (turnCards.length < 2) {
    console.log(this,this.style.backgroundImage,cardFace)
    this.style.backgroundImage = cardFace
    turnCards.push(this)
    console.log(turnCards)
  }
  if (turnCards.length === 2) {
    if (turnCards[0].style.backgroundImage === turnCards[1].style.backgroundImage) {
      matchedCards.push(turnCards.pop())
      matchedCards.push(turnCards.pop())
    }
    else {
      setTimeout(()=> {
        turnCards[0].style.backgroundImage = cardBack
        turnCards[1].style.backgroundImage = cardBack
        turnCards = []
      },1000)
    }
  }
}

const init = () => {
  for (var i = 0; i < 2; i++) {
    setNumArray()
    for (var j = 0; j < cardFaces.length; j++) {
      let num = getImageNum()
      const cardBack = "url('./images/gameofthrones.jpg')"
      const cardFace = `url('./images/${cardFaces[num]}')`
      const images = document.querySelector('.images')
      const div = document.createElement('div')
      div.className = `img ${cardFaces[num]}`
      div.style.backgroundImage = cardBack
      div.addEventListener('click', function (){
        handleImgClick.call(this,j,cardFace,cardBack,init)
      })
      images.appendChild(div)
    }
  }
 }

document.addEventListener('DOMContentLoaded', init)
