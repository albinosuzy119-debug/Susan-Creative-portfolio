
// =========================
// MOBILE MENU
// =========================


const hamburger = document.querySelector(".hamburger");

const navLinks = document.querySelector(".nav-links");

const menuIcon = document.querySelector(".hamburger i");



hamburger.addEventListener("click", () => {


    navLinks.classList.toggle("active");


    if(navLinks.classList.contains("active")){

        menuIcon.classList.remove("fa-bars");

        menuIcon.classList.add("fa-xmark");

    }

    else{

        menuIcon.classList.remove("fa-xmark");

        menuIcon.classList.add("fa-bars");

    }


});





// =========================
// CLOSE MENU AFTER CLICK
// =========================


const links = document.querySelectorAll(".nav-links a");


links.forEach(link => {


    link.addEventListener("click",()=>{


        navLinks.classList.remove("active");


        menuIcon.classList.remove("fa-xmark");

        menuIcon.classList.add("fa-bars");


    });


});







// =========================
// SCROLL REVEAL ANIMATION
// =========================


const revealElements = document.querySelectorAll(".reveal");



function revealOnScroll(){


    revealElements.forEach(element=>{


        const elementPosition = element.getBoundingClientRect().top;


        const screenPosition = window.innerHeight - 100;



        if(elementPosition < screenPosition){


            element.classList.add("active");


        }


    });


}



window.addEventListener("scroll", revealOnScroll);



// Run once when page loads

revealOnScroll();







// =========================
// CHANGE HEADER ON SCROLL
// =========================


const header = document.querySelector("header");



window.addEventListener("scroll",()=>{


    if(window.scrollY > 50){


        header.style.background="rgba(255,255,255,0.98)";


    }


    else{


        header.style.background="rgba(255,255,255,0.9)";


    }


});