document.addEventListener("DOMContentLoaded", () => {
let cardAPI = "http://deckofcardsapi.com/api/deck";

// async function getACard() {
//     try {
//         const response = await axios.get(`${cardAPI}/new/draw/`);
//         const {suit, value} = response.data.cards[0];
//         console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
//     } catch (error) {
//         console.error("Error fetching data for getACard:", error);
//     }
// }
// getACard();

// async function drawTwoCards() {
//     try {
//         const firstCard = await axios.get(`${cardAPI}/new/draw/`);
//         const deckID = firstCard.data.deck_id;
//         const secondCard = await axios.get(`${cardAPI}/${deckID}/draw/`);
//         [firstCard.data, secondCard.data].forEach(cardData => {
//             const {suit, value} = cardData.cards[0];
//             console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
//         });
//     } catch (error) {
//         console.error("Error fetching data for drawTwoCards:", error);
//     }
// }

// drawTwoCards();


    async function setup() {
        try {
            const thing = document.querySelector("button");
            const cardArea = document.querySelector("#card-area");

            const deckRes = await axios.get(`${cardAPI}/new/shuffle/`);
            const deckID = deckRes.data.deck_id;

            thing.style.display = "block";
            thing.addEventListener("click", async () => {
                try {
                    const cardRes = await axios.get(`${cardAPI}/${deckID}/draw/`);
                    const card = cardRes.data.cards[0];
                    const cardImg = document.createElement("img");
                    const angle = Math.random() * 180 - 90;
                    const randomX = Math.random() * 40 - 20;
                    const randomY = Math.random() * 40 - 20;

                    cardImg.src = card.image;
                    cardImg.style.transform = `rotate(${angle}deg)`;
                    cardArea.appendChild(cardImg);                
                    
                    if (cardRes.data.remaining === 0) thing.remove();
                } catch (error) {
                    console.error("Error Drawing card:", error);
                }
            });
        } catch (error) {
            console.error("Error setting up game:", error);
        }
    }

    setup();
    
});