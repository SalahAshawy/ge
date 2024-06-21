document.getElementById('resolution-selector').addEventListener('change', function() {
    const selectedValue = this.value;
    const image = document.getElementById('displayed-image');

    if (selectedValue) {
        image.src = `images/${selectedValue}.jpg`; // Ensure you have images named 144.jpg, 360.jpg, etc.
        image.style.display = 'block';
    } else {
        image.style.display = 'none';
    }
});
