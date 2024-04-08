class UI {
  constructor() {
    this.profileDiv = document.getElementById("profile");
    this.repoDiv = document.getElementById("repos");
    this.lastUsers = document.getElementById("last-users");
    this.inputField = document.getElementById("githubname");
    this.cardBody = document.querySelector(".card-body");
  }

  clearInput() {
    this.inputField.value = "";
  }

  showUserInfo(user) {
    this.profileDiv.innerHTML = `
      <div class="container mt-5">
        <div class="card card-body mb-3">
          <div class="row">
            <div class="col-md-4">
              <a href="${user.html_url}" target="_blank">
                <img class="img-fluid mb-2" src="${user.avatar_url}" alt="${
      user.login
    }'s Avatar">
              </a>
              <hr>
              <div id="fullName">
                <strong>${user.name || user.login}</strong>
              </div>
              <hr>
              <div id="bio">${user.bio || "Bilgi Yok"}</div>
            </div>
            <div class="col-md-8">
              <div class="btn-group">
                <button class="btn btn-secondary">
                  <i class="fas fa-user"></i> Takipçi <span class="badge badge-light">${
                    user.followers
                  }</span>
                </button>
                <button class="btn btn-info">
                  <i class="fas fa-users"></i> Takip Edilen <span class="badge badge-light">${
                    user.following
                  }</span>
                </button>
                <button class="btn btn-danger">
                  <i class="fas fa-code-branch"></i> Repolar <span class="badge badge-light">${
                    user.public_repos
                  }</span>
                </button>
              </div>
              <div class="text-right">
                <small>
                  <strong>Oluşturulma Tarihi:</strong> ${
                    user.created_at.split("T")[0]
                  }
                </small>
                <br>
                <small>
                  <strong>Güncellenme Tarihi:</strong> ${
                    user.updated_at.split("T")[0]
                  }
                </small>
              </div>
              <hr>
              <ul class="list-group">
                <li class="list-group-item borderzero">
                  <div class="d-flex align-items-center">
                    <i class="fas fa-building fa-lg mr-2"></i>
                    <span id="company">${user.company || "Bilgi Yok"}</span>
                  </div>
                </li>
                <li class="list-group-item borderzero">
                  <div class="d-flex align-items-center">
                    <i class="fas fa-map-marker-alt fa-lg mr-2"></i>
                    <span id="location">${user.location || "Bilgi Yok"}</span>
                  </div>
                </li>
                <li class="list-group-item borderzero">
                  <div class="d-flex align-items-center">
                    <i class="fas fa-envelope fa-lg mr-2"></i>
                    <span id="mail">${user.email || "Bilgi Yok"}</span>
                  </div>
                </li>
                <li class="list-group-item borderzero">
                <div class="d-flex align-items-center">
                  <i class="fab fa-twitter fa-lg mr-2"></i>
                  <span id="twitter">
                    ${
                      user.twitter_username
                        ? `<a href="https://twitter.com/${user.twitter_username}" target="_blank">${user.twitter_username}</a>`
                        : "Bilgi Yok"
                    }
                  </span>
                </div>
              </li>
              <li class="list-group-item borderzero">
                <div class="d-flex align-items-center">
                  <i class="fas fa-link fa-lg mr-2"></i>
                  <span id="blog">
                    ${
                      user.blog
                        ? `<a href="${user.blog}" target="_blank">${user.blog}</a>`
                        : "Bilgi Yok"
                    }
                  </span>
                </div>
              </li>
              
              </ul>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  showError(message) {
    const div = document.createElement("div");
    div.className = "alert alert-danger";
    div.textContent = message;
    this.cardBody.appendChild(div);
    setTimeout(() => {
      div.remove();
    }, 2000);
  }

  showRepoInfo(repos) {
    this.repoDiv.innerHTML = "";
    repos.forEach((repo) => {
      this.repoDiv.innerHTML += `
      <div class="mb-2 card-body">
      <div class="row">
          <div class="col-md-2">
              <a href="${repo.html_url}" target="_blank" id="repoName">${
        repo.name
      }</a>
          </div>
          <div class="col-md-6">
              <div class="btn-group">
                  <button class="btn btn-secondary">
                      <i class="fas fa-star"></i> Starlar <span class="badge badge-light" id="repoStar">${
                        repo.stargazers_count
                      }</span>
                  </button>
                  <button class="btn btn-info">
                      <i class="fas fa-code-branch"></i> Forklar <span class="badge badge-light" id="repoFork">${
                        repo.forks_count
                      }</span>
                  </button>
              </div>
          </div>
          <div class="col-md-4">
              <div class="text-right">
                  <small>
                      <strong>Oluşturulma Tarihi:</strong> ${
                        repo.created_at.split("T")[0]
                      }
                  </small>
                  <br>
                  <small>
                      <strong>Güncellenme Tarihi:</strong> ${
                        repo.updated_at.split("T")[0]
                      }
                  </small>
              </div>
          </div>
      </div>
  </div>
  
      `;
    });
  }

  addSearchedUserToUI(username) {
    let users = Storage.getSearchedUsersFromStorage();

    if (users.indexOf(username) === -1) {
      const li = document.createElement("li");
      li.className = "list-group-item";
      li.textContent = username;
      this.lastUsers.appendChild(li);
    }
  }

  clearAllSearchedFromUI() {
    while (this.lastUsers.firstElementChild !== null) {
      this.lastUsers.removeChild(this.lastUsers.firstElementChild);
    }
  }
}
