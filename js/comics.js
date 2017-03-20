$.ajax({url: 
  "https://gateway.marvel.com:443/v1/public/comics?limit=50&apikey=07f9fc4dd4fa1edf5000a52e7b585103", 
  success: function(response){
      response.data.results.forEach(function(comic){
        $('#comics').append( `
          <div class="comic col-md-6">
            <h2>${comic.title}</h2>
            <img src="${comic.thumbnail.path}.${comic.thumbnail.extension}" />
            <button class="moreInfo">Learn More</button>
            <div class="description hide"><p>${comic.description}</p></div>
          </div>
        `);
    })
}});

$('body').on('click', '.moreInfo', function(){
    $(this).parent().find(".description").toggleClass("hide");
})