$(document).ready(function(){

        $('.slider__items').slick({
                prevArrow: '<button type="button" class="slick-arrow slick-prev">1</button>',
                nextArrow: '<button type="button" class="slick-arrow slick-next">2</button>',
                infinite: false,
                autoplay: true,
                autoplaySpeed: 5000,
                dots: true,
        });

});