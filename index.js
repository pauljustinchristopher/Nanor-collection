
    const searchIcon = document.getElementById('searchIcon');
    const searchContainer = document.getElementById('searchContainer');

    searchIcon.addEventListener('click', () => {
        // Toggle the visibility of the search container
        if (searchContainer.style.display === 'none' || searchContainer.style.display === '') {
            searchContainer.style.display = 'block'
        } else {
            searchContainer.style.display = 'none'
        }
    });
