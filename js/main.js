jQuery(function ($) {
    // Dropdown menu
    $('.sidebar-dropdown > a').click(function () {
        $('.sidebar-submenu').slideUp(200);
        if ($(this).parent().hasClass('active')) {
            $('.sidebar-dropdown').removeClass('active');
            $(this).parent().removeClass('active');
        } else {
            $('.sidebar-dropdown').removeClass('active');
            $(this).next('.sidebar-submenu').slideDown(200);
            $(this).parent().addClass('active');
        }
    });

    //toggle sidebar
    if($(window).width() <= 425) {
        $('.page-wrapper').toggleClass('pinned');
        $('#logo-header-menu').hide();
        $('#container-header-menu').removeClass('div-container-header-menu');
        $('#container-header-menu').addClass('div-container-header-menu-hide');
        $('#pin-sidebar').removeClass('div-btn-toggle-menu');
        $('#pin-sidebar').addClass('div-btn-toggle-menu-hide');
    }

    $('#toggle-sidebar').click(function () {
        $('.page-wrapper').toggleClass('toggled');
        $('.div-container-btn-hide-menu').css("visibility", "hidden");
        $('#overlay').css("visibility", "visible");
    });

    $('#hide-menu-sidebar').click(function () {
        $('.page-wrapper').toggleClass('toggled');
        $('.div-container-btn-hide-menu').css("visibility", "visible");
        $('#overlay').css("visibility", "hidden");
    });

    // bind hover if pinned is initially enabled
    if ($('.page-wrapper').hasClass('pinned')) {
        $('#sidebar').hover(
            function () {
                console.log('mouseenter');
                // $('.page-wrapper').addClass('sidebar-hovered');
            },
            function () {
                console.log('mouseout');
                $('.page-wrapper').removeClass('sidebar-hovered');
            }
        );
    }

    //Pin sidebar
    $('#pin-sidebar').click(function () {
        if ($('.page-wrapper').hasClass('pinned')) {
            // unpin sidebar when hovered
            $('.page-wrapper').removeClass('pinned');
            $('#sidebar').unbind('hover');
            $('#logo-header-menu').show();
            $('#container-header-menu').addClass('div-container-header-menu');
            $('#container-header-menu').removeClass('div-container-header-menu-hide');
            $(this).addClass('div-btn-toggle-menu');
            $(this).removeClass('div-btn-toggle-menu-hide');
        } else {
            $('.page-wrapper').addClass('pinned');
            $('#logo-header-menu').hide();
            $('#container-header-menu').removeClass('div-container-header-menu');
            $('#container-header-menu').addClass('div-container-header-menu-hide');
            $(this).removeClass('div-btn-toggle-menu');
            $(this).addClass('div-btn-toggle-menu-hide');
            $('#sidebar').hover(
                function () {
                    console.log('mouseenter');
                    // $('.page-wrapper').addClass('sidebar-hovered');
                },
                function () {
                    console.log('mouseout');
                    $('.page-wrapper').removeClass('sidebar-hovered');
                }
            );
        }
    });

    //toggle sidebar overlay
    $('#overlay').click(function () {
        $('.page-wrapper').toggleClass('toggled');
        $('.div-container-btn-hide-menu').css("visibility", "visible");
        $('#overlay').css("visibility", "hidden");
    });

    //switch between themes
    var themes =
        'default-theme legacy-theme chiller-theme ice-theme cool-theme light-theme';
    $('[data-theme]').click(function () {
        $('[data-theme]').removeClass('selected');
        $(this).addClass('selected');
        $('.page-wrapper').removeClass(themes);
        $('.page-wrapper').addClass($(this).attr('data-theme'));
    });

    // switch between background images
    var bgs = 'bg1 bg2 bg3 bg4';
    $('[data-bg]').click(function () {
        $('[data-bg]').removeClass('selected');
        $(this).addClass('selected');
        $('.page-wrapper').removeClass(bgs);
        $('.page-wrapper').addClass($(this).attr('data-bg'));
    });

    // toggle background image
    $('#toggle-bg').change(function (e) {
        e.preventDefault();
        $('.page-wrapper').toggleClass('sidebar-bg');
    });

    // toggle border radius
    $('#toggle-border-radius').change(function (e) {
        e.preventDefault();
        $('.page-wrapper').toggleClass('boder-radius-on');
    });

    //custom scroll bar is only used on desktop
    if (
        !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
        )
    ) {
        $('.sidebar-content').mCustomScrollbar({
            axis: 'y',
            autoHideScrollbar: true,
            scrollInertia: 300,
        });
        $('.sidebar-content').addClass('desktop');
    }  

    $('#btn-home').click(function(){
        $('#section-home').css('display', 'block');
        $('#section-assinatura').hide();
    });

    $('#btn-assinatura').click(function(){
        $('#section-assinatura').css('display', 'block');
        $('#section-home').hide();
    });

    $('.btn-menu').click(function(){
        $('.page-wrapper').toggleClass('toggled');
        $('.div-container-btn-hide-menu').css("visibility", "visible");
        $('#overlay').css("visibility", "hidden");
    });

});
