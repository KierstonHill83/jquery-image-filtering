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

$(".low").on("click", function() {
  $(".image-container").append(cabins.sort(sortedCabins));
});


 function sortedCabins2 (a,b){
    var aPrice = parseInt(a.dataset.price);
    var bPrice = parseInt(b.dataset.price);
    //if it is greater than 0, b comes first
    if (aPrice < bPrice) {
        return 1;
    }
    //if it is less than 0, a comes first
    if (aPrice > bPrice) {
        return -1;
    }
    //if it is 0, a and b are unchanged but sorted with respect to all diff elements
    else {
        return 0;
    }
  }

$(".high").on("click", function() {
  $(".image-container").append(cabins.sort(sortedCabins2));
});











});







// $(document).ready(function() {
//   $('img [src*=https://upload.wikimedia.org/wikipedia/commons/c/c0/Gingerbread_House_Essex_CT.jpg]').addClass("newHouse");

// $('#newHouse')
// });



