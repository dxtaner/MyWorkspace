class TranslateApi {
  constructor(enJoke) {
    (this.baseURL = "https://translation.googleapis.com"),
      (this.enText = enJoke);
    this.axiosObj = axios.create({
      baseURL: this.baseURL,
      params: {
        target: "tr",
        key: "1ca3bde1e2msh1d5de7bf0a8408cp1f96d9jsn98cbe6024677",
        q: this.enText,
      },
    });
  }

  async getTranslate() {
    try {
      const translation = await this.axiosObj.get("/language/translate/v2");
      console.log(translation.data.data.translations[0].translatedText);
      return translation.data.data.translations[0].translatedText;
    } catch (err) {
      return err.response.data.error.message;
    }
  }
}

export default function translate(enJoke) {
  const getTrans = new TranslateApi(enJoke).getTranslate();
  return getTrans;
}

/*

https://translation.googleapis.com/language/translate/v2?target=tr&key=1ca3bde1e2msh1d5de7bf0a8408cp1f96d9jsn98cbe6024677&q=car

*/
