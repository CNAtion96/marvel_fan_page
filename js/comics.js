$.ajax({url: "https://gateway.marvel.com:443/v1/public/comics?limit=50&apikey=07f9fc4dd4fa1edf5000a52e7b585103", success: function(response){
        response.data.results.forEach(function(comic){
          $('#comics').append( `
            <div class="comic col-md-6">
              <h2>${comic.title}</h2>
              <img class="gonnaClick" src="${comic.thumbnail.path}.${comic.thumbnail.extension}" />
              <p class="description">${comic.description}</p>
            </div>        
          `);
      })
}});

$('body').on('click', '.gonnaClick', function(){
		$(".description").style.display = block;
})