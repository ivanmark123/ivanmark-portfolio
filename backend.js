        // NavBar
        document.addEventListener('DOMContentLoaded', () => {
            const navLinkEls = document.querySelectorAll('.nav_link');

            navLinkEls.forEach(navLinkEl => {
                navLinkEl.addEventListener('click', () => {
                    document.querySelector('.active')?.classList.remove('active');
                    navLinkEl.classList.add('active');
                });
            });
        });

        // Home Page H3 span tag 
        setTimeout(function () {
            var typed = new Typed('.multiText', {
                strings: ['Web Developer', 'Programmer'],
                loop: true,
                typeSpeed: 100,
                backSpeed: 80,
                backDelay: 1500
            });
        }, 2000); // 2000 milliseconds (2 seconds) delay

        document.addEventListener('DOMContentLoaded', () => {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('header nav a');

            // Function to check if an element is in the viewport
            const isElementInViewport = (element) => {
                const rect = element.getBoundingClientRect();
                return (
                    rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
                );
            };

            // Function to handle scroll event
            const handleScroll = () => {
                sections.forEach((sec) => {
                    const id = sec.getAttribute('id');
                    const navLink = document.querySelector(`header nav a[href="#${id}"]`);
                    console.log(id, isElementInViewport(sec));

                    if (isElementInViewport(sec)) {
                        navLinks.forEach((link) => link.classList.remove('active'));
                        navLink.classList.add('active');
                    }
                });
            };

            // Add scroll event listener
            window.addEventListener('scroll', handleScroll);

            // Call the function once to set the initial 'active' class
            handleScroll();
        });
