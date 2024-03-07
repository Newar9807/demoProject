// Import jQuery
import $ from 'jquery'

export function initOwlCarousel() {
    $(function() { // jQuery function wrapper
        const galleryContainers = document.querySelectorAll('.wpte-trip-feat-img-gallery')
        if (galleryContainers.length) {
            galleryContainers.forEach(container => {
                $(container).owlCarousel({
                    nav: true,
                    navigationText: ['&lsaquo;', '&rsaquo;'],
                    items: 1,
                    autoplay: true,
                    slideSpeed: 300,
                    paginationSpeed: 400,
                    center: true,
                    loop: true,
                    dots: true,
                })
            })
        }
    })
}