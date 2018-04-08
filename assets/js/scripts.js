// jQuery Selections
var $html = $('html'),
$container = $('#container'),
$prompt = $('#prompt'),
$toggle = $('#toggle'),
$about = $('#about'),
$scene = $('#scene');

// Hide browser menu.
(function() {
setTimeout(function() {
    window.scrollTo(0, 0);
}, 0);
})();

// Setup FastClick.
FastClick.attach(document.body);

// Add touch functionality.
if (Hammer.HAS_TOUCHEVENTS) {
$container.hammer({
    drag_lock_to_axis: true
});
_.tap($html, 'a,button,[data-tap]');
}

// Add touch or mouse class to html element.
$html.addClass(Hammer.HAS_TOUCHEVENTS ? 'touch' : 'mouse');

// Resize handler.
(resize = function() {
$scene[0].style.width = window.innerWidth + 'px';
$scene[0].style.height = window.innerHeight + 'px';
if (!$prompt.hasClass('hide')) {
    if (window.innerWidth < 600) {
        $toggle.addClass('hide');
    } else {
        $toggle.removeClass('hide');
    }
}
})();

// Attach window listeners.
window.onresize = _.debounce(resize, 200);
window.onscroll = _.debounce(resize, 200);

function showDetails() {
$about.removeClass('hide');
$toggle.removeClass('i');
}

function hideDetails() {
$about.addClass('hide');
$toggle.addClass('i');
}

// Listen for toggle click event.
$toggle.on('click', function(event) {
$toggle.hasClass('i') ? showDetails() : hideDetails();
});

// Pretty simple huh?
$scene.parallax();

// Check for orientation support.
setTimeout(function() {
if ($scene.data('mode') === 'cursor') {
    $prompt.removeClass('hide');
    if (window.innerWidth < 600) $toggle.addClass('hide');
    $prompt.on('click', function(event) {
        $prompt.addClass('hide');
        if (window.innerWidth < 600) {
            setTimeout(function() {
                $toggle.removeClass('hide');
            }, 1200);
        }
    });
}
}, 1000);

(function(i, s, o, g, r, a, m) {
i['GoogleAnalyticsObject'] = r;
i[r] = i[r] || function() {
    (i[r].q = i[r].q || []).push(arguments)
}, i[r].l = 1 * new Date();
a = s.createElement(o),
    m = s.getElementsByTagName(o)[0];
a.async = 1;
a.src = g;
m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
ga('create', 'UA-12499910-1', 'auto');
ga('send', 'pageview');