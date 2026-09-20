const photos = document.querySelectorAll(".photo img");

const lightbox = document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const closeButton =
    document.getElementById("closeLightbox");


photos.forEach(function(photo) {

    photo.addEventListener("click", function() {

        lightboxImage.src = photo.src;

        lightboxImage.alt = photo.alt;

        lightbox.classList.add("active");

    });

});


closeButton.addEventListener("click", function() {

    lightbox.classList.remove("active");

});


lightbox.addEventListener("click", function(event) {

    if (event.target === lightbox) {

        lightbox.classList.remove("active");

    }

});
