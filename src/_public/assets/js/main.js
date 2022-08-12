/* eslint-disable linebreak-style */

// $(function () {
//     slideinout();
// });

// function slideinout() {
//     if (!$("#c-slider").length) return;
//     var slider = $("#c-slider");
//     slider.on("init", function () {
//         slider.find(".slick-current").removeClass("slick-animated");
//     });

//     slider.slick({
//         fade: true,
//         dots: false,
//         arrows: false,
//         autoplay: false,
//         autoplaySpeed: 5000,
//         speed: 2000,
//         cssEase: "cubic-bezier(0.25, 0.1, 0.25, 1)",
//         pauseOnFocus: false,
//         pauseOnHover: false,
//         swipe: false,
//     });
//     slider.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
//         slick.$slides.eq(nextSlide).addClass("slick-animated");
//         setTimeout(function () {
//             slider
//                 .find(".slick-slide:not(.slick-current)")
//                 .removeClass("slick-animated");
//         }, 1500);
//     });
//     setTimeout(function () {
//         slider.slick("slickPlay");
//         slider.find(".slick-current").addClass("slick-animated");
//     }, 2000);
// }

// Modal
$( document ).ready(function() {
    $(".c-modalopen").click(function(){
        console.log($(this).parent().find(".c-modal"));
        console.log("click");
        $(this).parent().find(".c-modal").show();
        $("body").css("overflow", "hidden");
    });

    $(".c-modalclose").click(function(){
        $(this).parent().parent().parent().find(".c-modal").hide();
        $("body").css("overflow", "visible");
    });

    $(".c-modal").click(function(event){
        event.stopPropagation();
        $(".c-modal").hide();
        $("body").css("overflow", "visible");
    });
});


//Active link
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");
        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove("is-active");
                if(document.querySelector("header nav a[href*=" + id + "]")){
                    document.querySelector("header nav a[href*=" + id + "]").classList.add("is-active");
                }
                
            });
        }
    });
};

// $(".u-anchor").click(function(){
//     $(".c-active").removeClass("c-active");
//     $(this).addClass("c-active");
// });

// Tab




