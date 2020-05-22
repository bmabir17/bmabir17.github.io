
window.onload = function () {
	var dateMod= document.lastModified;
	//alert(dateMod);
	dateMod="Last modified on: "+dateMod;
	var elemShowdate= document.getElementById('showModDate');
	elemShowdate.innerHTML=dateMod;
}
// window.onscroll = function() {animate()};

// function animate() {
// 	console.log("scroll")
// 	var element =$("#scroll-scene");
// 	if(element.scrollTop() > 0) {
// 	element.addClass("animate");
// 	console.log("scroll added class")
	
// 	}
	
	
// };
$(function () {
    var element = $(".scroll-scene");
    $(window).scroll(function () {
      if($(window).scrollTop() > 0) {
		element.addClass("animate");
      }
      
	});
	// var element2 = $(".scroll-scene2");
    // element2.scroll(function () {
    //   if($(window).scrollTop() > 0) {
	// 	element2.addClass("animate");
    //   }
      
    // });
});