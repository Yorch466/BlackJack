


let deck = [];
const tipos = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];

//CREA UNA NUEVA BARAJA
const crearDeck = () =>{

    for(let i=2; i<=10; i++){
        // deck.push(i  + 'C')
        for(let tipo of tipos){
            deck.push(i + tipo);
        }
    }

    for(let tipo of tipos){
        for(let especial of especiales){
            deck.push( especial + tipo)
        }
    }


    // console.log(deck)
    deck = _.shuffle(deck);
    console.log(deck);
    return deck;
}

crearDeck();

// PERMITE TOMAR UNA NUEVA CARTA

const pedirCarta = () => {
    
    if(deck ===0){
        throw 'No hay cartas en el deck';
    }

    let carta = deck.pop();

    console.log(deck);
    console.log(carta)
    return carta;
}


pedirCarta();