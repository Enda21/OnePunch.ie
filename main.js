/* ========================================
    Walk Away - JavaScript
   Smooth interactions & video fallback handling
   ======================================== */

(function() {
    'use strict';

    // ========================================
    // 1. Video Fallback Detection & Handling
    // ========================================

    function initializeVideoFallback() {
        const videoContainer = document.querySelector('.video-container');
        const videoPlayer = document.querySelector('.video-player');
        const videoFallback = document.querySelector('.video-fallback');

        if (!videoContainer || !videoPlayer || !videoFallback) {
            return;
        }

        // Check if iframe is loading properly
        const iframe = videoPlayer.querySelector('iframe');
        
        if (iframe) {
            // Set a timeout to show fallback if iframe fails to load
            const fallbackTimeout = setTimeout(function() {
                // Check if iframe has content
                if (!iframe.src || iframe.src.trim() === '') {
                    showVideoFallback();
                }
            }, 5000); // 5 seconds

            // Listen for iframe load
            iframe.addEventListener('load', function() {
                clearTimeout(fallbackTimeout);
            });

            // Listen for iframe errors
            iframe.addEventListener('error', function() {
                clearTimeout(fallbackTimeout);
                showVideoFallback();
            });
        }

        function showVideoFallback() {
            if (videoPlayer) {
                videoPlayer.style.display = 'none';
            }
            if (videoFallback) {
                videoFallback.style.display = 'block';
            }
        }
    }

    // ========================================
    // 2. Smooth Scroll Navigation
    // ========================================

    function initializeSmoothScroll() {
        const navLinks = document.querySelectorAll('a[href^="#"]');

        navLinks.forEach(function(link) {
            link.addEventListener('click', function(event) {
                const href = this.getAttribute('href');
                
                // Only smooth scroll for same-page links
                if (href !== '#' && document.querySelector(href)) {
                    event.preventDefault();
                    const target = document.querySelector(href);
                    
                    if (target) {
                        // Close any open menus (if applicable)
                        closeNavMenu();
                        
                        // Scroll to target
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });

                        // Set focus to target for accessibility
                        target.setAttribute('tabindex', '-1');
                        target.focus();
                        target.removeAttribute('tabindex');
                    }
                }
            });
        });
    }

    // ========================================
    // 3. Keyboard Navigation & Accessibility
    // ========================================

    function initializeKeyboardNav() {
        // Trap focus in modals if needed (prepared for future expansion)
        // Listen for Escape key to close any modals
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                closeNavMenu();
            }
        });
    }

    function closeNavMenu() {
        // Placeholder for future menu closing logic
        // Currently no mobile menu, but structure is here for expansion
    }

    // ========================================
    // 4. Analytics & Event Tracking (Optional)
    // ========================================

    function trackEvent(eventName, details) {
        // Log to console in development
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            console.log('Event:', eventName, details);
        }

        // Could integrate with analytics service here
        // Example: Google Analytics, Plausible, etc.
    }

    function initializeEventTracking() {
        // Track CTA button clicks
        const ctaButtons = document.querySelectorAll('.cta-button');
        ctaButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                trackEvent('cta_click', {
                    text: button.textContent,
                    href: button.href
                });
            });
        });

        // Track external link clicks
        const externalLinks = document.querySelectorAll('a[target="_blank"]');
        externalLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                trackEvent('external_link_click', {
                    text: link.textContent,
                    href: link.href
                });
            });
        });

        // Track section navigation
        const navLinks = document.querySelectorAll('.nav-links a');
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                trackEvent('nav_click', {
                    section: link.textContent,
                    href: link.href
                });
            });
        });
    }

    // ========================================
    // 5. Intersection Observer for Animations
    // ========================================

    function initializeScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    // Optional: stop observing after animation plays
                    // observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe cards and sections
        const elementsToObserve = document.querySelectorAll(
            '.story-card, .stat-card, .prevention-card, .resource-card'
        );

        elementsToObserve.forEach(function(element) {
            observer.observe(element);
        });
    }

    // ========================================
    // 6. Responsive Design Helpers
    // ========================================

    function handleResponsiveNav() {
        const header = document.querySelector('.header');
        
        // Check viewport width and adjust if needed
        window.addEventListener('resize', function() {
            // Could add menu toggle logic here for future mobile menu
        });
    }

    // ========================================
    // 7. Performance & Lazy Loading
    // ========================================

    function initializeLazyLoading() {
        // Prepare for lazy loading of images if added in future
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver(function(entries, observer) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.removeAttribute('data-src');
                            observer.unobserve(img);
                        }
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
        }
    }

    // ========================================
    // 8. Initialization & DOM Ready
    // ========================================

    function init() {
        // Check if DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initializeAll);
        } else {
            initializeAll();
        }
    }

    function initializeAll() {
        initializeVideoFallback();
        initializeSmoothScroll();
        initializeKeyboardNav();
        initializeEventTracking();
        initializeScrollAnimations();
        handleResponsiveNav();
        initializeLazyLoading();

        // Log initialization complete
        console.log('Walk Away site initialized');
    }

    // Start initialization
    init();

})();

/* ========================================
   9. CSS Classes for Animations (Optional)
   ======================================== */

/* Add this CSS to styles.css if you want scroll animations:

.story-card,
.stat-card,
.prevention-card,
.resource-card {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;
}

.story-card.in-view,
.stat-card.in-view,
.prevention-card.in-view,
.resource-card.in-view {
    opacity: 1;
    transform: translateY(0);
}
*/
