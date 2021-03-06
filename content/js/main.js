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
            starCount += '</span>' + '<span class="stars-numerical">' + rating + '<span class="total">/10</span></span>' + '<a href="#">Rating Info</a>';
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
    (function() {
        var draggedElement = null;
        // Handle movie-module drag events
        $('.movie-module').each(function() {
            $(this).bind('dragstart', function(e) {
                $(this).addClass('dragging');
                draggedElement = this;
                var eventDataTransfer = e.originalEvent.dataTransfer;
                eventDataTransfer.effectAllowed = 'move';
                eventDataTransfer.setData('text/html', this.innerHTML);
            }).bind('dragenter dragleave', function() {
                $(this).toggleClass('dragover');
            }).bind('dragover', function(e) {
                if (e.preventDefault) {
                    e.preventDefault();
                }
            }).bind('drop', function(e) {
                $(this).removeClass('dragging dragover');
                if (e.stopPropegation) {
                    e.stopPropegation();
                }
                if (draggedElement != this) {
                    draggedElement.innerHTML = this.innerHTML;
                    this.innerHTML = e.originalEvent.dataTransfer.getData('text/html');
                }
                return false;
            }).bind('dragend', function() {
                $(this).removeClass('dragging');
            });
        });
    })();
});
