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



$("input:checkbox").on("click", function() {
  var domValues = [];
  $(".image-container article").each(function(i, article){
    domValues.push($(article).data("price"));
  });
  console.log(domValues);

  var upperLimit = parseInt($(this).val());
  console.log(upperLimit);

  //won't pull in upperlimit
  var range = getRanges(upperLimit);
  console.log(range);

  var rangeOnScreen = getValues(range, domValues);
  console.log(rangeOnScreen);

//want to append the article on the screen, not just the value. reverse what I did to get the value??
  $(".image-container article").hide();
  var index = [];
    for (var i = 0; i < rangeOnScreen.length; i++) {
      // var output = $("image-container").find();
      index = rangeOnScreen[i];
      var output = $(".image-container article").filter(function(i, article) {
        if(parseInt(article.dataset.price) === index) {
          return true;
        } else {
          return false;
        }
    });
     output.show();
}



function getRanges(num){
  switch (num) {
    case 50000:
      return [0, 50000];
    case 100000:
      return [50000, 100000];
    case 200000:
      return [100000, 200000];
    case 300000:
      return [200000, 300000];
    case 500000:
      return [300000, 500000];
    case 1000000:
      return [500000, 1000000];
  }
}

function getValues(rangeArr, domArr) {
  var newArr = [];
  for(var i = 0; i < domArr.length; i++) {
    if (domArr[i] >= rangeArr[0] && domArr[i] <= rangeArr[1]) {
      newArr.push(domArr[i]);
    }
  }
  return newArr;
}

});

});








// $(document).ready(function() {
//   $('img [src*=https://upload.wikimedia.org/wikipedia/commons/c/c0/Gingerbread_House_Essex_CT.jpg]').addClass("newHouse");

// $('#newHouse')
// });



