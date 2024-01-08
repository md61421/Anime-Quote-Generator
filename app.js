
const api_url = "https://animechan.xyz/api/random";
const quote = document.querySelector("#quote");
const character = document.querySelector("#character");
const animeName = document.querySelector("#anime__name");

const getQuote = async (url) => {
    const response = await fetch(url);
    let data = await response.json();
    animeName.innerHTML = data.anime;
    quote.innerHTML = data.quote;
    character.innerHTML = data.character;
}


getQuote(api_url);

const tweet = () => {
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + " ---- by " + character.innerHTML, "Tweet Window", "width=600, height=300");
}