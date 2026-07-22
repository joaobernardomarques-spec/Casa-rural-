/*=========================================
            CASA RURAL
            SCRIPT.JS
=========================================*/

/*================ LOADER ================*/

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if(loader){

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        },500);

    }

});

/*================ HEADER ================*/

const header = document.getElementById("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 80){

        header.classList.add("active");

    }else{

        header.classList.remove("active");

    }

});

/*================ MENU MOBILE ================*/

const menuBtn = document.getElementById("menu-btn");

const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click",()=>{

    navbar.classList.toggle("active");

    menuBtn.querySelector("i").classList.toggle("fa-bars");

    menuBtn.querySelector("i").classList.toggle("fa-xmark");

});

/*================ FECHAR MENU ================*/

document.querySelectorAll(".navbar a").forEach(link=>{

    link.addEventListener("click",()=>{

        navbar.classList.remove("active");

        menuBtn.querySelector("i").classList.remove("fa-xmark");

        menuBtn.querySelector("i").classList.add("fa-bars");

    });

});

/*================ FAQ ================*/

const faqs = document.querySelectorAll(".faq-item");

faqs.forEach(item=>{

    const question = item.querySelector(".faq-question");

    question.addEventListener("click",()=>{

        faqs.forEach(faq=>{

            if(faq !== item){

                faq.classList.remove("active");

                faq.querySelector(".faq-answer").style.maxHeight = null;

            }

        });

        item.classList.toggle("active");

        const answer = item.querySelector(".faq-answer");

        if(item.classList.contains("active")){

            answer.style.maxHeight = answer.scrollHeight + "px";

        }else{

            answer.style.maxHeight = null;

        }

    });

});

/*================ BOTÃO TOPO ================*/

const scrollTop = document.getElementById("scrollTop");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 400){

        scrollTop.classList.add("active");

    }else{

        scrollTop.classList.remove("active");

    }

});

scrollTop.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/*================ ANIMAÇÕES ================*/

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{

    threshold:.15

});

document.querySelectorAll(

    ".about-content,.number-box,.category-card,.brand-card,.promotion-card,.sexta-content,.pintinhos-content,.gallery-grid img,.testimonial-card,.faq-item,.contact-grid"

).forEach(el=>{

    el.classList.add("fade-up");

    observer.observe(el);

});

/*================ SCROLL SUAVE ================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

/*================ ANO AUTOMÁTICO ================*/

const year = document.getElementById("year");

if(year){

    year.textContent = new Date().getFullYear();

}

/*================ CONSOLE ================*/

console.log("%cCasa Rural","color:#2E7D32;font-size:22px;font-weight:bold;");

console.log("Site desenvolvido com HTML, CSS e JavaScript.");