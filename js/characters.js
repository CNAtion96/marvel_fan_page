$.ajax({url: "https://gateway.marvel.com:443/v1/public/characters?limit=50&apikey=b6062bed9e11b13c24966ba8226a381f", success: function(response){
        response.data.results.forEach(function(character){
          $('#characters').append( `
            <div class="character col-md-6">
              <h2>${character.name}</h2>
              <img src="${character.thumbnail.path}.${character.thumbnail.extension}" />
              <button class="moreInfo">Show More</button>
              <div class="description hide"><p>${character.description}</p></div>
            </div>        
          `);
      })
}});

$('body').on('click', '.moreInfo', function(){
    $(this).parent().find(".description").toggleClass("hide");
})