// plugins/imageBlur.client.js
export default function () {
  document.querySelectorAll("img").forEach((img) => {
    img.addEventListener("load", () => {
      setTimeout(() => {
        img.classList.add("loaded"); // Remove blur after 1 second
      }, 1000); // Adjust the duration as needed
    });

    if (img.complete) {
      // Ensure already cached images are also unblurred immediately
      img.classList.add("loaded");
    }
  });
}
