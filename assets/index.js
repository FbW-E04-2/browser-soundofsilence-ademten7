fetch("https://api.discogs.com/artists/1/releases?page=2&per_page=75")
    .then(response => response.json())
    .then(data => {
        console.log(data)
    });