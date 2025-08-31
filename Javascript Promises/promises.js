let numbersAPI = "http://numbersapi.com";
let number = 7;

async function getNumberFact() {
  try {
    let response = await axios.get(`${numbersAPI}/${number}?json`);
    console.log(response.data);
  } catch (error) {
    console.error("Error fetching data for getNumberFact:", error);
  }
}
getNumberFact();

const numbersPicked = [3, 8, 22];

async function getMultipleNumbersFacts() {
    try {
        let response = await axios.get(`${numbersAPI}/${numbersPicked.join(",")}?json`);
        console.log(response.data);
    } catch (error) {
        console.error("Error fetching data for getMultipleNumbersFacts:", error);
    }
}
getMultipleNumbersFacts();

async function puttingItTogether() {
    const button = document.querySelector("button");
    button.addEventListener("click", displayFacts);

    async function displayFacts() {
        try {
            let promises = await Promise.all(
                Array.from({ length: 4 }, () => axios.get(`${numbersAPI}/${number}?json`))
            );
            promises.forEach(response => {
                document.body.insertAdjacentHTML('beforeend', `<p>${response.data.text}</p>`);
            });
        } catch (error) {
            console.error("Error fetching data for displayFacts:", error);
        }
    }
} 
puttingItTogether();

