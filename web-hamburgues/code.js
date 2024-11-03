var swiper = new Swiper(".mySwiper-1",{
    slidesPerView:1,
    spaceBetween: 30,
    loop:true,
    pagination:{
        el:".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    }
})

var swiper = new Swiper(".mySwiper-2",{
    slidesPerView:3,
    spaceBetween: 20,
    loop:true,
    loopFillGropuwithBlank:true,
    navigation: {
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },
    breakpoints: {
        0:{
            slidesPerView:1,
        },
        520:{
            slidesPerView:2,
        },
        950:{
            slidesPerView:3,
        }
    }
})

const tapInputs = document.querySelectorAll(".tabInput");

tapInputs.forEach(input=>{
    input.addEventListener("change",()=>{
        let id = input.value;
        let thisSwiper = document.getElementById("swiper" + id);
        thisSwiper.swiper.update();
    })
})