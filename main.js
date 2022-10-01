
let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.add('active')
}

document.querySelector('#nav-close').onclick = () =>{
    navbar.classList.remove('active')
}

let searchbox = document.querySelector('.search-form')

 document.querySelector('#search-btn').onclick = () =>{
    searchbox.classList.add('active')
 }
document.querySelector('.search-form')
document.querySelector('#close-search').onclick = () =>{
    searchbox.classList.remove('active')
}

window.onscroll = () =>{
       header.classList.add('active');
    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
}


window.onload = () =>{

 if(window.scrollY > 0){
     document.querySelector('.header').classList.add('active');
 }else{
     document.querySelector('.header').classList.remove('active');
 }
}



















var swiper = new Swiper(".home-slider",{
    loop:true,
    grabCursor:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".product-slider",{
    loop:true,
    grabCursor:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});


var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});

var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});
var swiper = new Swiper(".blogs-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});
var swiper = new Swiper(".clients-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});





// let navbar = document.querySelector('.header .navbar');

// document.querySelector('#menu-btn').onclick = () =>{
//     navbar.classList.add('active');
// }