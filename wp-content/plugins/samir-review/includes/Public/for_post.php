<?php require_once 'header.php'; ?>
<h1>Review Plugin</h1>
<div class="forPost">
    <label for="radioButton" class="radioButtonTitle">Enable: </label>
    <label>
        <input type="radio" name="yesNo" value="yes" <?php echo ($this->yesNo === "yes" || $this->yesNo === "") ? "checked" : ""; ?>>
        Yes
    </label>
    <label>
        <input type="radio" name="yesNo" value="no" <?php echo ($this->yesNo === "no") ? "checked" : ""; ?>>
        No
    </label>
</div>
<?php require_once 'footer.php'; ?>