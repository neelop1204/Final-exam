// header-script.js
document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.querySelector('.search-box button');
    const searchInput = document.querySelector('.search-box input');

    searchButton.addEventListener('click', function () {
        const searchQuery = searchInput.value;
        if (searchQuery.trim() !== '') {
            alert('Performing search for: ' + searchQuery);
        }
    });
});
