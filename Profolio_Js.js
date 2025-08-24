// JavaScript for search bar functionality (optional)
document.getElementById('search').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const textContent = section.textContent.toLowerCase();
        if (textContent.includes(searchTerm)) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
});
