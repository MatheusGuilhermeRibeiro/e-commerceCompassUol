document.addEventListener("DOMContentLoaded", () => {
    const closeButton = document.querySelector(".close-banner") as HTMLButtonElement | null;
    const banner = document.querySelector(".top-banner") as HTMLElement | null;

    if (closeButton && banner) {
        closeButton.addEventListener("click", () => {
            banner.style.display = "none";
        });
    }
});

