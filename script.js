let apiQuotes = {}

async function getQuote() {
    try {
        let response = await fetch('./data.json');
        apiQuotes = await response.json()
        console.log('Success:', JSON.stringify(apiQuotes, undefined, 2))
    } catch (e) {
        console.log('Err in getQuote', e)
    }
}

getQuote()