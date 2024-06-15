// View js
import getImg from "./unsplash_api.js";
import getJoke from "./joke_api.js";
import getTrans from "./translate_api.js";

class View {
  constructor() {
    this.getJokeBtn = document.querySelector(".get-joke");
    this.viewDiv = document.querySelector("#result-view");
    this.getJokeBtn.addEventListener("click", () => this.getJoke());
  }

  async getJoke() {
    const image = await getImg();
    const joke = await getJoke();
    const trans = await getTrans(joke);

    const params = {
      image,
      joke,
      trans,
    };

    this.setJokeView(params);
  }

  setJokeView(params) {
    this.viewDiv.innerHTML = `<div class="card">
                    <div class="card-image">
                        <figure class="image is-16by9">
                            <img src="${params.image}" alt="Placeholder image">

                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media-content">
                            <p class="title is-4 has-text-info">Chuck Norris</p>
                            <div class="content">
                                <p class="subtitle is-6 has-text-primary-dark">${params.joke}</p>
                            </div>
                        </div>
                        <hr>
                        <div class="media-content">
                            <p class="title is-4 has-text-primary">Chuck Norris</p>
                            <div class="content">
                                <p class="subtitle is-6 has-text-primary-dark">${params.trans}</p>
                            </div>
                        </div>
                    </div>
                </div>`;
  }
}

export default function view() {
  new View();
}
