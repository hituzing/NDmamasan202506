
document.addEventListener("DOMContentLoaded", () => {
  const closeModalBtn = document.getElementById("closeModal");
  const modal = document.getElementById("modal");

  if (closeModalBtn && modal) {
    closeModalBtn.addEventListener("click", () => {
      modal.classList.add("hidden");
      document.body.style.overflow = "auto";
    });
  }
});
