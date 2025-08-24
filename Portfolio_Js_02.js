// Navigation: Show only the selected section
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        // Remove active class from all links
        document.querySelectorAll('.menu a').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
        // Hide all sections
        document.querySelectorAll('main section').forEach(sec => {
            sec.classList.remove('active-section');
            sec.classList.add('hidden-section');
        });
        // Show the selected section
        const target = this.getAttribute('href');
        const section = document.querySelector(target);
        if (section) {
            section.classList.add('active-section');
            section.classList.remove('hidden-section');
        }
    });
});

// Optional: Search bar functionality (simple filter)
document.getElementById('search').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    document.querySelectorAll('main section').forEach(section => {
        if (section.textContent.toLowerCase().includes(query) || query === '') {
            section.style.display = '';
        } else {
            section.style.display = 'none';
        }
    });
});