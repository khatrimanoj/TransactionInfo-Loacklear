/* ------------------ menu js -----------------*/
$(window).on('resize', function () {
    if ($(window).width() <= 767) {
      $('main .wrapper aside .sidebar').prepend($('.main-content nav .dropdown')); // append -> object
    }
    else {
        $('main .wrapper .main-content nav .container').append($('main .wrapper aside .sidebar .dropdown')); // append -> object
    }
})

$(function () {
    if ($(window).width() <= 767) {
        $('main .wrapper aside .sidebar').prepend($('.main-content nav .dropdown')); // append -> object
    }

    $('#burger').on('click', function() {
        $(this).toggleClass('active');
        $('main .wrapper aside').toggleClass('active');
    });
});