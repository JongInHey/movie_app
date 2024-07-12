const fetch = require("node-fetch");

const baseUrl = "https://api.themoviedb.org/3/";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjg0MTY3NTVhMWRmZGE1NDU3YTE5OGVlNjk3MmNiZiIsIm5iZiI6MTcyMDY4NjgxMi4xODgzNjUsInN1YiI6IjY2OGY5NjQ5NTBhZGVmNjliN2Y2YzlhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d2aFX1GnDlkmXTmRztD6_v3v6-nWQfQK1pzSqEu7ebI",
  },
};

const url = (urlName) => {
  return baseUrl + `${urlName}?language=ko-kr`;
};

export const nowPlaying = () =>
  fetch(url("movie/now_playing"), options).then((res) => res.json());
