$.ajax({url: "https://gateway.marvel.com:443/v1/public/characters?limit=3&apikey=b6062bed9e11b13c24966ba8226a381f", success: function(response){
        response.data.results.forEach(function(character){
          $('#characters').append( `
            <div class="character col-md-4">
              <h2 class>${character.name}</h2>
              <img src="${character.thumbnail.path}.${character.thumbnail.extension}" />
              <p>${character.description}</p>
            </div>        
          `);
      })
}});

$.ajax({url: "https://gateway.marvel.com:443/v1/public/comics?limit=3&apikey=07f9fc4dd4fa1edf5000a52e7b585103", success: function(response){
        response.data.results.forEach(function(comic){
          $('#comics').append( `
            <div class="comic col-md-4">
              <h2>${comic.title}</h2>
              <img src="${comic.thumbnail.path}.${comic.thumbnail.extension}" />
              <p>${comic.description}</p>
            </div>        
          `);
      })
}});