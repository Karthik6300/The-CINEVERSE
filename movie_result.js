        // Function to get URL parameters
        function getQueryParam(param) {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get(param);
        }

        // Get the movie title from the URL
        let movieTitle = getQueryParam("query");

        if (movieTitle) {
            // Fetch movie details from OMDB API
            fetch(`https://www.omdbapi.com/?t=${movieTitle}&apikey=972e8d9b`)
                .then(response => response.json())
                .then(data => {
                    let movieContainer = document.getElementById("movieDetails");

                    if (data.Response === "True") {
                        movieContainer.innerHTML = `
                            <h3>${data.Title} (${data.Year})</h3>
                            <img src="${data.Poster}" alt="${data.Title}" width="200">
                            <p><strong>Genre:</strong> ${data.Genre}</p>
                            <p><strong>Director:</strong> ${data.Director}</p>
                            <p><strong>Plot:</strong> ${data.Plot}</p>
                            <p><strong>IMDB Rating:</strong> ${data.imdbRating}</p>
                        `;
                    } else {
                        movieContainer.innerHTML = `<p>Movie not found.</p>`;
                    }
                })
                .catch(error => {
                    console.error("Error fetching movie details:", error);
                });
        }