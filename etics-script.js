$(document).ready(function() {
    $('.etics-system_item').hover(function() {
        // Get the index of the hovered .etics-system_item
        var index = $('.etics-system_item').index(this) + 1;

        // Toggle the .is-active class on the hovered .etics-system_item
        $(this).toggleClass('is-active');

        // Toggle the .is-active class on the corresponding .etics-system_item-icon
        $('.etics-system_item-icon.is-' + index).toggleClass('is-active');
    });
});
