const apiKey = "3a012ec8b4194405adb8084aabe8c2a7";
const url = `https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=${apiKey}`;

const resultsContainer = document.querySelector(".results");

async function getGames() {
  try {
    const response = await fetch(url);
    const results = await response.json();
    const facts = results.results;

    resultsContainer.innerHTML = "";

    console.log(results);

    for (let i = 0; i < facts.length; i++) {
      if (i === 8) {
        break;
      }
      resultsContainer.innerHTML += `<div class="result">
                                        <p>Name: ${facts[i].name}</p> 
                                        <p>Rating: ${facts[i].rating}<p>
                                        <p>Tags: ${Object.keys(facts[i]).length}<p>
                                        </div>`;
    }
  } catch (error) {
    resultsContainer.innerHTML = displayError("An error has occured...");
  }
}
getGames();
