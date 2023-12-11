document.querySelectorAll('nav ul li a').forEach(function(link) {
    link.addEventListener('click', function() {
        console.log('Navigation item clicked:', this.innerText);
    });
});
