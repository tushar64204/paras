function openModal(element) {
    document.getElementById("myModal").style.display = "block";
    document.getElementById("img01").src = element.style.backgroundImage.slice(5, -2);
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}