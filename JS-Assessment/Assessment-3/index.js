function main() {
  let carouselContainer = document.getElementById("carousel-container");
  let carouselImageWrapper = document.querySelector(".carousel-image-wrapper");
  let slideLength = carouselImageWrapper.children.length;
  let index = 1;
  console.log(slideLength);

  function carouselButtonsCreator() {
    let prev = document.createElement("button");
    carouselContainer.appendChild(prev);
    let img = document.createElement("img");
    prev.appendChild(img);
    prev.setAttribute("id", "prev");
    img.setAttribute("src", "./assets/arrow-left.svg");
    img.setAttribute("class", "arrow");
    prev.addEventListener("click", () => prevSlide());

    let next = document.createElement("button");
    carouselContainer.appendChild(next);
    let img1 = document.createElement("img");
    next.appendChild(img1);
    next.setAttribute("id", "next");
    img1.setAttribute("src", "./assets/arrow-right.svg");
    img1.setAttribute("class", "arrow");
    next.addEventListener("click", () => nextSlide());
  }
  function carouselIndicators() {
    let carouselNav = document.createElement("div");
    carouselContainer.appendChild(carouselNav);
    carouselNav.setAttribute("class", "carousel-nav");
    for (let i = 0; i < slideLength; i++) {
      console.log(i);
      let carouselIndicator = document.createElement("button");
      carouselIndicator.classList.add("carousel-indicator");
      carouselIndicator.setAttribute("id", "carousel-indicator");
      carouselNav.appendChild(carouselIndicator);
      carouselIndicator.addEventListener("click", () => {
        indicatorsSlide(i + 1);
      });
    }
  }
   function indicatorsSlide(cindex) {
      console.log(index);
      index = cindex;
      showSlide();
    }
  function prevSlide() {
    if(index==1){
      index=slideLength;
    }
    else{
      index--;
    }
    showSlide();
  }

  function nextSlide() {
    if (index == slideLength) {
      index = 1;
  }
  else {
      index++;
  }
  showSlide();
  }
  function startAutoSlider() {
    nextSlide();
    setTimeout(startAutoSlider, 3000);
  }
  function showSlide() {
    carouselImageWrapper.style.transform = `translateX(${-(index - 1) * 500}px)`;
  }
  carouselButtonsCreator();
  carouselIndicators();
  setTimeout(startAutoSlider, 5000);
}
main();
