<?php require_once 'header.php'; ?>
<label for="name">Name:</label>
<input type="text" id="name" name="name" value="<?= $this->name ?>" required>
<?php if ($this->yesNo == 'yes') : ?>
    <input type="hidden" id="hidden_id" class="input" name="hidden_id" value="<?= get_the_ID(); ?>">
<?php endif; ?>
<label for="rating">Rating:</label>
<select id="rating" name="rating" required>
    <option value="5" <?php selected($this->rating, '5'); ?>>5 - Excellent</option>
    <option value="4" <?php selected($this->rating, '4'); ?>>4 - Very Good</option>
    <option value="3" <?php selected($this->rating, '3'); ?>>3 - Good</option>
    <option value="2" <?php selected($this->rating, '2'); ?>>2 - Fair</option>
    <option value="1" <?php selected($this->rating, '1'); ?>>1 - Poor</option>
</select>

<label for="comment">Comment:</label>
<textarea id="comment" name="comment" rows="4" required><?= $this->comment ?></textarea>

<?php if ($this->yesNo == 'yes') : ?>
    <button type="submit" name="submit">Submit Review</button>
<?php
endif;
require_once 'footer.php';
?>