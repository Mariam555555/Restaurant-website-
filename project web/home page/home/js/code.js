function displayDateTime() {
    const dateTimeDiv = document.getElementById("dateTime");
    if (dateTimeDiv) { 
        const now = new Date();
        const formattedDate = now.toLocaleDateString();
        const formattedTime = now.toLocaleTimeString();
        dateTimeDiv.textContent = `Current Date: ${formattedDate} | Current Time: ${formattedTime}`; // Fixed backticks
    } else {
        console.warn('Element with id "dateTime" not found.');
    }
}

const quotes = [
    "Good food is the foundation of genuine happiness. – Auguste Escoffier",
    "People who love to eat are always the best people. – Julia Child",
    "One cannot think well, love well, sleep well, if one has not dined well. – Virginia Woolf",
    "Cooking is an art, but all art requires knowing something about the techniques and materials. – Nathan Myhrvold",
    "Laughter is brightest where food is best. – Irish Proverb",
    "Food is symbolic of love when words are inadequate. – Alan D. Wolfelt",
    "You don’t need a silver fork to eat good food. – Paul Prudhomme",
    "The secret ingredient is always love. – Unknown",
    "A recipe has no soul. You, as the cook, must bring soul to the recipe. – Thomas Keller",
    "Life is uncertain. Eat dessert first. – Ernestine Ulmer"
];

function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteElement = document.getElementById("quote");
    if (quoteElement) { 
        quoteElement.textContent = quotes[randomIndex];
    } 
}


setInterval(displayDateTime, 1000);