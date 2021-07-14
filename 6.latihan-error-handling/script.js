// Fetch Async-Await
const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', async function() {
    try{
    //mencari sesuai keyword
    const inputKeyword = document.querySelector('.input-keyword');
    const movies = await getMovies(inputKeyword.value);
    //console.log(movies);
    updateMovieContainer(movies);
    } catch(err) {
        //console.log(err);
        alert(err);
    }

});


function getMovies(keyword) {
    return  fetch('http://www.omdbapi.com/?apikey=13c45572&s=' + keyword)
                .then(response => {
                    //console.log(response);
                    if (!response.ok){
                        throw new Error(response.statusText);
                    }
                    return response.json();
                })
                .then(response => {
                    if (response.Response === "False"){
                        throw new Error(response.Error);
                    }
                    return response.Search;
                });
}

function updateMovieContainer(movies) {
    let cards = ''
    
    movies.forEach(m => {
        cards += showCards(m);
    });
    
    const movieContainer = document.querySelector('.movie-container');
    movieContainer.innerHTML = cards;
}

// Event binding
document.addEventListener('click', async function(e) {
    //console.log(e.target.classList);
    if (e.target.classList.contains('modal-detail-button')) {
        //console.log('ok');
        const imdbid = e.target.dataset.imdbid;
        //console.log(imdbid);
        const movieDetail = await getMovieDetail(imdbid);
        //console.log(movieDetail);
        updateUIDetail(movieDetail);
    }
});

function getMovieDetail(imdbid) {
    return fetch('http://www.omdbapi.com/?apikey=13c45572&i=' + imdbid)
        .then(response => response.json())
        .then(m => m);
}

function updateUIDetail(movies){
    const movieDetail = showMovieDetails(movies);
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = movieDetail;
}




function showCards(m){
    return `<div class="col-md-4 my-3">
                <div class="card">
                    <img class="card-img-top" src="${m.Poster}">
                    <div class="card-body">
                    <h5 class="card-title">${m.Title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                    <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#movieDetailModal" data-imdbid="${m.imdbID}">Show Details</a>
                    </div>
                </div>
            </div>`;
}

function showMovieDetails(m){
    return `<div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${m.Poster}" class="img-fluid">
                    </div>
                    <div class="col-md">
                        <ul class="list-group">
                            <li class="list-group-item"><h4>${m.Title} (${m.Year})</h4></li>
                            <li class="list-group-item"><strong>Director : </strong> ${m.Director}</li>
                            <li class="list-group-item"><strong>Actors : </strong> ${m.Actors}</li>
                            <li class="list-group-item"><strong>Writer : </strong> ${m.Writer}</li>
                            <li class="list-group-item"><strong>Plot : </strong> ${m.Plot}</li>
                        </ul>
                    </div>
                </div>
            </div>`;
}