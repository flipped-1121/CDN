var arr = document.getElementsByClassName("recent-post-item");
for(var i = 0;i<arr.length;i++){
    arr[i].classList.add("wow");
    arr[i].classList.add("animate__zoomIn");
  }
var arr = document.getElementsByClassName("card-widget");
for(var i = 0;i<arr.length;i++){
    arr[i].classList.add("wow");
    arr[i].classList.add("animate__slideInRight");
  }
wow = new WOW({
  boxClass: 'wow',
  animateClass: 'animate__animated',
  offset: 0,
  mobile: true,
  live: true
})
wow.init();
