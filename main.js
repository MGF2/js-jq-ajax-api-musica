$(document).ready(function() {

  $.ajax(
    {
      'url': 'https://flynn.boolean.careers/exercises/api/array/music',
      'method': 'GET',
      'success': function(risposta){

        // loop to get objects
        for ( var i = 0 ; i < risposta.response.length; i++) {

          console.log(risposta);

          var source = $('#entry-template').html();
  			  var template = Handlebars.compile(source);

          //object content
          var content = risposta.response[i];
  				var html = template(content);

          //inserimento object in html
  			  $('.cds-container').append(html);

        }

      },
      'error':function(){
        alert('errore!');
      }
    }
  );

});

// FUNCTIONS

// leggiDati(risposta); nope

// function leggiDati (d){
// 	var source = $('#entry-template').html();
// 	var template = Handlebars.compile(source);
//
// 	var html = template(d);
// 	$('.container').append(html);
// }
