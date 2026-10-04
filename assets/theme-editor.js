function hideProductModal() {
  const productModal = document.querySelectorAll("product-modal[open]");
  productModal && productModal.forEach((modal) => modal.hide());
}

document.addEventListener("shopify:block:select", function (event) {
  hideProductModal();
  const blockSelectedIsSlide =
    event.target.classList.contains("slideshow__slide");
  if (!blockSelectedIsSlide) return;

  const parentSlideshowComponent = event.target.closest("slideshow-component");
  parentSlideshowComponent.pause();

  setTimeout(function () {
    parentSlideshowComponent.slider.scrollTo({
      left: event.target.offsetLeft,
    });
  }, 200);
});

document.addEventListener("shopify:block:deselect", function (event) {
  const blockDeselectedIsSlide =
    event.target.classList.contains("slideshow__slide");
  if (!blockDeselectedIsSlide) return;
  const parentSlideshowComponent = event.target.closest("slideshow-component");
  if (parentSlideshowComponent.autoplayButtonIsSetToPlay)
    parentSlideshowComponent.play();
});

document.addEventListener("shopify:section:load", () => {
  hideProductModal();
  const zoomOnHoverScript = document.querySelector("[id^=EnableZoomOnHover]");
  if (!zoomOnHoverScript) return;
  if (zoomOnHoverScript) {
    const newScriptTag = document.createElement("script");
    newScriptTag.src = zoomOnHoverScript.src;
    zoomOnHoverScript.parentNode.replaceChild(newScriptTag, zoomOnHoverScript);
  }
});

document.addEventListener("shopify:section:unload", (event) => {
  document
    .querySelectorAll(`[data-section="${event.detail.sectionId}"]`)
    .forEach((element) => {
      element.remove();
      document.body.classList.remove("overflow-hidden");
    });
});

document.addEventListener("shopify:section:reorder", () => hideProductModal());

document.addEventListener("shopify:section:select", () => hideProductModal());

document.addEventListener("shopify:section:deselect", () => hideProductModal());

document.addEventListener("shopify:inspector:activate", () =>
  hideProductModal()
);

document.addEventListener("shopify:inspector:deactivate", () =>
  hideProductModal()
);

// Below are the hero-slider.liquid script
function initializeSlider() {
  const parents = document.querySelectorAll(".hero_main"); // Select all parents
  if (parents.length === 0) {
    console.log("No hero_main elements found.");
    return;
  }

  parents.forEach((parent) => {
    const elem = parent.querySelector(".hs-slider-main");

    if (elem && !elem.classList.contains("flickity-enabled")) {
      const slides = elem.querySelectorAll(".single_slide");
      //console.log(`Found ${slides.length} slides in a slider.`);

      if (slides.length > 1) {
        const rotation =
          parseInt(elem.getAttribute("data-rotation"), 10) || 3000; // Default to 3000ms
        const showArrows =
          elem.getAttribute("data-arrows")?.toLowerCase() === "true";
        const showDots =
          elem.getAttribute("data-dots")?.toLowerCase() === "true";
        const enableAutoplay =
          elem.getAttribute("data-autoplay")?.toLowerCase() === "true";

        let nextBtn = null;
        let prevBtn = null;
        if (showArrows) {
          nextBtn = parent.querySelector(".next-btn");
          prevBtn = parent.querySelector(".prev-btn");
        }

        const options = {
          cellAlign: "left",
          freeScroll: false,
          contain: true,
          prevNextButtons: false,
          draggable: true,
          wrapAround: true,
          pauseAutoPlayOnHover: false,
          adaptiveHeight: true,
          imagesLoaded: true,
          setGallerySize: false,
          pageDots: showDots,
          autoPlay: enableAutoplay ? rotation : false,
        };

        // Initialize Flickity
        const flkty = new Flickity(elem, options);

        // Add event listeners for custom navigation
        if (showArrows && nextBtn && prevBtn) {
          nextBtn.addEventListener("click", () => flkty.next());
          prevBtn.addEventListener("click", () => flkty.previous());
        }

        //console.log("Slider initialized successfully.", options);
      } else {
        console.log("Not enough slides to initialize the slider.");
      }
    } else if (elem && elem.classList.contains("flickity-enabled")) {
      console.log("Slider already initialized. Skipping...");
    } else {
      console.log("No slider found in this section.");
    }
  });
}

document.addEventListener("shopify:block:select", function (event) {
  initializeSlider();
});

document.addEventListener("shopify:block:deselect", function (event) {
  initializeSlider();
});

document.addEventListener("shopify:section:load", () => {
  initializeSlider();
});

document.addEventListener("shopify:section:reorder", () => {
  initializeSlider();
});

document.addEventListener("shopify:section:select", () => {
  initializeSlider();
});

document.addEventListener("shopify:section:deselect", () => {
  initializeSlider();
});

document.addEventListener("shopify:inspector:activate", () => {
  initializeSlider();
});

document.addEventListener("shopify:inspector:deactivate", () => {
  initializeSlider();
});

document.addEventListener("DOMContentLoaded", () => {
  initializeSlider();
});

window.addEventListener("resize", function () {
  if (window.innerWidth < 768) {
    initializeSlider();
  }
});
if (window.Shopify.designMode) {
  initializeSlider();
}
