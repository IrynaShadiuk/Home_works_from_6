function searchMovie() {
    var movieInput = document.getElementById("movieInput").value;
    var xhr = new XMLHttpRequest();
  
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var movieData = JSON.parse(xhr.responseText);
        displayMovieDetails(movieData);
      }
    };
  
    xhr.open("GET", "http://www.omdbapi.com/?apikey=feac3505&t=" + movieInput, true);
    xhr.send();
  }
  
  function displayMovieDetails(movieData) {
    var movieDetailsContainer = document.getElementById("movieDetails");
    movieDetailsContainer.innerHTML = "";
  
    var movieTitle = document.createElement("h2");
    movieTitle.textContent = movieData.Title;
  
    var moreDetailsButton = document.createElement("button");
    moreDetailsButton.textContent = "More Details";
    moreDetailsButton.onclick = function() {
      displayModal(movieData);
    };
  
    movieDetailsContainer.appendChild(movieTitle);
    movieDetailsContainer.appendChild(moreDetailsButton);
  }
  
  function displayModal(movieData) {
    var modal = document.getElementById("modal");
    modal.innerHTML = "";
  
    var modalTitle = document.createElement("h2");
    modalTitle.textContent = movieData.Title;
  
    var modalPlot = document.createElement("p");
    modalPlot.textContent = "Plot: " + movieData.Plot;
  
    modal.appendChild(modalTitle);
    modal.appendChild(modalPlot);
  
    modal.style.display = "block";
  }