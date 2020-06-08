/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/***
 * This array contains objects that are filled with quotes
 * @type {Array}
 ***/
const quotes = [
    {
        quote: "You made me swallow my gum! That’s going to be in my digestive tract for seven years!",
        source: "Gideon Graves",
        citation: "Scott Pilgrim Vs. The World",
        year: 2010
    },
    {
        quote: "He punched the highlights out of her hair. HE PUNCHED THE HIGHLIGHTS OUT OF HER HAIR!",
        source: "Young Neil",
        citation: "Scott Pilgrim Vs. The World",
        year: 2010
    },
    {
        quote: "Chicken isn't vegan?",
        source: "Todd Ingram",
        citation: "Scott Pilgrim Vs. The World",
        year: 2010
    },
    {
        quote: "Bread makes you fat!?",
        source: "Scott Pilgrim",
        citation: "Scott Pilgrim Vs. The World",
        year: 2010
    }, {
        quote: "Amazon.ca! What's the website for that?",
        source: "Scott Pilgrim",
        citation: "Scott Pilgrim Vs. The World",
        year: 2010
    },
];
/***
 * Returns a random object within the quotes array
 * 
 * @return {object} The random object value from the quotes array
 ***/

function getRandomQuote() {
    // randomNumber creates a random number between 0 and the last index in the array
    let randomNumber = Math.floor(Math.random() * quotes.length);
    // randomQuoted grabs a random quote from the quotes array
    let randomQuote = quotes[randomNumber];
    return randomQuote;
}
/***
 * `printQuote` function will change the html document by inserting the
 * information from the getRandomQuote function.
 * 
 ***/
function printQuote() {
    // getQuote is the return value of the getRandomQuote function
    let getQuote = getRandomQuote();
    /* quoteText is the string of text we will be inserting into the index.html file to display our quotes */
    let quoteText = `<p class='quote'>${getQuote.quote}</p>`;
    quoteText += `<p class='source'>${getQuote.source}`;
    //*This if statements checks to see if there is a citation property in our object */
    if (getQuote.citation) {
        quoteText += `<span class='citation'>${getQuote.citation}</span>`;
    }
    //*This if statements checks to see if there is a year property in our object */
    if (getQuote.year) {
        quoteText += `<span class='year'>${getQuote.year}</span>`;
    }
    quoteText += `</p>`;
    // We are now assigning the inner HTML to our quoteText variable
    document.getElementById('quote-box').innerHTML = quoteText;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document.getElementById("load-quote").addEventListener("click", printQuote, false);