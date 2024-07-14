document.addEventListener("DOMContentLoaded", () => {
  const galleryData = [
        {
      src: "assets/selection/img01.jpg",
      title: "Task 01",
      author: "Heshan De Silva",
    },
    {
      src: "assets/selection/img02.jpg",
      title: "Task 02",
      author: "Heshan De Silva",
    },
    {
      src: "assets/selection/img03.jpg",
      title: "Task 03",
      author: "Heshan De Silva",
    }, 
{
      src: "assets/selection/img04.png",
      title: "Task 01",
      author: "Hansana Eranga",
    },
    {
      src: "assets/selection/img05.png",
      title: "Task 02",
      author: "Hansana Eranga",
    },
    {
      src: "assets/selection/img06.png",
      title: "Task 03",
      author: "Hansana Eranga",
    },
        {
      src: "assets/selection/img07.jpg",
      title: "Task 01",
      author: "Ushan Navamina",
    },
    {
      src: "assets/selection/img08.jpg",
      title: "Task 02",
      author: "Ushan Navamina",
    },
	{
      src: "assets/selection/img09.jpg",
      title: "Task 03",
      author: "Ushan Navamina",
    },
       {
      src: "assets/selection/img010.jpg",
      title: "Task 01",
      author: "Tharindu Munasinghe",
    },
    {
      src: "assets/selection/img011.jpg",
      title: "Task 02",
      author: "Tharindu Munasinghe",
    },
	{
      src: "assets/selection/img012.jpg",
      title: "Task 03",
      author: "Tharindu Munasinghe",
    }, 
        {
      src: "assets/selection/img013.jpg",
      title: "Task 01",
      author: "MR. SATHURSHAN B.",
    },
    {
      src: "assets/selection/img014.jpg",
      title: "Task 02",
      author: "MR. SATHURSHAN B.",
    },
	{
      src: "assets/selection/img015.jpg",
      title: "Task 03",
      author: "MR. SATHURSHAN B.",
    }, 
       {
      src: "assets/selection/img016.png",
      title: "Task 01",
      author: "Nipuni Kulathunga",
    },
    {
      src: "assets/selection/img017.png",
      title: "Task 02",
      author: "Nipuni Kulathunga",
    },
	{
      src: "assets/selection/img018.png",
      title: "Task 03",
      author: "Nipuni Kulathunga",
    }, 
        {
      src: "assets/selection/img019.jpg",
      title: "Task 01",
      author: "Paboda Sandeepani",
    },
    {
      src: "assets/selection/img020.jpg",
      title: "Task 02",
      author: "Paboda Sandeepani",
    },
	{
      src: "assets/selection/img021.jpg",
      title: "Task 03",
      author: "Paboda Sandeepani",
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
            <p> ${item.author}</p>
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
