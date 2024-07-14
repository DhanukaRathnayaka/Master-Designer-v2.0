document.addEventListener("DOMContentLoaded", () => {
  const galleryData = [
    {
      src: "assets/selection/img1.jpg",
      title: "Sample",
      author: "Sample",
    },
    {
      src: "assets/selection/img2.jpg",
      title: "Sample",
      author: "Sample",
    },{
      src: "assets/selection/img1.jpg",
      title: "Sample",
      author: "Sample",
    },
    {
      src: "assets/selection/img2.jpg",
      title: "Sample",
      author: "Sample",
    },{
      src: "assets/selection/img1.jpg",
      title: "Sample",
      author: "Sample",
    },
    {
      src: "assets/selection/img2.jpg",
      title: "Sample",
      author: "Sample",
    },

    // Add more images as needed
  ];

  const itemsPerPage = 9;
  let currentPage = 1;

  const gallery = document.getElementById("gallery");
  const pagination = document.getElementById("pagination");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  const pageNumber = document.getElementById("page-number");

  function displayGalleryPage(page) {
    gallery.innerHTML = "";
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const itemsToShow = galleryData.slice(start, end);

    itemsToShow.forEach((item) => {
      const galleryItem = document.createElement("div");
      galleryItem.classList.add("gallery-item");
      galleryItem.innerHTML = `
          <img src="${item.src}" alt="${item.title}" class="gallery-image">
          <div class="gallery-caption">
            <h3>${item.title}</h3>
            <p>@ ${item.author}</p>
          </div>
        `;
      galleryItem.addEventListener("click", () =>
        openPopup(item.src, item.title, item.author)
      );
      gallery.appendChild(galleryItem);
    });

    pageNumber.textContent = page;
    prevBtn.disabled = page === 1;
    nextBtn.disabled = end >= galleryData.length;
  }

  function openPopup(src, title, author) {
    const popup = document.getElementById("popup");
    const popupContent = document.getElementById("popup-content");
    const popupCaption = document.getElementById("popup-caption");
    popup.style.display = "block";
    popupContent.src = src;
    popupCaption.innerHTML = `<h3>${title}</h3><p>@ ${author}</p>`;
  }

  document.getElementById("close").addEventListener("click", () => {
    document.getElementById("popup").style.display = "none";
  });

  document.getElementById("popup").addEventListener("click", (e) => {
    if (e.target === document.getElementById("popup")) {
      document.getElementById("popup").style.display = "none";
    }
  });

  prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      displayGalleryPage(currentPage);
    }
  });

  nextBtn.addEventListener("click", () => {
    if (currentPage * itemsPerPage < galleryData.length) {
      currentPage++;
      displayGalleryPage(currentPage);
    }
  });

  displayGalleryPage(currentPage);
});
