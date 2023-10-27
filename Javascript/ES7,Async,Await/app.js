class Request {
  async get(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("HTTP Hata, Durum Kodu: " + response.status);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }

  async post(url, data) {
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      if (!response.ok) {
        throw new Error("HTTP Hata, Durum Kodu: " + response.status);
      }
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      throw error;
    }
  }

  async put(url, data) {
    try {
      const response = await fetch(url, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      if (!response.ok) {
        throw new Error("HTTP Hata, Durum Kodu: " + response.status);
      }
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      throw error;
    }
  }

  async delete(url) {
    try {
      const response = await fetch(url, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("HTTP Hata, Durum Kodu: " + response.status);
      }
      return "Veri silme işlemi başarılı";
    } catch (error) {
      throw error;
    }
  }
}

const request = new Request();

async function fetchData() {
  try {
    const albums = await request.get(
      "https://jsonplaceholder.typicode.com/albums"
    );
    console.log(albums);

    const newAlbum = await request.post(
      "https://jsonplaceholder.typicode.com/albums",
      {
        userId: 1,
        title: "Thriller",
      }
    );
    console.log(newAlbum);

    const updatedAlbum = await request.put(
      "https://jsonplaceholder.typicode.com/albums/10",
      {
        userId: 10,
        title: "Tarkan",
      }
    );
    console.log(updatedAlbum);

    const deleteMessage = await request.delete(
      "https://jsonplaceholder.typicode.com/albums/1"
    );
    console.log(deleteMessage);
  } catch (error) {
    console.error(error);
  }
}

fetchData();
