let apiQuotes = {}

const quoteText = document.getElementById('quote-text')
const nextBtn = document.getElementById('next-btn')


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

// Event Listener 
nextBtn.addEventListener('click', getQuote)

// onLoad
getQuote()