/* Chiedere all'utente il n° di kilometri da percorrere e l'età, poi calcolare il prezzo del
biglietto in base a questi dati */

function formData() {

    // Estrarre i dati dell'utente dal form
    let user_name = document.getElementById("userFullName").value;
    let user_km = document.getElementById("userKm").value;
    let age_range = document.getElementById("userAge").value;

    console.log(`Nome utente: ${user_name}`);
    console.log(`Kilometraggio: ${user_km}`);
    console.log(`Età: ${age_range}`);

    // Calcolare il prezzo in base al kilometraggio
    const price_km = 0.21 * `${user_km}`;
    console.log(`Prezzo per tratta: ${price_km}`);

    // Calcolare il prezzo finale applicando gli sconti per l'età
    let final_price = price_km;

    if (age_range == "Minorenne") {

        // sconto per minorenni
        final_price = final_price * 0.8;

    } else if (age_range == "Over 65") {

        // sconto per over 65
        final_price = final_price * 0.6;

    }

    console.log(`Prezzo scontato: ${final_price}`);

    // Arrotondare a 2 cifre decimali il prezzo finale
    let rounded_final_price = final_price.toFixed(2);
    console.log(`Prezzo scontato arrotondato: ${rounded_final_price}`);

    // Stampare a schermo il nome dell'utente
    document.getElementById("nameShowed").innerHTML = user_name;

    // Stampare a schermo il tipo di sconto applicato
    document.getElementById("discountShowed").innerHTML = `Offerta ${age_range}`;

    // Stampare a schermo il numero della carrozza
    document.getElementById("TrainCar").innerHTML = Math.ceil(1 + Math.random() * 10);

    // Stampare a schermo il codice CP
    document.getElementById("CPCode").innerHTML = Math.ceil(Math.random() * 10000);

    // Stampare a schermo il prezzo del biglietto
    document.getElementById("ticketPrice").innerHTML = `${rounded_final_price} €`;
};