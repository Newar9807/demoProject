<?php

/**
 * Trip Reviews Block
 */

// class progressImage
// {
//     function fiveStar()
//     {
//         echo '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <rect width="16" height="16" fill="white" />
//         <circle cx="8" cy="8" r="7" fill="white" stroke="currentColor" stroke-width="2" />
//         <ellipse cx="5.17653" cy="6.11696" rx="0.941176" ry="0.941177" fill="currentColor" />
//         <ellipse cx="10.824" cy="6.11696" rx="0.941176" ry="0.941177" fill="currentColor" />
//         <path d="M5.33852 9.41211C5.25032 9.41211 5.17676 9.48077 5.17676 9.56897C5.17676 11.0417 6.44089 12.2356 8.00029 12.2356C9.55968 12.2356 10.8238 11.0417 10.8238 9.56897C10.8238 9.48077 10.7503 9.41211 10.6621 9.41211H5.33852Z" fill="currentColor" />
//     </svg>';
//     }
//     function fourStar()
//     {
//         echo '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <rect width="16" height="16" fill="white"/>
//         <circle cx="8" cy="8" r="7" fill="white" stroke="currentColor" stroke-width="2"/>
//         <ellipse cx="5.17653" cy="6.11696" rx="0.941176" ry="0.941177" fill="currentColor"/>
//         <ellipse cx="10.824" cy="6.11696" rx="0.941176" ry="0.941177" fill="currentColor"/>
//         <path d="M5.66797 10.5419C5.88807 11.0169 6.67701 11.9668 8.07189 11.9668C9.46677 11.9668 10.1594 11.0169 10.3313 10.5419" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//         </svg>';
//     }
//     function threeStar()
//     {
//         echo '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <rect width="16" height="16" fill="white"/>
//         <circle cx="8" cy="8" r="7" fill="white" stroke="currentColor" stroke-width="2"/>
//         <ellipse cx="5.17653" cy="6.11696" rx="0.941176" ry="0.941177" fill="currentColor"/>
//         <ellipse cx="10.3533" cy="6.11696" rx="0.941176" ry="0.941177" fill="currentColor"/>
//         <path d="M5.05859 10.2266L9.6506 11.6745" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//         </svg>';
//     }
//     function twoStar()
//     {
//         echo '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <rect width="16" height="16" fill="white"/>
//         <circle cx="8" cy="8" r="7" fill="white" stroke="currentColor" stroke-width="2"/>
//         <ellipse cx="5.17653" cy="6.11696" rx="0.941176" ry="0.941177" fill="currentColor"/>
//         <ellipse cx="10.824" cy="6.11696" rx="0.941176" ry="0.941177" fill="currentColor"/>
//         <path d="M5.66797 11.9659C5.88807 11.4909 6.67701 10.541 8.07189 10.541C9.46677 10.541 10.1594 11.4909 10.3313 11.9659" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//         </svg>';
//     }
//     function oneStar()
//     {
//         echo '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <rect width="16" height="16" fill="white"/>
//         <circle cx="8" cy="8" r="7" fill="white" stroke="currentColor" stroke-width="2"/>
//         <ellipse cx="5.17653" cy="6.11696" rx="0.941176" ry="0.941177" fill="currentColor"/>
//         <ellipse cx="10.824" cy="6.11696" rx="0.941176" ry="0.941177" fill="currentColor"/>
//         <path d="M5.33852 12.2344C5.25032 12.2344 5.17676 12.1657 5.17676 12.0775C5.17676 10.6048 6.44089 9.41085 8.00029 9.41085C9.55968 9.41085 10.8238 10.6048 10.8238 12.0775C10.8238 12.1657 10.7503 12.2344 10.6621 12.2344H5.33852Z" fill="currentColor"/>
//         </svg>';
//     }
// }

// $image = new progressImage;

?>

<div class="trip-stars-bar-graph-container">
    <div class="trip-stars-bar-graph">
        <?php for ($i = 5; $i > 0; $i--) {
            if($i == 5){
                $color = '#66DAB0';
            }
            else if($i == 4){
                $color = '#6FEBA1';
            }
            else if($i == 3){
                $color = '#F3CE85';
            }
            else if($i == 2){
                $color = '#F3B881';
            }
            else {
                $color = '#EE7874';
            }
            $progressColor = '--progress-color:'.$color;
        ?>
            <div class="trip-stars-bar" style="<?php echo $progressColor; ?>">
                <span class="trip-stars-bar-image">
                    <?php 
                        // if($i == 5){
                        //     $image->fiveStar();
                        // }else if($i == 4){
                        //     $image->fourStar();
                        // }else if($i == 3){
                        //     $image->threeStar();
                        // }else if($i == 2){
                        //     $image->twoStar();
                        // }else {
                        //     $image->oneStar();
                        // }
                    ?>
                </span>
                <span class="trip-stars-bar-progress-bar"></span>
                <span class="trip-stars-bar-progress-percent">50%</span>
            </div>
        <?php
        } ?>
    </div>
</div>