// 1. get the photo from the gallery
// 2. add an event listener to the photo
// 3. when the photo is clicked, the modal window should pop up
// 4. the modal window should contain the photo that was clicked
// 5. the modal window should have a left and right arrow to navigate through the photos
// 6. when the left arrow is clicked, the previous photo should be displayed
// 7. when the right arrow is clicked, the next photo should be displayed
// 8. the modal window should have a close button
// 9. when the close button is clicked, the modal window should close
// 10. when the modal window is open, the user should be able to use the left and right arrow keys to navigate through the photos
// 11. the modal window should also close when the user clicks outside of the modal window
// 12. the modal window should also close when the user presses the escape key

// 1. get the photo from the gallery
const photos = document.querySelectorAll(".photo");

// 2. add an event listener to the photo
photos.forEach((photo) => {
  photo.addEventListener("click", () => {
    // 3. when the photo is clicked, the modal window should pop up
    const modal = document.querySelector(".modal");
    modal.classList.add("open");

    html.style.overflow = "hidden";

    // 4. the modal window should contain the photo that was clicked
    const modalImg = document.querySelector(".modal__photo");
    modalImg.src = photo.src;
  });
});

// 5. the modal window should have a left and right arrow to navigate through the photos
// 6. when the left arrow is clicked, the previous photo should be displayed
// 7. when the right arrow is clicked, the next photo should be displayed
const leftArrow = document.querySelector(".btn__gallery-left");
const rightArrow = document.querySelector(".btn__gallery-right");

leftArrow.addEventListener("click", () => {
  const modalImg = document.querySelector(".modal__photo");
  const currentPhoto = modalImg.src;

  photos.forEach((photo, i) => {
    if (photo.src === currentPhoto) {
      if (i === 0) {
        modalImg.src = photos[photos.length - 1].src;
      } else {
        modalImg.src = photos[i - 1].src;
      }
    }
  });
});

rightArrow.addEventListener("click", () => {
  const modalImg = document.querySelector(".modal__photo");
  const currentPhoto = modalImg.src;

  photos.forEach((photo, i) => {
    if (photo.src === currentPhoto) {
      if (i === photos.length - 1) {
        modalImg.src = photos[0].src;
      } else {
        modalImg.src = photos[i + 1].src;
      }
    }
  });
});

// 8. the modal window should have a close button
// 9. when the close button is clicked, the modal window should close
const closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", () => {
  const modal = document.querySelector(".modal");
  modal.classList.remove("open");

  html.style.overflow = "auto";
});

// 10. when the modal window is open, the user should be able to use the left and right arrow keys to navigate through the photos
document.addEventListener("keydown", (e) => {
  const modal = document.querySelector(".modal");
  if (modal.classList.contains("open")) {
    if (e.key === "ArrowLeft") {
      leftArrow.click();
    } else if (e.key === "ArrowRight") {
      rightArrow.click();
    }
  }
});

// 11. the modal window should also close when the user clicks outside of the modal window
const modal = document.querySelector(".modal");
modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal-container")) {
    closeBtn.click();
  }
});

// 12. the modal window should also close when the user presses the escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeBtn.click();
  }
});
