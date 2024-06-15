class UnsplashApi {
  constructor() {
    this.baseURL = "https://api.unsplash.com";
    this.clientID = "Client-ID rF2wdLVU9AQtry9YRjElvUGIMfmxaNymPWFhw_03OQI";
    this.axiosObj = axios.create({
      baseURL: this.baseURL,
      headers: {
        Authorization: this.clientID,
      },
      params: {
        query: "cat",
        lang: "tr",
        w: 300,
        location: "istanbul",
      },
    });
  }
  async getRandImg() {
    try {
      const imgResponse = await this.axiosObj.get("/photos/random");
      console.log(imgResponse.data.urls.regular);
      return imgResponse.data.urls.regular;
    } catch (err) {
      console.log(err.response.data.errors[0]);
    }
  }
}

export default function img() {
  const getImg = new UnsplashApi().getRandImg();
  return getImg;
}
