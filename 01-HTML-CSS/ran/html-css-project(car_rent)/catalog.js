document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;
    const images = document.querySelectorAll('#carousel img');
    const totalImages = images.length;

    const updateImageVisibility = () => {
        images.forEach((img, index) => {
            img.classList.add('hidden');
            img.classList.remove('active');
        });

        images[currentIndex].classList.add('active');
        images[currentIndex].classList.remove('hidden');
    };

    document.getElementById('prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        updateImageVisibility();
    });

    document.getElementById('next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalImages;
        updateImageVisibility();
    });

    updateImageVisibility(); // עדכון ראשוני של התמונה הנוכחית

    // הוספת החלפה אוטומטית כל 3 שניות
    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalImages;
        updateImageVisibility();
    }, 3000); // 3000 מילישניות = 3 שניות
});
