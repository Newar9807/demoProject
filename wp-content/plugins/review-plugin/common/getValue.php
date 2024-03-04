<?php
$name = "";
$rating = "";
$comment = "";
if (is_array($value)) {
    $name = $value['name'];
    $rating = $value['rating'];
    $comment = $value['comment'];
}
