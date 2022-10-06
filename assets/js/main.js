// Il programma dovrà chiedere all'utente:
//  il numero di chilometri che vuole percorrere
// e l'età del passeggero.

const userKm = Number(prompt('How many km do you want to travel?'));
console.log(userKm + 'Km');

const userAge = Number(prompt('What\'s your age?'));
console.log(userAge);

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)

const priceTicket = (userKm * 0.21);
console.log(priceTicket + 'euro');

// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.

const salesMinors = (priceTicket / 100) * 20;
console.log(salesMinors);

const salesOver = (priceTicket / 100) * 65;
console.log(salesOver);

if (userAge < 18) {
      const priceTicketMinors = priceTicket - salesMinors;
      console.log(priceTicketMinors);
} else if (userAge > 65) {
      const priceTicketOver = priceTicket - salesOver;
      console.log(priceTicketOver);
}

// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
// Questo richiederà un minimo di ricerca, oltre alla ricerca da fare per ricordarsi come calcolare uno sconto (Googlate qulcosa del tipo: come si calcola lo sconto? e cercate una risorsa che vi possa aiutare a capire cosa fare)