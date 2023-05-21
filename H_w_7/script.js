// feac3505
const apiKey = 'feac3505';
const searchBtn = document.getElementById('searchBtn');
const movieNameInput = document.getElementById('movieName');
const moviesList = document.getElementById('moviesList');
const modal = document.getElementById('modal');
const modalDetails = document.getElementById('modalDetails');
const closeModal = document.getElementsByClassName('close')[0];

searchBtn.addEventListener('click', () => {
  const movieName = movieNameInput.value.trim();
  if (movieName !== '') {
    searchMovies(movieName);
  }
});

async function searchMovies(movieName) {
  const url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(movieName)}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.Response === 'True') {
      displayMovies(data.Search);
    } else {
      moviesList.innerHTML = 'No movies found.';
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

function displayMovies(movies) {
  moviesList.innerHTML = '';
  movies.forEach((movie) => {
    const movieItem = createMovieItem(movie);
    moviesList.appendChild(movieItem);
  });
}

function createMovieItem(movie) {
  const movieItem = document.createElement('div');
  movieItem.className = 'movie';

  const movieImage = document.createElement('img');
  movieImage.src = movie.Poster;
  movieImage.alt = movie.Title;
  movieItem.appendChild(movieImage);

  const movieTitle = document.createElement('div');
  movieTitle.className = 'movie-title';
  movieTitle.textContent = movie.Title;
  movieItem.appendChild(movieTitle);

  const movieYear = document.createElement('div');
  movieYear.className = 'movie-year';
  movieYear.textContent = movie.Year;
  movieItem.appendChild(movieYear);

  const moreDetailsBtn = document.createElement('button');
  moreDetailsBtn.className = 'button';
  moreDetailsBtn.textContent = 'More Details';
  moreDetailsBtn.addEventListener('click', () => {
    openModal(movie.imdbID);
  });
  movieItem.appendChild(moreDetailsBtn);

  return movieItem;
}

async function fetchMovieDetails(movieId) {
  const url = `https://www.omdbapi.com/?apikey=${apiKey}&i=${encodeURIComponent(movieId)}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}

function openModal(movieId) {
  fetchMovieDetails(movieId).then((data) => {
    const details = createMovieDetails(data);
    modalDetails.innerHTML = '';
    modalDetails.appendChild(details);
    modal.style.display = 'block';
  });
}

function createMovieDetails(movie) {
  const details = document.createElement('div');

  const title = document.createElement('h2');
  title.textContent = movie.Title;
  details.appendChild(title);

  const year = document.createElement('div');
  year.textContent = `Year: ${movie.Year}`;
  details.appendChild(year);

  const plot = document.createElement('div');
  plot.textContent = `Plot: ${movie.Plot}`;
  details.appendChild(plot);

  const genre = document.createElement('div');
  genre.textContent = `Genre: ${movie.Genre}`;
  details.appendChild(genre);

  return details;
}

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});