const key = require("./key").key;

const url = `https://api.themoviedb.org/3/movie/430?api_key=${key}`;

(async () => {
  const response = await fetch(url);
  const responseObj = await response.json();

  console.log(responseObj);
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();

//api

export let page;
export let query;

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "8b218b85545392c9f8705c30fbfd1bce";
// const WATCH_KEY = 'watched';
// const QUEUE_KEY = 'queue';

async function fetchPopularMovies(page) {
  const url = new URL(`${BASE_URL}/trending/movie/week`);
  url.searchParams.append("api_key", API_KEY);
  url.searchParams.append("page", page);

  const response = await fetch(url);
  const data = await response.json();
  return data;
}
async function fetchTodayPopularMovies() {
  const url = new URL(`${BASE_URL}/trending/movie/day`);
  url.searchParams.append("api_key", API_KEY);

  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function fetchMoviesByQuery(query, page) {
  const url = new URL(`${BASE_URL}/search/movie`);
  url.searchParams.append("api_key", API_KEY);
  url.searchParams.append("query", query);
  url.searchParams.append("page", page);

  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function fetchMovieById(id) {
  const url = new URL(`${BASE_URL}/movie/${id}`);
  url.searchParams.append("api_key", API_KEY);

  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function fetchTrailerById(id) {
  const url = new URL(`${BASE_URL}/movie/${id}/videos`);
  url.searchParams.append("api_key", API_KEY);

  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function fetchGenres() {
  const url = new URL(`${BASE_URL}/genre/movie/list`);
  url.searchParams.append("api_key", API_KEY);

  const response = await fetch(url);
  const data = await response.json();
  return data.genres;
}

export {
  fetchPopularMovies,
  fetchTodayPopularMovies,
  fetchMoviesByQuery,
  fetchMovieById,
  fetchTrailerById,
  fetchGenres,
  BASE_URL,
  API_KEY,
};

//team-load-to-modal
const refs = {
  openModal: document.querySelector(".open-modal-team"),
  closeModal: document.querySelector(".close-modal-team"),
  teamBackdrop: document.querySelector(".backdrop-modal"),
  teamModal: document.getElementsByClassName("team__modal"),
};

refs.openModal.addEventListener("click", openModalTeam);
refs.closeModal.addEventListener("click", closeModalTeam);

function openModalTeam(event) {
  refs.teamBackdrop.classList.remove("team__backdrop--hidden");
  document.addEventListener("keydown", onEscapeClose);
  document.addEventListener("click", onBackdropClose);
  refs.teamModal[0].classList.add("openModalAnimationTeam");
  // document.body.style.overflow = 'hidden';
}

function closeModalTeam(event) {
  refs.teamModal[0].classList.remove("closeModalAnimationTeam");
  refs.teamBackdrop.classList.add("team__backdrop--hidden");
  document.removeEventListener("keydown", onEscapeClose);
  document.body.style.overflow = "";
}

function onEscapeClose(event) {
  if (event.code === "Escape") {
    refs.teamModal[0].classList.remove("openModalAnimationTeam");
    refs.teamModal[0].classList.add("closeModalAnimationTeam");
    setTimeout(() => {
      closeModalTeam();
    }, 400);
    closeModalTeam();
  }
}

function onBackdropClose(event) {
  if (event.target === refs.teamBackdrop) {
    refs.teamModal[0].classList.remove("openModalAnimationTeam");
    refs.teamModal[0].classList.add("closeModalAnimationTeam");
    setTimeout(() => {
      closeModalTeam();
    }, 400);
  }
}
S;
