// TODO: Silakan sesuaikan BASE URL dari endpoint Anda
const BASE_URL = 'https://cancerpredict-180338769224.asia-southeast2.run.app/'; //ganti dengan url backend kalian, atau cari di repo saya dengan nama (asclepius-backend)

const ENDPOINT = {
  predict: `${BASE_URL}/predict`,
};

class PredictAPI {
  static async predict(data) {
    const response = await fetch(ENDPOINT.predict, {
      method: 'POST',
      body: data,
      redirect: 'follow',
    });

    const json = await response.json();
    return json;
  }
}
