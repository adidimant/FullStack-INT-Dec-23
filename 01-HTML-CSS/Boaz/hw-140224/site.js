document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const closeButton = document.querySelector('.close-button');

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    setTimeout(() => {
        modal.style.display = 'block';
    }, 7000); // Show after 7 seconds

    // Show after scrolling 40%
    window.onscroll = () => {
        if (window.scrollY / document.body.scrollHeight > 0.4) {
            modal.style.display = 'block';
        }
    };
});
