var arr = document.getElementsByClassName("card-img");
for (var i = 0; i < arr.length; i++) {
    arr[i].classList.add("wow");
    arr[i].classList.add("animate__flipInX");
}

var arr = document.getElementsByClassName("macbook");
for (var i = 0; i < arr.length; i++) {
    arr[i].classList.add("wow");
    arr[i].classList.add("animate__slideInRight");
}

var arr = document.getElementsByClassName("phone");
for (var i = 0; i < arr.length; i++) {
    arr[i].classList.add("wow");
    arr[i].classList.add("animate__slideInLeft");
}
    wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animate__animated',
        offset: 0,
        mobile: false,
        live: true
    })
wow.init();
