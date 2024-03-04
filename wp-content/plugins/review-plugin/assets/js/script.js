
document.addEventListener('DOMContentLoaded', function () {
    // Intercept the form submission
    document.getElementById('reviewForm').addEventListener('submit', function (e) {
        // Prevent the default form submission
        e.preventDefault();

        // Get form values
        var name = document.getElementById('name').value;
        var rating = document.getElementById('rating').value;
        var comment = document.getElementById('comment').value;
        var hidden_id = document.getElementById('hidden_id').value;

        // Validate the form
        if (name.trim() === '' || comment.trim() === '') {
            alert('Name and Comment are required fields. Please fill them out.');
            return;
        }

        // Prepare the data for submission
        var formData = {
            name: name,
            rating: rating,
            comment: comment,
            hidden_id: hidden_id,
        };

        // Submit the form using AJAX
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://demoproject.test/wp-content/plugins/review-plugin/dbStore/post.php', true);
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onload = function () {
            console.log('Response status:', xhr.status); // Log the status to the console

            if (xhr.status === 200) {
                // Successful submission
                document.getElementById('name').value = '';
                document.getElementById('rating').value = '5';
                document.getElementById('comment').value = '';
            } else {
                // Failed submission
                alert('Failed to submit review. Please try again later. Status: ' + xhr.status);
                console.error('Response text:', xhr.responseText); // Log the response text to the console
            }
        };

        xhr.onerror = function () {
            // Error handling
            alert('Failed to submit review. Please try again later.');
            console.error('Request failed');
        };

        // Convert the data to JSON format
        var jsonData = JSON.stringify(formData);

        // Send the request
        xhr.send(jsonData);

        console.log('Request sent successfully'); // Log to the console that the request has been sent

    });
});
