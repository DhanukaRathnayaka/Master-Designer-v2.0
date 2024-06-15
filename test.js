document.getElementById("js-page-loading_start").addEventListener("click", () => {
    console.log("Button clicked");

    const counters = document.querySelectorAll(".counter");

    counters.forEach((counter) => {
      counter.innerText = "0";
      const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;
        const increment = target / 2000; // Adjust this value to change the increment speed
        if (count < target) {
          counter.innerText = `${Math.ceil(count + increment)}`;
          setTimeout(updateCounter, 20); // Adjust this value to change the delay
        } else {
          counter.innerText = `${target}+`;
        }
      };
      updateCounter();
    });
  });
