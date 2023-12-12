/*=============== SEARCH ===============*/
const searchButton = document.getElementById('search-button'),
searchClose = document.getElementById('search-close'),
searchContent = document.getElementById('search-content')

/*===============SHOW SEARCH ===============*/
if(searchButton){
    searchButton.addEventListener('click', () => {
        searchContent.classList.add('show-search')
    })
}
/*=============== HIDESEARCH ===============*/
if(searchClose){
    searchClose.addEventListener('click', ()=> {
        searchContent.classList.remove('show-search')
    })
}


/*=============== LOGIN ===============*/
const loginButton = document.getElementById('login-button'),
loginClose = document.getElementById('login-close'),
loginContent = document.getElementById('login-content')

/*===============SHOW SEARCH ===============*/
if(loginButton){
    loginButton.addEventListener('click', () => {
        loginContent.classList.add('show-login')
    })
}
/*=============== HIDESEARCH ===============*/
if(loginClose){
    loginClose.addEventListener('click', ()=> {
        loginContent.classList.remove('show-login')
    })
}


/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () => {
    const header = document.getElementById('header')
    //when the scrfoll is greater than 50 viewport height
    this.scrollY >= 40 
    ? header.classList.add('shadow-header')
    :header.classList.remove('shadow-header')
}
window.addEventListener('scroll',shadowHeader )


/*=============== HOME SWIPER ===============*/
let swiperHome = new Swiper('.home__swiper', {
    loop: true,
    spaceBetween: 10,
    grabCursor:true,
    slidesPerView:'auto',
    centeredSlides:'auto',

    autoplay:{
        delay:3000,
        disableOnInteraction:false,
    },
    breakpoints:{
        1220:{
            spaceBetween: 10,
        }
    }

  
  });

/*=============== FEATURED SWIPER ===============*/

let swiperFeatured = new Swiper('.featured__swipper', {
    loop: true,
    spaceBetween: 16,
    grabCursor:true,
    slidesPerView:'auto',
    centeredSlides:'auto',

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

    breakpoints:{
        1150:{
            slidesPerView: 4,
            centeredSlides: false

        }
    }

  
  });
/*=============== NEW SWIPER ===============*/

let swiperNew = new Swiper('.new__swiper', {
    loop: true,
    spaceBetween: 16,
    slidesPerView:'auto',


    autoplay:{
        delay:5000,
        disableOnInteraction:false,
    },
    breakpoints:{
        1150:{
            slidesPerView:3,
            
        }
    }
  });

  let swiperNew2 = new Swiper('.new__swiper-2', {
    loop: true,
    spaceBetween: 16,
    slidesPerView:'auto',


    autoplay:{
        delay:7000,
        disableOnInteraction:false,
    },
    breakpoints:{
        1150:{
            slidesPerView:3,
        }
    }
  });

/*=============== TESTIMONIAL SWIPER ===============*/


  let swiperTestimonials = new Swiper('.testimonial__swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor:true,
    slidesPerView:'auto',
    centeredSlides:'auto',

    autoplay:{
        delay:4000,
        disableOnInteraction:false,
    },
    breakpoints:{
        1150:{
            slidesPerView:3,
            centeredSlides:false
        }
    }
  });

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    window.scrollY >= 350 ? scrollUp.classList.add('scroll-show')
                        :scrollUp.classList.remove('scroll-show')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id')
        sectionsClass = document.querySelector('.nav__menu a[href*='+sectionId+ ']')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }
        else{
            sectionsClass.classList.remove('active-link')
        }

    })
}
window.addEventListener('scroll',scrollActive)


/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'
// Preference for Dark Theme is saved in the localStorage
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-fill' : 'ri-sun-line'

if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme) 
    themeButton.classList[selectedIcon === 'ri-moon-fill' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // Save in Local Storage
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())

})



/*=============== SCROLL REVEAL ANIMATION ===============*/
