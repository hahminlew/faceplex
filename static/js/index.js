window.HELP_IMPROVE_VIDEOJS = false;


$(document).ready(function() {
    // Check for click events on the navbar burger icon

    var options = {
			slidesToScroll: 1,
			slidesToShow: 1,
			loop: true,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 5000,
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);
	
    bulmaSlider.attach();

    // Play only the videos currently on screen. iOS Safari fails to render
    // when many videos autoplay at once, so off-screen ones stay paused.
    // Runs after bulmaCarousel.attach so the cloned slides are covered too.
    var videos = document.querySelectorAll('video');
    if ('IntersectionObserver' in window) {
        var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                var video = entry.target;
                if (entry.isIntersecting) {
                    var playing = video.play();
                    if (playing && playing.catch) playing.catch(function() {});
                } else {
                    video.pause();
                }
            });
        }, { threshold: 0.25 });
        videos.forEach(function(video) { observer.observe(video); });
    } else {
        videos.forEach(function(video) { video.autoplay = true; video.play(); });
    }

})
