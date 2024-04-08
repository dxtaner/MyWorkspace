class Storage {
  static getSearchedUsersFromStorage() {
    let users = [];

    if (localStorage.getItem("searched")) {
      users = JSON.parse(localStorage.getItem("searched"));
    }

    return users;
  }

  static addSearchedUserToStorage(username) {
    let users = this.getSearchedUsersFromStorage();

    if (!users.includes(username)) {
      users.push(username);
    }

    localStorage.setItem("searched", JSON.stringify(users));
  }

  static clearAllSearchedUsersFromStorage() {
    localStorage.removeItem("searched");
  }
}
