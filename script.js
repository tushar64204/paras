let currentIndex = 0;
const galleryItems = Array.from(document.querySelectorAll('.gallery-item'));
const images = galleryItems.map(item => item.style.backgroundImage.slice(5, -2));

function openModal(element) {
    currentIndex = galleryItems.indexOf(element);
    showModal();
}

function closeModal() {
    document.getElementById('myModal').style.display = "none";
}

function showModal() {
    const modal = document.getElementById('myModal');
    const modalContent = document.getElementById('modalContent');
    modal.style.display = "block";
    modalContent.style.backgroundImage = `url('${images[currentIndex]}')`;
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showModal();
}

function previousImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showModal();
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowRight') {
        nextImage();
    } else if (e.key === 'ArrowLeft') {
        previousImage();
    } else if (e.key === 'Escape') {
        closeModal();
    }
});