/* var nomeInput = document.getElementById('nome_cognome');
console.log(nomeInput.value);
 */
document.getElementById('genera').addEventListener('click', function(){
    var nomeInput = document.getElementById('nome_cognome');
    var kmInput = document.getElementById('km');
    var fascia_eta = document.getElementById('fascia_eta');

    /* console.log(nomeInput.value, kmInput.value, fascia_eta.value); */

    //output nome passeggero
    document.getElementById('nome_passeggero').innerHTML = nomeInput.value;

    //output offerta

    var offertaOutput = document.getElementById('offerta');

    if (fascia_eta.value == 'minorenne'){
        offertaOutput.innerHTML = 'Sconto Minorenne'
    } else if (fascia_eta.value == 'over65'){
        offertaOutput.innerHTML = 'Sconto Over 65'
    } else {
        offertaOutput.innerHTML = 'Nessuno Sconto'
    }

    //output carrozza
    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min)+ min);
    }

    document.getElementById('carrozza').innerHTML = randomNumber(1,21);

    //output codice CP

    document.getElementById('codice').innerHTML = randomNumber(90000,100000);
    
    //output prezzo

    var prezzo = kmInput.value * 0.21

    if (fascia_eta.value == 'minorenne'){
        prezzo = prezzo * 0.80;
    } else if (fascia_eta.value == 'over65'){
        prezzo = prezzo * 0.60;
    } else {
        prezzo = prezzo
    }

    var priceRounded = prezzo.toFixed(2);

    document.getElementById('costo').innerHTML = priceRounded + ' €';
})
