
const botonCrear = document.getElementById('button');
const input = document.getElementById('inputCantidad');

botonCrear.onclick = () => {
    let numCards = input.value;
    let cartas = createCards(numCards);

    if (numCards === '') {
        window.alert("Digite un numero mayor a 0");
        return;
    }

    console.log(numCards);
    

    var numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    var shape = ["Diamonds", "Spades", "Hearts", "Clubs"];
    var randomCardNumber = null;
    var randomShapeNumber = null;
    var choseShape = null;

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
    });

}

// window.onload = () => {
//     var numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
//     var shape = ["Diamonds", "Spades", "Hearts", "Clubs"];
//     var randomCardNumber = null; //Math.floor(Math.random() * numbers.length);
//     var randomShapeNumber = null; // Math.floor(Math.random() * shape.length);
//     var choseShape = null; //shape[randomShapeNumber];


//     //Obtiene el div para agregar el content al card
//     // document.getElementById('cardContent').innerHTML = numbers[randomCardNumber];
//     // document.getElementById('theCard').className = "";
//     // document.getElementById('theCard').classList.add("card");
//     // document.getElementById('theCard').classList.add(getShape(choseShape));

//     //Crea cartas
//     //document.getElementById('wrapper').innerHTML += createCard();
//     let cartas = createCards(10);
//     cartas.map((carta, i) => {
//         document.getElementById('wrapper').innerHTML += carta;
//     });

//     cartas.map((c, i) => {
//         randomCardNumber = Math.floor(Math.random() * numbers.length);
//         randomShapeNumber = Math.floor(Math.random() * shape.length);
//         choseShape = shape[randomShapeNumber];
//         document.getElementById(`cardContent-${i}`).innerHTML = numbers[randomCardNumber];
//         document.getElementById(`theCard-${i}`).className = "";
//         document.getElementById(`theCard-${i}`).classList.add("card");
//         document.getElementById(`theCard-${i}`).classList.add(getShape(choseShape));
//     })



//     // document.getElementById('cardContent-0').innerHTML = numbers[randomCardNumber];
//     // document.getElementById('theCard-0').className = "";
//     // document.getElementById('theCard-0').classList.add("card");
//     // document.getElementById('theCard-0').classList.add(getShape(choseShape));

// }

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