//  ============ Show Menu ============ //
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    // validate that variables exist 
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            // we add the show-menu class to the div tag with the nav_menu class
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

//  ============  remove Menu mobile ============ //
const navLink = document.querySelectorAll('.nav_link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // when we click on each nav_link , we remove the show-menu class
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

//  ============ change background header ============ //
const scrollHeader = () => {
    const nav = document.querySelector('header')
    window.addEventListener('scroll', () => {
        if (this.scrollY >= 5) {
            nav.classList.add("scrollHeader");
        } else { nav.classList.remove('scrollHeader'); }
    })
};

scrollHeader();


//  ============ Show Scrool Top ============ //
function scrollTop() {
    const scrollTop = document.getElementById('scroll-top')

    //  ============ when the scroll is higher than  viewport height , add the show-scroll class to the tag with the scroll-top class ============ //
    if (this.scrollY >= 560) scrollTop.classList.add('show-scroll');
    else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

//  ============ Dark Light Theme ============ //
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-toggle-right'

//Previus selected topic (if user selected)//
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//we obtain the current theme that the interface has by validating the dark-theme//
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
// const getCurrentIcon = () => themeButton.body.classList.contains(iconTheme) ? 'bx-toggle-left' : 'bx-toggle-right';

// we validate if the user previously chose a topic //
if (selectedTheme) {
    document.body.classList[selectedTheme == 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon == 'bx-toggle-left' ? 'add' : 'remove'](iconTheme)
}

//active / deactive the theme manually with the button //
themeButton.addEventListener('click', () => {
    // add or remove the dark/icon theme 
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // we save the theme and the current icon that the user chose//
    localStorage.setItem('selected-theme', getCurrentTheme())
    // localStorage.setItem('selected-icon', getCurrentIcon())
    //
});

//  ============ Slideshow ============ //
var slideIndex = 1;
showSlides(slideIndex);

// next/previos controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// tumbnail image controls

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");

    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += "active"

}

//--------------------- SCROLL Reveal ------------------------//
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(`.home, .about_data, .about_img, .services_content, .products, .size_data, .size_img, .contact_data, .contact_button, .footer_content, .detail_img, .detail_data`, {
    interval: 200
})

