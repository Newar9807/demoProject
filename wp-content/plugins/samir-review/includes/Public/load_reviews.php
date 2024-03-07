<?php

$args = ['post_type' => 'samir_reviews'];

$posts_query = new WP_Query($args);

// Check if there are posts
if ($posts_query->have_posts()) {
?>
    <div class="comments-container">
        <div id="primary" class="content-area">
            <main id="main" class="site-main">
                <?php
                $count = 0;
                ?>
                <header class="page-header">
                    <h1 class="page-title">Customer Reviews</h1>
                </header>
                <?php
                while ($posts_query->have_posts()) :
                    $posts_query->the_post();

                    // Access post data
                    $post_id = get_the_ID();
                    $post_title = get_the_title();
                    $post_content = get_the_content();
                    $post_date = get_the_date();

                    $got_data = get_post_meta(get_the_ID(), 'oop_review', true);
                    if ($got_data) :
                        $chkpnt = 1;
                ?>
                        <div class="review-list">

                            <article id="post-<?= get_the_ID() ?>" <?= $got_data['rating'] ?>>
                                <div class="review-content">
                                    <div class="reviewer-name">Reviewer No: <?= ++$count ?></div>
                                    <?php
                                    if ($got_data['rating'] < 3) :
                                        echo '<span style="color: red;">';
                                    else :
                                        echo '<span style="color: gold;">';
                                    endif;
                                    for ($i = 0; $i < $got_data['rating']; $i++) {
                                        echo "★";
                                    }
                                    echo '</span>' . PHP_EOL;
                                    ?>
                                    <div class="review-rating">Rating: <?= $got_data['rating'] ?></div>
                                    <div class="review-comment">Name: <?= $got_data['name'] ?></div>
                                    <div class="review-comment">Comment: <?= $got_data['comment'] ?></div>
                                </div>
                            </article>

                        </div>

                        <br />
            <?php
                    endif;
                endwhile;
                wp_reset_postdata(); // Restore the global $post variable
            } else {
                // No posts found
                echo 'No posts found';
            }
            ?>
            </main>
        </div>


    </div>
    <?php
