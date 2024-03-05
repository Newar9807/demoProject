jQuery(document).ready(function ($) {
    $('.star-rating .star').on('click', function () {
        var post_id = $(this).parent().data('post-id');
        var rating = $(this).data('rating');
        alert(post_id+" = "+rating+" = "+myRatingAjax.ajaxurl);
        $.ajax({
            type: 'POST',
            url: myRatingAjax.ajaxurl,
            data: {
                action: 'my_rating_submit',
                post_id: post_id,
                rating: rating,
            },
            success: function (response) {
                console.log('Rating submitted successfully!');
            },
        });
    });
});