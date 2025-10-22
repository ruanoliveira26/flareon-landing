$(document).ready(function() {
    // Hover nos botões custom
    $('.btn-custom').hover(
        function() {
            $(this).css('background-color', '#ff7b50'); // laranja mais claro
        },
        function() {
            $(this).css('background-color', '#f55a2a'); // volta ao normal
        }
    );

    $('.btn-outline-custom').hover(
        function() {
            $(this).css({'background-color': '#f55a2a', 'color': 'white'});
        },
        function() {
            $(this).css({'background-color': 'transparent', 'color': '#f55a2a'});
        }
    );

    // Smooth scroll para links do menu
    $('.navbar a.nav-link').click(function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top - 70
        }, 800);
    });
});
