$(document).ready(function(){

    //Change color navbar when scrolling

    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll>50){
            $(".nav").css("background", "#fff");
            $(".nav").css("box-shadow","rgba(0,0,0,0.1) 0px 4px 12px");
        }
        else{
            $(".nav").css("background", "transparent");
            $(".nav").css("box-shadow","none");

        }
    })

    //Mobile Navbar
    const mobile = document.querySelector(".burger-btn");
    const mobileLink = document.querySelector(".nav-menus");

    mobile.addEventListener("click",function(){
        mobile.classList.toggle("is-active");
        mobileLink.classList.toggle("active");
    })

    // close menu when click

    mobileLink.addEventListener("click",function(){
        const menuBars = document.querySelector(".is-active");
        if(window.innerWidth <=768 && menuBars){

            mobile.classList.toggle("is-active");
            mobileLink.classList.remove("active");

        }
    })

    // Heart

    $(".heart").on("click",function(){
        $(this).toggleClass("is-active");
    });

    //filter

    
    $(".btn-filter").on("click",function(){
        $(this).toggleClass("control-active");
    });

    var mixer = mixitup('.product-list',{
        selectors:{
            target:'product-card'
        },
        animation:{
            duration:300
        }
    });




    var swiper = new Swiper(".mySwiper",{
        loop:true,
        autoplay:{
            display:2500,
            disableOnInteraction:false,
        },
        slidesPerView:1,
        spaceBetween:10,
        pagination:{
            el:".swiper-pagination",
            clickable:true,
        },
        breakpoints:{
            640:{
                slidesPerView:2,
                spaceBetween:20,
            },
            768:{
                slidesPerView:3,
                spaceBetween:40,
            },
            1024:{
                slidesPerView:3,
                spaceBetween:50,
            }
        }
    })
})


//

const elem = document.querySelector(".product-list");
const iso = new Isotope (elem,{
    ItemSelector:".product-card",
    layoutMode:"fitRows",
});
const filterElem = document.querySelector("#filter");
filterElem.addEventListener("click",function(event){
    if(!matchesSelector(event.target,"button")){
        return;
    }
    var filterValue = event.target.getAttribute("data-filter");
    iso.arrange({filter:filterValue});
});

// change is-checked class on buttons

const buttonGroups = document.querySelector(".btn-filter");
for(var i = 0, len = buttonGroups.length; i<len;i++){
    var buttonGroup=buttonGroups[i];
    radioButtonGroup(buttonGroup);
}
function radioButtonGroup(buttonGroup){
    buttonGroups.addEventListener("click",function(event){
        if(!matchesSelector(event.target,"button")){
            return;
        }
        buttonGroup.querySelector(".is-checked").classList.remove("is-checked");
        event.target.classList.add(".is-checked");

    });
}