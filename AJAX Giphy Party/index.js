// look back at the <readme.md> file for some hints //
// working API key //
const giphyApiKey = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";
const createGifButton = document.getElementById("make-gif-button");
const clearGifButton = document.getElementById("clear-gif-button");

const display = document.getElementById("display-div");

createGifButton.addEventListener("click", generateGifs);
clearGifButton.addEventListener("click", clearGifs);

async function giphyRequest(query) {
    const response = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${giphyApiKey}&limit=10`);

    return response.data.data.map((val) => {
        return {
            gifURL: val.images.fixed_width.url
        }
    });
}

function getInputData() {
    const dataInput = document.getElementById("search-input");
    return dataInput.value;
}

async function generateGifs(e) {
    e.preventDefault();

    display.innerHTML = "";

    const inputData = getInputData();

    const gifs = await giphyRequest(inputData)

    const first = document.createElement("div");
    const second = document.createElement("div");

    first.classList.add("row", "first");
    second.classList.add("row", "second");

    for (let i = 0; i < gifs.length / 2; i++) {
        const image = document.createElement("img");

        image.src = gifs[i].gifURL;

        first.appendChild(image);
    }
    for (let i = 5; i < gifs.length; i++) {
        const image = document.createElement("img");

        image.src = gifs[i].gifURL;

        second.appendChild(image);
    }

    display.appendChild(first);
    display.appendChild(second);
};

function clearGifs() {
    display.innerHTML = "";
    display.innerHTML = "Gifs Await";
}
