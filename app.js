$(document).ready(function() {
	console.log("The document is ready!");

$(".image-container").append('<article class="home" data-price="35000"><img src="img/twelve.jpg"><h4>$35,000</h4></article>');

$(".image-container").append('<article class="home" data-price="55000")"><img src="img/six.jpg"><h4>$55,000</h4></article>');

$(".image-container").append('<article class="home" data-price="175000")"><img src="img/five.jpg"><h4>$175,000</h4></article>');

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


$(".textures").append('<span class="forest"></span>');

$(".textures").css("width", "180px");

$('.forest').css({
  'border-radius' : '50%',
  'background' : 'url(img/forest.jpg)'
});

$(".forest").on("click", function() {
  $("body").css("background", "url(img/forest.jpg");
});


// function sortCabins () {

// //assign variable to an empty array aka: literal array
// //loop start at  0, end at the length of the cabins, and increment by 1
// // while (cabins.length) {
// //   cabins.splice(0, cabins.length);

// // }

//   // for(var i = 0; i < cabins.length; i++) {
//   //   sortedCabins = cabins[i];
//   //   console.log(sortedCabins);
//   // }
// }


// setting cabins = to the home array
//assign variable to call jquery on the home class
var cabins = $('.home');

function sortedCabins (a,b){
  var aPrice = parseInt(a.dataset.price);
  var bPrice = parseInt(b.dataset.price);
  //if it is greater than 0, b comes first
  if (aPrice > bPrice) {
      return 1;
  }
  //if it is less than 0, a comes first
  if (aPrice < bPrice) {
      return -1;
  }
  //if it is 0, a and b are unchanged but sorted with respect to all diff elements
  else {
      return 0;
  }
}

cabins.sort(sortedCabins);




// function highToLow () {

//   for (var i = 0; i < $(".home").length; i++) {
//   }
// }


//   console.log($($(".home")[i]).data("price"));










});







// $(document).ready(function() {
//   $('img [src*=https://upload.wikimedia.org/wikipedia/commons/c/c0/Gingerbread_House_Essex_CT.jpg]').addClass("newHouse");

// $('#newHouse')
// });






// .css({
//   'width': '150px',
//   'height': '150px'
//   });
