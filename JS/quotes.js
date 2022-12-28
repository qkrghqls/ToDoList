const quotes = [
    {
        quotes: "Don't dwell on the past",
    },
    {
        quotes: "Believe in yourself",
    },
    {
        quotes: "Where there is a will there is a way",
    },
    {
        quotes: "A friend is a second myself",
    },
    {
        quotes: "He can do, she can do, why not me?",
    },
    {
        quotes: "If not now, then when?",
    },
    {
        quotes: "Habit is a second natuer",
    },
    {
        quotes: "Time is gold",
    },
    {
        quotes: "It is not length of life, But depth of life"
    },
    {
        quotes: "Life is unfair, get used to it",
    },
    {
        quotes: "Don’t waste your youth",
    },
    {
        quotes: "Life is all about timing",
    }
];

const quote = document.querySelector("#quote span:first-child");

const rdmQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = rdmQuote.quotes;