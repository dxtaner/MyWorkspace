// // AJAX, callback, ve HTTP istekleri için JavaScript kodları

class Request {
  constructor() {
    this.xhr = new XMLHttpRequest();
  }

  // GET İsteği
  get(url, callback) {
    this.xhr.open("GET", url);
    this.xhr.onload = () => {
      if (this.xhr.status === 200) {
        callback(null, this.xhr.responseText);
      } else {
        callback("Get Request: Bir hata oluştu", null);
      }
    };
    this.xhr.send();
  }

  // POST İsteği
  post(url, data, callback) {
    this.xhr.open("POST", url);
    this.xhr.setRequestHeader("Content-type", "application/json");
    this.xhr.onload = () => {
      if (this.xhr.status === 201) {
        callback(null, this.xhr.responseText);
      } else {
        callback("Post Request: Bir hata oluştu", null);
      }
    };
    this.xhr.send(JSON.stringify(data));
  }

  // PUT İsteği
  put(url, data, callback) {
    this.xhr.open("PUT", url);
    this.xhr.setRequestHeader("Content-type", "application/json");
    this.xhr.onload = () => {
      if (this.xhr.status === 200) {
        callback(null, this.xhr.responseText);
      } else {
        callback("Put Request: Bir hata oluştu", null);
      }
    };
    this.xhr.send(JSON.stringify(data));
  }

  // DELETE İsteği
  delete(url, callback) {
    this.xhr.open("DELETE", url);
    this.xhr.onload = () => {
      if (this.xhr.status === 200) {
        callback(null, "Veri silme işlemi başarılı");
      } else {
        callback("Delete Request: Bir hata oluştu", null);
      }
    };
    this.xhr.send();
  }
}

const request = new Request();

// Kullanım örnekleri
request.get(
  "https://jsonplaceholder.typicode.com/albums",
  function (err, response) {
    if (err === null) {
      console.log(response);
    } else {
      console.log(err);
    }
  }
);

request.post(
  "https://jsonplaceholder.typicode.com/albums",
  { userId: 2, title: "Thriller" },
  function (err, album) {
    if (err === null) {
      console.log(album);
    } else {
      console.log(err);
    }
  }
);

request.put(
  "https://jsonplaceholder.typicode.com/albums/10",
  { userId: 143, title: "Tarkan Karma" },
  function (err, album) {
    if (err === null) {
      console.log(album);
    } else {
      console.log(err);
    }
  }
);

request.delete(
  "https://jsonplaceholder.typicode.com/albums/10",
  function (err, response) {
    if (err === null) {
      console.log(response);
    } else {
      console.log(err);
    }
  }
);
