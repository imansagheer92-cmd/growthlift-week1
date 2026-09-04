
const tabs = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

 
        tabs.forEach(tab => {
            tab.classList.remove("active");
        });

      
        tab.classList.add("active");


      
        contents.forEach(content => {
            content.classList.remove("active");
        });


       
        const selectedContent = document.getElementById(tab.dataset.tab);

        selectedContent.classList.add("active");

    });

});

const quoteText = document.getElementById("quote-text");
const newQuoteButton = document.getElementById("new-quote");

function getQuote() {

    quoteText.textContent = "Loading...";

    fetch("https://dummyjson.com/quotes/random")
        .then(response => response.json())
        .then(data => {
            quoteText.textContent = `"${data.quote}" — ${data.author}`;
        })
        .catch(error => {
            quoteText.textContent = "Could not load quote.";
            console.error(error);
        });
}

getQuote();

newQuoteButton.addEventListener("click", getQuote);