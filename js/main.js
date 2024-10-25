"use strict"
// /* for write animation in (content header) and move (Cursor with writing Words) */
//*It does not use an external library; it relies only on (js file)

const texts = ["Larry Daniels", "Developer", "Designer"];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';
let isDeleting = false;

function type() {
    currentText = texts[count];

    if (isDeleting) {
        letter = currentText.slice(0, --index);
    } else {
        letter = currentText.slice(0, ++index);
    }

    document.getElementById('text').textContent = letter;

    if (!isDeleting && letter.length === currentText.length) {
        setTimeout(() => isDeleting = true, 1000); // Wait before deleting
    } else if (isDeleting && letter.length === 0) {
        isDeleting = false;
        count++;
        if (count === texts.length) {
            count = 0;
        }
    }

    const speed = isDeleting ? 100 : 150; // Adjust speed for typing/deleting
    setTimeout(type, speed);
}

type();

//!=================================================================================
// for about-Section of progress-bar  (Using Waypoints Library)

document.addEventListener('DOMContentLoaded', function () {
    const progressBars = document.querySelectorAll('.skills-progress span');

    function updateProgressBars(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                progressBar.style.width = progressBar.getAttribute('data-value');
                observer.unobserve(progressBar);
            }
        });
    }

    const observer = new IntersectionObserver(updateProgressBars, {
        threshold: 0.7
    });

    progressBars.forEach(progressBar => {
        observer.observe(progressBar);
    });
});



//!=================================================================================
// * for show images in (portfolio section) using (glightbox library)

document.addEventListener('DOMContentLoaded', function () {
    const lightbox = GLightbox({
        selector: '.item-img a[href$=".jpg"]'
    });
});

//!=================================================================================

// * for exchange between images of (portfolio section) .. when you click on different taps (All..brand..design..graphic)
document.addEventListener('DOMContentLoaded', function () {
    // Initialize Isotope
    var $grid = document.querySelector('.gallery');
    var iso = new Isotope($grid, {
        itemSelector: '.items',
        layoutMode: 'fitRows'
    });

    // Filter items on filter link click
    var filterButtons = document.querySelectorAll('.filtering span');
    filterButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Remove 'active' class from all buttons
            filterButtons.forEach(function (btn) {
                btn.classList.remove('active');
            });
            // Add 'active' class to the clicked button
            this.classList.add('active');
            // Get the filter value from the data-filter attribute
            var filterValue = this.getAttribute('data-filter');
            // Use Isotope's filter method
            iso.arrange({ filter: filterValue });
        });
    });
});

//!=================================================================================
//^ for swiping cards of Testimonials Section (using Swiper.js library)

document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.init-swiper', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        speed: 1000,
        spaceBetween: 30,
        effect: 'slide',
    });
});



//!=================================================================================

//*using Based on two libraries are (jQuery(Counter-UP) && Waypoint)
// for( Statistics-by-Numbers) counter 

$(document).ready(function () {
    function startCounter() {
        $('.counter').each(function () {
            var $this = $(this);
            $this.counterUp({
                delay: 4,  // تقليل الوقت بين كل عددة ليكون أكثر سلاسة
                time: 2000  // الوقت الإجمالي للعد (4 ثواني)
            });
        });
    }


    var waypoint = new Waypoint({
        element: document.querySelector('.numbers'),
        handler: function (direction) {
            startCounter();
            this.destroy();
        },
        offset: '80%'
    });
});

//!======================================================================================

// ^ for reset load page once again and stop on the same section when you reset load the page لما تعيد تحميل الصفحة مرة اخري هتفضل ع نفس جزء

// تخزين الموقع الحالي عند التمرير
document.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    sessionStorage.setItem('scrollPosition', scrollPosition);
});

// استعادة الموقع عند تحميل الصفحة
window.addEventListener('load', () => {
    const savedPosition = sessionStorage.getItem('scrollPosition');
    if (savedPosition !== null) {
        window.scrollTo(0, parseInt(savedPosition));
    }
});


//!======================================================================================
//  *######### just for preload when you preload this website .. it will appear load-circle 

document.addEventListener('DOMContentLoaded', function () {
    // تقليل الوقت الظاهر للـ preloader
    setTimeout(function () {
        document.querySelector('.loading').classList.add('loading-end');
        // document.querySelector('.content').style.display = 'block';
        // إخفاء الـ preloader بعد فترة قصيرة
        setTimeout(function () {
            document.querySelector('.loading').style.display = 'none';
        }, 300); // تقليل هذا الوقت لجعل إخفاء الـ preloader أسرع
    }, 500); // تقليل هذا الوقت لجعل عرض الـ preloader أسرع
});


//!======================================================================================
//  Animation on scroll function and init (using Aos Library)

function aosInit() {
    AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });
}
window.addEventListener('load', aosInit);

//!======================================================================================


