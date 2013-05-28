$(document).ready(function() {
    (function() {
        // Fill out our ratings
        $('.rating').each(function() {
            var $span = $(this).find('span');
            var rating = parseFloat($span.text());
            $span.remove();
            var starCount = '<span class="stars-earned">';
            for (var i = 1; i <= rating; i++) {
                starCount += "*";
            }
            starCount += '</span><span class="stars-unearned">';
            for (var i = rating; i <= 10; i++) {
                starCount += "*";
            }
            starCount += '</span>'
                + '<span class="stars-numerical">' + rating
                + '<span class="total">/10</span></span>'
                + '<a href="#">Rating Info</a>';
            $(this).html(starCount);
        });
    })();
    (function() {
        // Activate expand buttons
        $('.expand-button').click(function() {
            var $module = $(this).parent().parent();
            $module.find('.minimize').slideToggle();
        });
    })();
});
