$(document).ready(function () {
    $('.hover-spin').hover(function () {
        $(this).addClass('fa-spin');
    }, function () {
        $(this).removeClass('fa-spin');
    });
});
