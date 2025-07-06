document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('img01');
    const captionText = document.getElementById('caption');
    const closeButton = document.getElementsByClassName('close-button')[0];

    document.querySelectorAll('.image-item img').forEach(img => {
        img.onclick = function() {
            modal.style.display = 'block';
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }
    });

    closeButton.onclick = function() {
        modal.style.display = 'none';
    }

    modal.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }
});  