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
const quotes = [
  {
    quote: "It is never too late to be what you might have been.",
    source: "George Eliot",
    year: 1980,
    citation: "Twitter"
    
  },
  {
    quote: "Don't let someone else's opinion of you become your reality",
    source: "Vijay Das",
    year: 2019,
    citation: "Geetha Govindham: Episode -1 "
  
  },
  {
    quote: "You cannot plow a field by turning it over in your mind. To begin, begin.",
    source: "Peter Jim",
    year: 2007,
    citation: "The northern route"
  },
  {
      quote: "Small is not just a stepping-stone. Small is a great destination itself.",
      source: "Mac Simon",

      citation: "Times Magazine "
    
    },
    {
      quote: "Take your victories, whatever they may be, cherish them, use them, but don’t settle for them.",
      source: "Harshad Mehta",
      year: 2020,
      citation: "The Big Bull Season -1"
    
    },
    {
      quote: "Difficult and meaningful will always bring more satisfaction than easy and meaningless.",
      source: "Jass Ben",
      year: 2000,
      
    
    },
    {
      quote: "Life is what happens to us while we are making other plans.",
      source: "Allan Saus",
      year: 1970,
      
    
    },
    {
      quote: "Set your goals high, and don’t stop till you get there.",
      source: "Yash Gowda",
      year: 2018,
      citation: " KGF Chapter -1"
    
    },

    {
      quote: "Live out of your imagination, not your history",
      source: "Stephen Jack",
      year: 2018,
      
    
    },
    {
      quote: "The greater the difficulty, the more the glory in surmounting it.",
      source: "Geremy Bell",
      year: 2019,
      citation: " The national express"
    
    }
    

];




/***
 * `getRandomQuote` function
***/
function getRandomquote(){
  let randomquote = quotes[Math.floor(Math.random()*quotes.length)];
  console.log(randomquote);
  return randomquote;
}



/***
 * `printQuote` function
***/

function printQuote(){
  let randomQuote = getRandomquote();
  let result = `<p class = 'quote'>${randomQuote.quote}</p>
  <p class = "source">${randomQuote.source}`;
  if (randomQuote.year)
  {
    result+= ` <span class = "year">${randomQuote.year} `;
  } 
  if (randomQuote.citation)
  {
    result+=  `<span class = "citation">${randomQuote.citation}</span>`;
  } 

  document.querySelector('.quote-box').innerHTML = result;
}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);