  
  window.addEventListener("scroll", function () {
    let nav_bar = document.getElementById("nav-bar");
    let ancla = document.getElementById("ancla");
    let photo = document.getElementById("profile1");
    let background = document.getElementById("profile");
    let texts = [...document.getElementsByTagName("span")];
    let positionScroll = ancla?.getBoundingClientRect().top;
   console.log(positionScroll);
    if (positionScroll !== undefined && photo !== null&& nav_bar !== null) {
      if (positionScroll <150) {
        photo.classList.add("fade-out-up");
        background?.classList.add("ajust");
        texts.forEach((text) => {
          text.classList.remove("fade-in-up");
        });
        nav_bar.style.position = "fixed";
        nav_bar.style.top = "0";
      } else {
        photo.classList.remove("fade-out-up");
        background?.classList.remove("ajust");
        texts.forEach((text) => {
          text.classList.add("fade-in-up");

        });
        nav_bar.style.position = "relative"; 
      }
    }
  });