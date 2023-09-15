  
  window.addEventListener("scroll", function () {
    let nav_bar = document.getElementById("nav-bar");
    let ancla = document.getElementById("ancla");
    let photo = document.getElementById("profile1");
    let background = document.getElementById("profile");
    let texts = [...document.getElementsByTagName("span")];
    let positionScroll = ancla?.getBoundingClientRect().top;
   console.log(positionScroll);
    if (positionScroll !== undefined && photo !== null&& nav_bar !== null) {
      if (positionScroll <0) {
        photo.classList.add("fade-out-up");
        background?.classList.add("ajust");
        texts.forEach((text) => {
          text.classList.remove("fade-in-up");
          text.style.display="flex";
        });
        nav_bar.style.position = "fixed";
        nav_bar.style.top = "0";
      } else {
        photo.classList.remove("fade-out-up");
        background?.classList.remove("ajust");
        texts.forEach((text) => {
          text.classList.add("fade-in-up");
          text.style.display="none";
        });
        nav_bar.style.position = "relative"; 
      }
    }
  });
  
  const navBarElement = document.getElementById("nav-bar");
  const navbarHeight: number = navBarElement ? navBarElement.getBoundingClientRect().height : 0;
  
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const targetId = (e.currentTarget as HTMLElement).getAttribute('href')?.substring(1);
      const targetElement = targetId !== undefined ? document.getElementById(targetId) : null;
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - navbarHeight*2, // Ajusta el valor según sea necesario
          behavior: 'smooth' // Desplazamiento suave
        });
      }
    });
  });
  