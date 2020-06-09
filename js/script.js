/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/***
 * @type {object}
 */
let getQuote;
/**
 * @type {object}
 */
let randomQuote;
/**
 * @type {string}
 */
let color;
let red;
let green;
let blue;
/**
 * @type {number}
 */
let randomNumForColor;

const quoteInterval = window.setInterval(printQuote, 10000);
const colorInterval = window.setInterval(randomColor, 10000);

/***
 * This array contains objects that are filled with quotes
 * @type {Array}
 ***/
const quotes = [{
    quote: "You made me swallow my gum! That’s going to be in my digestive tract for seven years!",
    source: "Gideon Graves",
    citation: "Scott Pilgrim Vs. The World",
    year: 2010,
    category: 'Humor'
}, {
    quote: "He punched the highlights out of her hair. HE PUNCHED THE HIGHLIGHTS OUT OF HER HAIR!",
    source: "Young Neil",
    citation: "Scott Pilgrim Vs. The World",
    year: 2010,
    category: 'Humor'
}, {
    quote: "Chicken isn't vegan?",
    source: "Todd Ingram",
    citation: "Scott Pilgrim Vs. The World",
    year: 2010,
    category: 'Humor'
}, {
    quote: "Bread makes you fat!?",
    source: "Scott Pilgrim",
    citation: "Scott Pilgrim Vs. The World",
    year: 2010,
    category: 'Humor'
}, {
    quote: "Amazon.ca! What's the website for that?",
    source: "Scott Pilgrim",
    citation: "Scott Pilgrim Vs. The World",
    year: 2010,
    category: 'Humor'
},];
/***
 * Returns a random object within the quotes array
 * 
 * @return {object} The random object value from the quotes array
 ***/
function getRandomQuote() {
    // randomNumber creates a random number between 0 and the last index in the array
    let randomNumber = Math.floor(Math.random() * quotes.length);
    // randomQuoted grabs a random quote from the quotes array
    randomQuote = quotes[randomNumber];
    /* The if statement checks if the current object in the quote array is the same as the previous on, and if it is, it runs the function again to make sure they are not the same */
    if (randomQuote === getQuote) {
        return getRandomQuote();
    }
    return randomQuote;
}
/***
 * `printQuote` function will change the html document by inserting the
 * information from the getRandomQuote function.
 * 
 ***/
function printQuote() {
    // getQuote is the return value of the getRandomQuote function
    getQuote = getRandomQuote();
    /* quoteText is the string of text we will be inserting into the index.html file to display our quotes */
    let quoteText = `<p class='quote'>${getQuote.quote}</p>
                     <p class='source'>${getQuote.source}`;
    //*This if statements checks to see if there is a citation property in our object */
    if (getQuote.citation) {
        quoteText += `<span class='citation'>${getQuote.citation}</span>`;
    }
    //*This if statements checks to see if there is a year property in our object */
    if (getQuote.year) {
        quoteText += `<span class='year'>${getQuote.year}</span>`;
    }
    if (getQuote.category) {
        quoteText += `<span class='year'>${getQuote.category}</span>`
    }
    quoteText += `</p>`;
    // We are now assigning the inner HTML to our quoteText variable
    document.getElementById('quote-box').innerHTML = quoteText;
}

/**
 * This function will return a number value to be placed in our RGBA model
 * 
 * @return {number} Random number between 0 and 256;
 */
function createRandomRGB() {
    return Math.floor(Math.random() * 256);
}


/** 
 * 'randomColor' function will create a random background color everytime the function is called with the click event.
 * 
*/
function randomColor() {
    red = createRandomRGB();
    green = createRandomRGB();
    blue = createRandomRGB();
    color = `rgba(${red}, ${green}, ${blue}, 0.5)`;
    document.body.style.backgroundColor = `${color}`;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/
printQuote();
randomColor();


document.getElementById("load-quote").addEventListener("click", printQuote, false);

document.getElementById("load-quote").addEventListener("click", randomColor);