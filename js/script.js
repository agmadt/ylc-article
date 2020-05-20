$(document).ready(function() {
    var sidebarEl = $('.sidebar');
    var sidebarPosition = sidebarEl.offset();


    $(window).scroll(function() {
        if ($('html').scrollTop() > sidebarPosition.top) {

            if ($('html').scrollTop() > $('main').outerHeight() - $('footer').outerHeight()) {
                return;
            } else {
                sidebarEl.css({
                    'top':  + $('html').scrollTop() - sidebarPosition.top + 20,
                    'position': 'relative'
                })
            }
        } else {
            sidebarEl.css({
                'position': 'static'
            })
        }
    })

    $(window).resize(function() {
        var windowWidth = $(window).width();


        if (windowWidth < 769 && windowWidth > 320) {
            var featureImageNegativeMargin = (windowWidth - 288) / 2;
            $('.feature-image').css({
                'margin-left': -featureImageNegativeMargin,
                'margin-right': -featureImageNegativeMargin
            })
        } else {
            $('.feature-image').css({
                'margin-left': 0,
                'margin-right': 0
            })
        }
    })

});