var modalBackground = $('#modalBackground');

$(window).on('load', function() {
    modalBackground.hide();
    setTimeout(function() {
        modalBackground.show();
    }, 1000);
});

modalBackground.on('click', function() {
    modalBackground.hide();
});
