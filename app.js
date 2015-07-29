$(document).ready(function() {
	console.log("The document is ready!");

$(".image-container").append('<article class="home" data-price="35000"><img src="img/twelve.jpg"><h4>$35,000</h4></article>');

$(".image-container").append('<article class="home" data-price="55000")"><img src="img/six.jpg"><h4>$55,000</h4></article>');

$(".image-container").append('<article class="home" data-price="175000")"><img src="img/five.jpg"><h4>$175,000</h4></article>');

$(".textures").append('<span class="forest"></span>')
});

$(".forest").css({
  'border-radius' : '50%',
  'background-image' : 'url(img/forest.jpg)'
  });

 $(".dark").on("click", function(){
  $( "body" ).css({
   'background-image': 'url(img/dark_wood.png)'
  });
});


$(".light").on("click", function(){
  $( "body" ).css({
    'background-image': 'url(img/tileable_wood_texture.png)'
  });
});





// $(document).ready(function() {
//   $('img [src*=https://upload.wikimedia.org/wikipedia/commons/c/c0/Gingerbread_House_Essex_CT.jpg]').addClass("newHouse");

// $('#newHouse')
// });

// });




// .css({
//   'width': '150px',
//   'height': '150px'
//   });
