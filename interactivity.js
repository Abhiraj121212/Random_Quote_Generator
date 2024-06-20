let btn=document.querySelector("#new-quote");
let quote=document.querySelector(".quote");
let person=document.querySelector(".person");
  
const quotes=[{
    "quote": "The only limit to our realization of tomorrow is our doubts of today.",
    "person": "Franklin D. Roosevelt"
  },
  {
    "quote": "In the middle of difficulty lies opportunity.",
    "person": "Albert Einstein"
  },
  {
    "quote": "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    "person": "Ralph Waldo Emerson"
  },
  {
    "quote": "Do not wait to strike till the iron is hot; but make it hot by striking.",
    "person": "William Butler Yeats"
  },
  {
    "quote": "The future belongs to those who believe in the beauty of their dreams.",
    "person": "Eleanor Roosevelt"
  },
  {
    "quote": "The best way to predict the future is to create it.",
    "person": "Peter Drucker"
  },
  {
    "quote": "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "person": "Winston Churchill"
  },
  {
    "quote": "It does not matter how slowly you go as long as you do not stop.",
    "person": "Confucius"
  },
  {
    "quote": "The only way to do great work is to love what you do.",
    "person": "Steve Jobs"
  },
  {
    "quote": "Act as if what you do makes a difference. It does.",
    "person": "William James"
  },
  {
    "quote": "You miss 100% of the shots you don't take.",
    "person": "Wayne Gretzky"
  },
  {
    "quote": "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    "person": "Ralph Waldo Emerson"
  },
  {
    "quote": "Do not follow where the path may lead. Go instead where there is no path and leave a trail.",
    "person": "Ralph Waldo Emerson"
  },
  {
    "quote": "Whether you think you can or you think you can't, you're right.",
    "person": "Henry Ford"
  },
  {
    "quote": "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "person": "Nelson Mandela"
  }];

  btn.addEventListener("click",function(){
    let random=Math.floor(Math.random()*quotes.length);
    quote.innerText=quotes[random].quote;
    person.innerText=quotes[random].person;
  })