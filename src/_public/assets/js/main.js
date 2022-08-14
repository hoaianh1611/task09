/* eslint-disable linebreak-style */

$(function () {
    slideinout();
});
  
function slideinout() {
    if (!$("#c-jsmainslider").length) return;
    var slider = $("#c-jsmainslider");
    slider.on("init", function () {
        slider.find(".slick-current").removeClass("slick-animated");
    });

    slider.slick({
        fade: true,
        dots: false,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 5000,
        speed: 2000,
        cssEase: "cubic-bezier(0.25, 0.1, 0.25, 1)",
        pauseOnFocus: false,
        pauseOnHover: false,
        swipe: false,
    });
    slider.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
        slick.$slides.eq(nextSlide).addClass("slick-animated");
        setTimeout(function () {
            slider
                .find(".slick-slide:not(.slick-current)")
                .removeClass("slick-animated");
        }, 1500);
    });
    setTimeout(function () {
        slider.slick("slickPlay");
        slider.find(".slick-current").addClass("slick-animated");
    }, 2000);
}

// Modal
$( document ).ready(function() {
    $(".c-modalopen").click(function(){
        $(this).parent().find(".c-modal").show();
        $("body").css("overflow", "hidden");
    });

    $(".c-modalclose").click(function(){
        $(this).parent().parent().parent().find(".c-modal").hide();
        $("body").css("overflow", "visible");
    });

    $(".c-modal").click(function(){
        $(".c-modal").hide();
        $("body").css("overflow", "visible");
    });

    $(".c-modalwrap").click(function(event){
        event.stopPropagation();
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

// Open Tab
function openTab(e, tabNo) {
    // Declare all variables
    var i, tabcontent, tabbtn;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("c-recruit__tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tabbtn = document.getElementsByClassName("c-recruit__tabcontrolbtn");
    for (i = 0; i < tabbtn.length; i++) {
        tabbtn[i].className = tabbtn[i].className.replace(" c-tabactive", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabNo).style.display = "block";
    e.currentTarget.className += " c-tabactive";
}


//function to open menu mobile
$(document).ready(function(){
    $(".c-breadcrumb__menuicon").click(function(){
        $(this).parent().find(".c-gnav").show();
        $(this).children().find(".c-menuopen").hide();
        $(this).children().find(".c-menuclose").show();
    });
});


//function to open menu mobile
$(document).ready(function(){
    $(".c-breadcrumb__menuicon").click(function(){
        console.log($(this).parent());
        console.log($(this).children());
        $(this).parent().find(".c-gnav").toggleClass("is-show");
        $(this).children().find(".c-menuopen").toggleClass("is-hide");
        $(this).children().find(".c-menuclose").toggleClass("is-show");
        $(".body").toggleClass("u-overflow");
        
    });

    $(".c-gnavmobile").find("li").click(function(){
        $(".c-gnavmobile").toggleClass("u-display--block");
        $(".c-gnavicon__open").toggleClass("u-display--block");
        $(".c-gnavicon__close").toggleClass("u-display--none");
    });
});
