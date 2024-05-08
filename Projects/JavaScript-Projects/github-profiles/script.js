// script.js

const APIURL = "https://api.github.com/users/";
const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

getUser("dxtaner");

async function getUser(username) {
  try {
    const resp = await fetch(APIURL + username);
    const respData = await resp.json();

    if (respData.message === "Not Found") {
      showError("User not found");
      return;
    }

    createUserCard(respData);
    getRepos(username);
  } catch (error) {
    showError("An error occurred while fetching data");
  }
}

async function getRepos(username) {
  try {
    const resp = await fetch(APIURL + username + "/repos");
    const respData = await resp.json();

    addReposToCard(respData);
  } catch (error) {
    showError("An error occurred while fetching repositories");
  }
}

function createUserCard(user) {
  const cardHTML = `
        <div class="card">
            <div>
                <a href="${user.html_url}" target="_blank">
                    <img class="avatar" src="${user.avatar_url}" alt="${
    user.name
  }" />
                </a>
            </div>
            <div class="user-info">
                <h2>${user.name}</h2>
                <p>${user.bio}</p>

                <ul class="info">
                    <li>${user.followers}<strong>Followers</strong></li>
                    <li>${user.following}<strong>Following</strong></li>
                    <li>${user.public_repos}<strong>Repos</strong></li>
                </ul>

                ${
                  user.blog
                    ? `<p>Website: <a href="${user.blog}" target="_blank">${user.blog}</a></p>`
                    : ""
                }

                <div id="repos"></div>
            </div>
        </div>
    `;

  main.innerHTML = cardHTML;
}

function addReposToCard(repos) {
  const reposEl = document.getElementById("repos");

  repos
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 10)
    .forEach((repo) => {
      const repoEl = document.createElement("a");
      repoEl.classList.add("repo");

      repoEl.href = repo.html_url;
      repoEl.target = "_blank";
      repoEl.innerText = repo.name;

      reposEl.appendChild(repoEl);
    });
}

function showError(message) {
  main.innerHTML = `<div class="card"><p>${message}</p></div>`;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = search.value.trim();

  if (user) {
    getUser(user);

    search.value = "";
  }
});
