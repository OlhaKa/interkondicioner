var $ = jQuery;

$(window).on('load', function () {
    $("#preloader").fadeOut("slow");
});

$(document).ready(function () {

    if ($(".infinity").length) {
        var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
        if (!isChrome) {
            document.getElementsByClassName('infinityChrome')[0].style.display = "none";
            document.getElementsByClassName('infinity')[0].style.display = "block";
        }
    }

    $('#tel').inputmask("+38 (999) 999 99 99");

    $('.top_banner_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        speed: 500,
        cssEase: 'ease-in-out',
        prevArrow: $('.prev_btn'),
        nextArrow: $('.next_btn'),
        vertical: true,
        autoplay: true,
        responsive: [
            {
                breakpoint: 575,
                settings: {
                    dots: false,
                    vertical: false,
                    adaptiveHeight: true,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    vertical: false,
                    adaptiveHeight: true
                }
            }
        ]
    });

    document.addEventListener('click',
        closeMenuOnClickOutside,
        hideOnClickOutside("#contact-form-header"),
        hideOnClickOutside(".search-wrap"),
        hideOnClickOutside(".phones-popup"));


    function closeMenuOnClickOutside(evt) {
        $('body').on('click', function (e) {
            const $menu = $('#navbar');
            if (!$menu.is(e.target)
                && $menu.has(e.target).length === 0) {
                $('.navbar-collapse').removeClass("show");
            }
        });
    }

    function hideOnClickOutside(blockName) {
        $('body').on('click', function (e) {
            if (!$(blockName).is(e.target)
                && $(blockName).has(e.target).length === 0
                && !$(event.target).is(".search-btn")
                && !$(event.target).is(".open_btn")) {
                $(blockName).slideUp();
            }
        });
    }

    $(".search-btn").click(function () {
        $(".search-wrap").slideToggle();
    });

    $(".openSubmenu").click(function () {
        $(this).next('ul').slideToggle();
        $(this).toggleClass('opened');
        $('.drop-menu ul').not($(this).next()).slideUp();
        $(".openSubmenu").not($(this)).removeClass('opened');
    });

    $(".form-btn").click(function () {
        $("#contact-form-header").slideToggle();
        $("#contact-form-header form").trigger("reset");
        $("#file").val("");
        $(".files-count").text('0');
    });

    $(".more_btn").click(function () {
        $(".phones-popup").slideToggle();
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
        nextArrow: $('.next'),
        focusOnSelect: true
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


    $('.about-slider').on('init', function () {
        console.log(123);
        if ($('.about-slider .slick-slide').length <= 1) {
            console.log(123);
            $('.about-slider .slick-dots').hide();
        }
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


    $('[data-fancybox="aboutGallery"]').fancybox();
    $('[data-fancybox="newsGallery"]').fancybox();
    $('[data-fancybox="docs"]').fancybox();

    // ----------- HEADER VIEW CHANGE---------
    changeHeaderView();

    function changeHeaderView() {
        var scroll = $(window).scrollTop();
        var width = $(window).width();
        if (scroll > 72 && width > 1199) {
            $('header').addClass('scrolled');
            $('main').addClass('withTopMargin')
        } else {
            $('header').removeClass('scrolled');
            $('main').removeClass('withTopMargin')
        }
    }

    $(window).scroll(function () {
        changeHeaderView();
        hideAnchor()
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
        $(".withSubmenu .nav-link").click(function () {
            $(this).toggleClass("active");
            $('.drop-menu').not($(this).next()).removeClass("show");
            $(this).next(".drop-menu").toggleClass("show");
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
        $(".withDropMenu").click(function (e) {
            if ($(this).has(e.target).length === 0) {
                $(this).children(".drop-menu").toggleClass("show");
                $(this).toggleClass("opened")
            }
        })
    }

    toggleSidebarMenuByLink();
    function toggleSidebarMenuByLink() {
        $(".withDropMenu>a").click(function (e) {
            e.preventDefault();
            $(this).siblings(".drop-menu").toggleClass("show");
            $(this).parent('li').toggleClass("opened")
        })
    }


    // ============ ANCHOR TO PAGE TOP =========
    const anchor = $('#anchor');

    hideAnchor();

    function hideAnchor() {
        var scroll = $(window).scrollTop();
        if (scroll < window.innerHeight || $('#navbar').hasClass('show')) {
            anchor.fadeOut();
        } else {
            anchor.fadeIn();
        }
    };

    anchor.click(function () {
        window.scrollTo(0, 0)
    });

    $('.navbar-toggler').click(function () {
        anchor.toggleClass('hide')
    });

    // ============ ANCHOR TO PAGE TOP end=========

    $('.filter-btn').click(function () {
        $('#sidebar').toggleClass('shown')
    });

    $(window).on("load resize", function (e) {
        insertHeaderTop();
        changeMobHeader();
        checkSubmenu();
        hideAboutBg();
    });


    function hideAboutBg() {
        if ($('.about').height() < 900) {
            $('.about').css({
                background: "linear-gradient(180deg, rgba(97, 194, 239, 0.4) 0%, rgba(255, 255, 255, 0.4) 44.6%)"
            })
        }
    }

    function checkSubmenu() {
        $('.openSubmenu').each(function () {
            if ($(this).next('ul').length < 1) {
                $(this).hide()
            }
        })
    };

    function insertHeaderTop() {
        if ($(window).width() <= 1180) {
            $('#location').insertBefore('ul.nav');
            $('.phones-block').insertBefore('.open-search');
            $('#tel_num2').prependTo('.main-phones')
        } else {
            $('.phones-block').appendTo('.header-top-right');
            $('#location').insertAfter('.phones-block');
            $('#tel_num2').appendTo('.priority-phones')
        }
    }

    function changeMobHeader() {
        if ($(window).width() <= 974) {
            $('#tel_num1').prependTo('.main-phones');
            $('#ask-btn').removeClass('gradient-btn')
        } else {
            $('#tel_num1').appendTo('.priority-phones');
            $('#ask-btn').addClass('gradient-btn')
        }
    }

    findActiveMenuItemOnLoad();

    function findActiveMenuItemOnLoad() {
        $('li.activeItem').parent().addClass('show');
        $('li.activeItem').closest('li.withDropMenu').addClass('opened')
    }

    function activateMap(map, frame) {
        $(map).click(function () {
            $(frame).css("pointer-events", "auto");
        });
    }

    activateMap('.map-wrap', '.map-wrap iframe');


    function disableMap(map, frame) {
        $(map).hover(function () {
            $(frame).css("pointer-events", "none");
        });
    }

    disableMap(".map-wrap", '.map-wrap iframe');

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

