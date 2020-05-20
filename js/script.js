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

});