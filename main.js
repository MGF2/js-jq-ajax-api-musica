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

          // save object content
          var content = risposta.response[i];
  				var html = template(content);

          // var html = template(risposta.response[i]);

          //inserimento object in html
  			  $('.cds-container').append(html);

        }

      },
      'error':function(){
        alert('errore!');
      }
    }
  );

  //BONUS

  $('#scelta').click(function(){

    var genere = $(this).val();

    $('.cd').hide();


    if (genere == 'All') {

      $('.cd').show();

    } else {

      $('.cd.' + genere).show();

    }

  });

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
