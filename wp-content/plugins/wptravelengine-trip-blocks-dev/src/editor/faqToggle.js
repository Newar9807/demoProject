export function initFaqToggle() {
    // Ensure the script runs after all other scripts have executed.
    setTimeout(function() {
        // Select all FAQ content divs.
        var faqContents = document.querySelectorAll('.faq-content')

        // Loop through each FAQ content div.
        faqContents.forEach(function(content, index) {
            // Add 'show' class to the first FAQ content div.
            if (0 === index) {
                content.classList.add('show')
                content.style.display = 'block'
            } else {
                content.style.display = 'none'
            }
        });
    }, 1000);
}