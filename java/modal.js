//api

const key = require('./key').key;

const url = `https://api.themoviedb.org/3/movie/430?api_key=${key}`;

(async () => {
  const response = await fetch(url);
  const responseObj = await response.json();

  console.log(responseObj);
})();

//fetchMovie

async function fetchMovieById(id) {
  const base_url = new URL(`${url}/movie/${id}`);
  base_url.searchParams.append('key', key);

  const response = await fetch(base_url);
  const data = await response.json();
  return data;
}

async function fetchTrailerById(id) {
  const url = new URL(`${BASE_URL}/movie/${id}/videos`);
  url.searchParams.append('api_key', API_KEY);

  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function fetchGenres() {
  const url = new URL(`${BASE_URL}/genre/movie/list`);
  url.searchParams.append('api_key', API_KEY);

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
  openModal: document.querySelector('.open-modal-team'),
  closeModal: document.querySelector('.close-modal-team'),
  teamBackdrop: document.querySelector('.backdrop-modal'),
  teamModal: document.getElementsByClassName('team__modal'),
};

refs.openModal.addEventListener('click', openModalTeam);
refs.closeModal.addEventListener('click', closeModalTeam);

function openModalTeam(event) {
  refs.teamBackdrop.classList.remove('team__backdrop--hidden');
  document.addEventListener('keydown', onEscapeClose);
  document.addEventListener('click', onBackdropClose);
  refs.teamModal[0].classList.add('openModalAnimationTeam');
  // document.body.style.overflow = 'hidden';
}

function closeModalTeam(event) {
  refs.teamModal[0].classList.remove('closeModalAnimationTeam');
  refs.teamBackdrop.classList.add('team__backdrop--hidden');
  document.removeEventListener('keydown', onEscapeClose);
  document.body.style.overflow = '';
}

function onEscapeClose(event) {
  if (event.code === 'Escape') {
    refs.teamModal[0].classList.remove('openModalAnimationTeam');
    refs.teamModal[0].classList.add('closeModalAnimationTeam');
    setTimeout(() => {
      closeModalTeam();
    }, 400);
    closeModalTeam();
  }
}

function onBackdropClose(event) {
  if (event.target === refs.teamBackdrop) {
    refs.teamModal[0].classList.remove('openModalAnimationTeam');
    refs.teamModal[0].classList.add('closeModalAnimationTeam');
    setTimeout(() => {
      closeModalTeam();
    }, 400);
  }
}
S;
