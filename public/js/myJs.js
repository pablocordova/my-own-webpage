var video = $('#video-welcome')[0];
video.loop = true;
video.load();

/**
 * To animate the scroll when click in one secction of navbar
 */
$(document).ready(function() {
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            // It seems like 800 ms is optimum to the movement
            $('html, body').animate({
                scrollTop: $(hash).offset().top    
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });
});
