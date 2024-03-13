let apiQuotes = {}

const quoteText = document.getElementById('quote-text')

async function getQuote() {
    try {
        let response = await fetch('./data.json');
        apiQuotes = await response.json();
        let random = Math.floor(Math.random() * (28 - 1) + 1)
        console.log(apiQuotes[random])
        quoteText.textContent = apiQuotes[random]
    } catch (e) {
        console.log('Err in getQuote', e)
    }
}

// onLoad
getQuote()