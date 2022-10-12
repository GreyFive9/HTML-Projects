 function playAudio(url) {
    new Audio(url).play();
  }
var quote = document.getElementById('quote');
var randomQuotes = ['It does not mater how slowly you go as long as you do not stop.', 
                    'Life is really simple, but we insist on making it complicated.', 
                    'Only the wisest and stupidest of men never change.', 
                    'Wherever you go, go with all your heart.', 
                    'Choose a job you love, and you will never have to work a day in your life.', 
                    'The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence.', 
                    'Our greatest glory is not in never falling, but in rising every time we fall.', 
                    'Everything has beauty, but not everyone sees it.', 
                    'Silence is a true friend who never betrays.', 
                    'By three methods we may learn wisdom: first, by reflection, which is noblest; Second, by imitation, which is easiest; and third by experience, which is the bitterest.'];

function changeQuotes() {
  var i = Math.floor((Math.random() * randomQuotes.length));
           quote.innerText = randomQuotes[i];
}

changeQuotes();
window.addEventListener('DOMContentLoaded', event => {
    
    

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };
    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };
    

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
    

});
