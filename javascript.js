window.onscroll = function() {scrollFunction()};
      
function scrollFunction() {
 
    // var element = document.getElementsById("navbar");
 

    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "10px 10px";
    document.getElementById("navbar").style.backgroundColor = "white";
    document.getElementById("logo").style.fontSize = "1.8vw";
    document.getElementById("logo").style.color = "blue";
    // element.classList.add("solid");


    
} else {
    document.getElementById("navbar").style.padding = "20px 10px";
    document.getElementById("logo").style.fontSize = "2.5vw";
    document.getElementById("navbar").style.backgroundColor = "transparent";
    document.getElementById("logo").style.color = "white";

  }
}


$(document).ready(function() {
    $("#testimonial-slider").owlCarousel({
      items: 3,
      itemsDesktop:[1000,3],
      itemsDesktopSmall:[979,2],
      itemsTablet:[768, 2],
      itemsMobile:[650, 1],
      pagination: true,
      autoPlay: true
    });
  });













TweenMax.from(".title1", 0.7, {
    opacity: 0,
    x: -80, ease: Expo.easeInOut
 });
 TweenMax.from(".title2", 0.7, {
    delay: 0.2,
    opacity: 0,
    x: -80, ease: Expo.easeInOut
 });
 TweenMax.from(".runner", 1.5, {
    delay: 1.6,
    opacity: 0,
    x: "-100%", ease: Expo.easeInOut
 });
 TweenMax.from(".box1", 1.5, {
    delay: 1,
    rotation: 90,
    opacity: 0,
    x: -100, ease: Expo.easeInOut
 });
 TweenMax.from(".box2", 1.5, {
    delay: 1.2,
    rotation: 180,
    opacity: 0,
    x: -400, ease: Expo.easeInOut
 });
 TweenMax.from(".box3", 1.5, {
    delay: 1,
    rotation: 190,
    opacity: 0,
    x: -600, ease: Expo.easeInOut
 });
 TweenMax.from(".pattern", 2, {
    delay: 0.2,
    width: 0,
    opacity: 0,
    ease: Elastic.easeInOut
 });
 
 TweenMax.from(".logo", 2, {
    delay: 0.2,
    y: 50,
    opacity: 0,
    ease: Expo.easeInOut
 });
 TweenMax.staggerFrom(".menu ul li", 0.8, {
    delay: 0.2,
    y: 50,
    opacity: 0,
    scale: 2,
    ease: Expo.easeInOut
 }, 0.2);
 
 TweenMax.from(".cart", 2, {
    delay: 0.2,
    y: 50,
    opacity: 0,
    rotation: 20,
    ease: Expo.easeInOut
 });
 
 TweenMax.staggerFrom(".media ul li", 2, {
    delay: 0.2,
    opacity: 0,
    scale: 0,
    ease: Expo.easeInOut
 }, 0.2);
 
 TweenMax.from(".content", 2, {
    delay: 0.2,
    y: 50,
    opacity: 0,
    ease: Expo.easeInOut
 });
 
 TweenMax.to(".box3", 7, {
    delay: 2.6,
    rotation: 360,
    repeat: -1,
    ease: Power0.easeNone
 });
 