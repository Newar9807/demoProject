<?php

// Retrieve the raw POST data
$data = file_get_contents("php://input");

// Decode the JSON data
$formData = json_decode($data);

$post_id = $formData->hidden_id;
$newData = [
    'name' => $formData->name,
    'rating' => $formData->rating,
    'comment' => $formData->comment,
];
update_post_meta(
    $post_id,
    'meta_key',
    $newData
);
$samir = 1;
