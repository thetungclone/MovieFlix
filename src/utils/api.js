import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;
// console.log('TMDB Token:', TMDB_TOKEN);
const headers = {
  // Authorization: "bearer " + TMDB_TOKEN,
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZWM2MGU3ZmM0NTM1ODU1YWJmMmQ4YzU2OGQzNDNhYyIsInN1YiI6IjY2NGRjODdjMjhjYzZkM2YxOGYyNzZiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4YCQT5aXZIBxU4wFxsVuV138KVMIX8xpihC09kC4fSc",
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (err) {
    console.log("error fetching data", err);
    return err;
  }
};
