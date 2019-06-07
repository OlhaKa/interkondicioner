$(document).ready(function () {
    $('.top_banner_slider').slick({
        // autoplay: true,
        dots: true,
        infinite: true,
        speed: 500,
        cssEase: 'ease-in-out',
        prevArrow: $('.prev_btn'),
        nextArrow: $('.next_btn'),
    });

    $(".search-btn").click(function(){
        $(".search-wrap").slideToggle();
    });

    $(".form-btn").click(function(){
        $(".contact-form").slideToggle();
    });

    $(".current-year").text((new Date).getFullYear());

    $(".product-description").width($("#product").width());

    $('.preview-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.thumb-slider'
    });
    $('.thumb-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.preview-slider',
        arrows: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next')
    });

    // var uploadField = document.getElementById("file");
    // uploadField.onchange = function() {
    //     if(this.files[0].size > 10000000){
    //         $(".alert-message span").show();
    //         this.value = "";
    //     } else {
    //         $(".alert-message span").hide();
    //         $(".files-count").text(this.files.length);
    //     }
    // };


});

