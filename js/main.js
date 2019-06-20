$(document).ready(function () {
    $('.top_banner_slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        cssEase: 'ease-in-out',
        prevArrow: $('.prev_btn'),
        nextArrow: $('.next_btn'),
    });

    $(".search-btn").click(function () {
        $(".search-wrap").slideToggle();
    });

    $(".form-btn").click(function () {
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

    $('.news-img').on('init', function () {
        if ($('.news-img .slick-slide').length <= 2) {
            $('.slick-dots').hide();
        }
    });
    $('.news-img').slick({
        slidesToShow: 2,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,

                }
            }
        ]
    });

    $('.about-slider').slick({
        slidesToShow: 3,
        prevArrow: $('.about-slider-arrows .prev'),
        nextArrow: $('.about-slider-arrows .next'),
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,

                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    arrows: false,
                }
            }
        ]
    });

    $(".review-thumb").fancybox({
        fitToView: false,
        maxWidth: "100%",
        width: "1200"
    });

    // ----------- HEADER VIEW CHANGE---------
    changeHeaderView();

    function changeHeaderView() {
        var scroll = $(window).scrollTop();
        if (scroll > 140) {
            $('header').addClass('scrolled');
        } else {
            $('header').removeClass('scrolled');

        }
    }

    $(window).scroll(function () {
        changeHeaderView();
    });


    hideMenuArrows();

    function hideMenuArrows() {
        var menuItems = $('.header-btm .nav').children();
        $.each(menuItems, function () {
            if ($(this).children(".drop-menu").length) {
                $(this).addClass('withSubmenu')
            }
        });
    }


    toggleDropMenu();
    function toggleDropMenu() {
        $(".withSubmenu").click(function () {
            $(this).children(".nav-link").toggleClass("active");
            $(this).children(".drop-menu").toggleClass("show")
        })
    }

    // ----------- CATALOG SIDEBAR ------------
    hideSidebarArrows();

    function hideSidebarArrows() {
        var menuItems = $('.components').children();
        $.each(menuItems, function () {
            if ($(this).children(".drop-menu").length) {
                $(this).addClass('withDropMenu')
            }
        });
    }

    toggleSidebarMenu();
    function toggleSidebarMenu() {
        $(".withDropMenu").click(function () {
            $(this).children(".drop-menu").toggleClass("show");
            $(this).toggleClass("opened")
        })
    };


    $('.filter-btn').click(function () {
        $('#sidebar').toggleClass('shown')
    });

    $(window).on("load resize",function(e){
        insertHeaderTop ();
    });


    function insertHeaderTop() {
        if ($(window).width() <= 1180) {
            $('#location').insertBefore('ul.nav');
            $('.phones-block').insertBefore('.open-search');
            $('#ask-btn').insertAfter('ul.nav');
        } else {
            $('.phones-block').appendTo('.header-top-right');
            $('#location').insertAfter('.phones-block');

            $('#ask-btn').insertAfter('.open-search');
        }
    }


    // --- FILE UPLOAD-------
    var uploadField = document.getElementById("file");
    uploadField.onchange = function () {
        if (this.files[0].size > 10000000) {
            $(".alert-message span").show();
            this.value = "";
        } else {
            $(".alert-message span").hide();
            $(".files-count").text(this.files.length);
        }
    };
});

