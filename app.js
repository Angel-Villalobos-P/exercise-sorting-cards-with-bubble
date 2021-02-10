
const botonCrear = document.getElementById('button');
const botonBubble = document.getElementById('buttonBubble');
const botonClear = document.getElementById('clear');
const input = document.getElementById('inputCantidad');
let numCards = 0;
let cartas = [];
let cardsToSort = [];

var numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
var shape = ["Diamonds", "Spades", "Hearts", "Clubs"];
var randomCardNumber = null;
var randomShapeNumber = null;
var choseShape = null;

/*
Funciona de la siguiente manera:
Crea las cardas random, luego crea un array de obtjetos con los datos de cada card (number y shape),
seguidamente aplica el bubble sort a ese array, usando la propiedad number para las comparaciones.
Finalmente, reemplaza el <div id=wrapp> con otro que contiene las cartas ordenadas.
*/
botonBubble.onclick = () => {
    let wall = cardsToSort.length - 1; //iniciamos el wall o muro al final del array
    while (wall > 0) {
        let index = 0;
        while (index < wall) {
            //comparar las posiciones adyacentes, si la correcta es más grande, tenemos que intercambiar
            if (toNumber(cardsToSort[index].number) > toNumber(cardsToSort[index + 1].number)) {
                let aux = cardsToSort[index];
                cardsToSort[index] = cardsToSort[index + 1];
                cardsToSort[index + 1] = aux;
            }
            index++;
        }
        wall--; //disminuir la pared para optimizar
    }

    //Crea las cartas
    let cardsToShow = createCards(cardsToSort.length);

    //Agrega las cartas
    document.getElementById('wrapper').innerHTML = "";
    cardsToShow.map((carta, i) => {
        document.getElementById('wrapper').innerHTML += carta;
    });

    //Agrega el style a las cartas
    cardsToSort.map((card, i) => {
        //choseShape = card.shape;
        document.getElementById(`cardContent-${i}`).innerHTML = card.number;
        document.getElementById(`theCard-${i}`).className = "";
        document.getElementById(`theCard-${i}`).classList.add("card");
        document.getElementById(`theCard-${i}`).classList.add(card.shape);
    });

}

botonCrear.onclick = () => {
    numCards = input.value;
    cartas = createCards(numCards);

    if (numCards === '') {
        window.alert("Digite un numero mayor a 0");
        return;
    }

    cartas.map((carta, i) => {
        document.getElementById('wrapper').innerHTML += carta;
    });

    cartas.map((c, i) => {
        randomCardNumber = Math.floor(Math.random() * numbers.length);
        randomShapeNumber = Math.floor(Math.random() * shape.length);
        choseShape = shape[randomShapeNumber];
        document.getElementById(`cardContent-${i}`).innerHTML = numbers[randomCardNumber];
        document.getElementById(`theCard-${i}`).className = "";
        document.getElementById(`theCard-${i}`).classList.add("card");
        document.getElementById(`theCard-${i}`).classList.add(getShape(choseShape));

        let oCard = {
            number: numbers[randomCardNumber],
            shape: getShape(choseShape)
        }
        cardsToSort.push(oCard);
    });


}

//Convierte las letras a numeros (J:11, Q:12, K:13...)
toNumber = (letra) => {
    switch (letra) {
        case "J": return 11; break;
        case "Q": return 12; break;
        case "K": return 13; break;
        case "A": return 1; break;
        default: return parseInt(letra); //si llega aca es porque no es ninguna letra y lo retorna como numero
    }
}

//Retorna la clase que se usará para el numero y shape elegido aleatoriamente
getShape = (shape) => {
    switch (shape) {
        case "Diamonds": return "shape-diamonds"; break;
        case "Spades": return "shape-spades"; break;
        case "Hearts": return "shape-hearts"; break;
        case "Clubs": return "shape-clubs"; break;
    }
}

//Crea n cantidad de cartas
createCards = (cantidad) => {

    const cards = [];

    for (let i = 0; i < cantidad; i++) {
        const card = `<div id="theCard-${i}" class="card">` +
            `<p id="cardContent-${i}" ></p>` +
            `</div>`;
        cards.push(card);

    }
    return cards;
}