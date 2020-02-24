/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/


// The quotes array which will hold all the quotes that will be printed to the screen
let html;
let quotes = [

  /** 
    Each object has a property:value pair which represents a quote, its source, who said the quote
    and the year it was said (if known)
   **/ 

  {
      quote: "You forget a thousand things everyday, how about you make sure this is one of them",
      source: "Grand Theft Auto V",
      citation: "Michael De Santa",
      year: "2013"
  },
  {
      quote: "Be yourself, everyone else is already taken",
      source: "Oscar Wilde",
      citation: "",
      year: ""
  },
  
  {
      quote: "Avengers....Assemble",
      source: "Steve Rogers",
      citation: "Avengers Endgame",
      year: "2019"
  },
  
  {
      quote: "May The Force Be With you",
      source: "Obi Wan Kenobi",
      citation: "Star Wars",
      year: "1977"
  },
  
  {
      quote: "I'll be back",
      source: "T-800",
      citation: "Terminator",
      year: "1984"
  },
  
  {
      quote: "There's no crying in baseball",
      source: "Jimmy Duggan",
      citation: "A League of Their Own",
      year: "1992"
  },
  
  {
      quote: "Shaken, not stirred",
      source: "James Bond",
      citation: "Goldfinger",
      year: "1964"
  },
  
  {
      quote: "You is kind, you is smart. You is important",
      source: "Aibileen Clark",
      citation: "The Help",
      year: "2011"
  },
  
  {
      quote: "Snap out of it",
      source: "Cher",
      citation: "Moonstruck",
      year: "1987"
  },
  
  {
      quote: "Optimisim is the hope that leads to achievement",
      source: "Hellen Keller",
      citation: "",
      year: ""
  }
  
  
  ]



/***
 * `getRandomQuote` function
***/

// The getRandomQuote function which will be used to generate a random quote from the array

function getRandomQuote(){

  // 1. Start by using the Math.random() method to multiply by the length of the array
  // 2. To make sure that the number chosen by the is an integer and is rounded down, Math.floor() is used
  let generatedQuote = Math.floor(Math.random() * quotes.length)

  // The generatedQuote variable is then used to access the index of the quotes array via bracket notation
  let newRandomQuote = quotes[generatedQuote]

 return newRandomQuote
  
}




/***
 * `printQuote` function
***/

function printQuote(){

// 1. Create a variable that will access the getRandomQuote function
let randomQuote = getRandomQuote();


// 2. Create a variable that will equal two <p></p> elements
// p1 variable will store the quotes from the randomQuote object
let p1 ="<p class = 'quote'>"  + randomQuote.quote + "</p>"; 

// p2 variable will store the source from the randomQuote object
let p2 ="<p class = 'source'>" + randomQuote.source;


// If the citation property exists, a <span> will be appended to the the source to 
// show the quotes citation
if(randomQuote.citation){
    p2+= "<span class = 'citation'>" + '' + randomQuote.citation +  '' +  "</span>"
}

// If the year property exists, a <span> will be appended to the the source to 
// show the year the quote was made
if(randomQuote.year){

  p2+= "<span class = 'year'>" + '' + randomQuote.year +  '' +  "</span>"
}

// The p1 and p2 variables are then appended to the html variable, with the closing <p> tag
html = p1 + p2 + "</p>"


// The html variable is then added to the DOM 
document.getElementById('quote-box').innerHTML = html

}





/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);