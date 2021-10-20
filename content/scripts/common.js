//media query matches value
var mqWeb = window.matchMedia("screen and (min-width: 1200px)");
var mqNotWeb = window.matchMedia("screen and (max-width: 1199.98px)");
var mqPad = window.matchMedia("screen and (max-width: 991.98px)");
var mqMobile = window.matchMedia("screen and (max-width: 576.98px)");

$(document).ready(function () {
    if (mqPad.matches) {
        moNavTgl();
    }

    navBar();
    headerScl();
    modal();

    adjustFormElW();
    unloadFileName();
});

//control window resize trigger
$(window).resize(function() {
    if(this.resizeTO) {
        clearTimeout(this.resizeTO);
    }
    this.resizeTO = setTimeout(function() {
        $(this).trigger("resizeEnd");
    }, 0);
}); 

$(window).on("resizeEnd", function(){
    //media query matches value
    var mqWeb = window.matchMedia("screen and (min-width: 1200px)");
    var mqNotWeb = window.matchMedia("screen and (max-width: 1199.98px)");
    var mqPad = window.matchMedia("screen and (max-width: 991.98px)");
    var mqMobile = window.matchMedia("screen and (max-width: 576.98px)");

    if (mqPad.matches) {
        moNavTgl();
    }
});

//header scroll event
function headerScl() {
    $(window).scroll(function () {
        var windowST = $(this).scrollTop();

        if (windowST > 0) {
            $('header').addClass('fixed');
            // 1019 label 수정 
            if(window.innerWidth > 768) {
                $(".sub-menus").css('top', 110 + '%');
            }
        } else {
            $('header').removeClass('fixed');
             // 1019 label 수정 
            if(window.innerWidth > 768) {
                $(".sub-menus").css('top', 86 + '%');
            }
        }
    });
}

//mobile navigation event
function moNavTgl() {
    $('.tgl-nav-btn').off("click").on('click', function (e) {
        e.preventDefault();

        // 1019 label 수정
        $(this).toggleClass('on');
        $('html').toggleClass('full');
        $('nav').toggleClass('on');
    });
}

//common modal
function modal() {
    var modalArea = $('.modal-area');
    var modalWrap = $('.modal-wrap');
    var closeModal = $('.close-modal-btn');

    if (modalArea.is(':visible')) {
        $('html').addClass('full');
    } else {
        $('html').removeClass('full');
    }
    closeModal.on('click', function (e) {
        e.preventDefault();
        $('html').removeClass('full');
        modalArea.fadeOut(250);
    });
    modalArea.on('click', function (e) {
        if (!$(e.target).closest(modalWrap).length) {
            $('html').removeClass('full');
            $(this).fadeOut(150);
        }
    });
}

//onclick modal
function modalOpen(odj) {
    $('html').addClass('full');

    var thisObjModal = $(odj).data('objmodal');
    var objModal = $('#' + thisObjModal)

    objModal.fadeIn(250);
}

//form
function adjustFormElW() {
    $('.form-input-btn').siblings('.form-el').addClass('with_form-input-btn');
}

function unloadFileName() {
    $('.form-file-btn').find('input[type="file"]').change(function (e) {
        var fileName = e.target.files[0].name;
        $(this).parents().siblings('.form-input').val(fileName);
    });
}

//nav-bar
function navBar() {
    let subBtn = $(".nav-menu-list li.sub_menu");
    let subMenu = $(".sub-menus");
    subMenu.hide();
    if (window.innerWidth > 750) {
        subBtn.hover(function () {

            $(this).find('.sub-menus').fadeIn(300);
            // subMenu.stop().fadeIn(300);
        });

        subBtn.mouseleave(function () {
            subMenu.stop().fadeOut(300);
        });
    } else {
        subBtn.on('click',function(){
            $(this).find('.sub-menus').fadeToggle(300);
            // $(this).find('.sub-menus').slideToggle(300);
        });
    }
}