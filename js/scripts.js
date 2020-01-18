$(document).ready(() => {

    $('.slider').slick();

    let isotope = $('.portfolio').isotope({
        itemSelector: '.portfolio__item',
        percentPosition: true,
        masonry: {
            columnWidth: '.sizer',
            gutter: '.sizer'
        }
    });

    $('.filter__link').on('click', (e) => {
        e.preventDefault();
        let filter = $(e.target).attr('data-filter');
        filter = filter == '*' ? filter : '.' + filter;

        isotope.isotope({ 
            filter: filter 
        });

        $('.filter__link').removeClass('active');
        $(e.target).addClass('active');
        
    })

    $('.toggler').on('click', (e) => {
        e.preventDefault();

        $('body').toggleClass('menu-opened');
    })

    $('.menu__link').on('click', () => {
        $('body').removeClass('menu-opened');
    })

    let lastY = 0;

    $('.menu').on('touchstart', (e) => {
        lastY = e.originalEvent.touches[0].clientY;
    });

    $('.menu').on('touchend', function(e) {
        console.log(e.originalEvent.changedTouches);
        let currentY = e.originalEvent.changedTouches[0].clientY;
        if(currentY < (lastY - 30)) {
            $('body').removeClass('menu-opened');
        }
    })

    // document.getElementById('menu', function(e) {

    // })

})