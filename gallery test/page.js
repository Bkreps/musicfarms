// Close Button
document.querySelector('.close').addEventListener('click', () => {
  document.getElementById("myModal").style.display = "none";
});

function plusSlides(num) {
  showSlides(slideIndex += num);
}

// Prev Button
document.querySelector('.prev').addEventListener('click', () => {
    plusSlides(-1);
  });

// Next Button
  document.querySelector('.next').addEventListener('click', () => {
    plusSlides(1);
  });
  
// Open Model on click
function imgOpenModel() {
    var openMSlider = document.querySelectorAll('.imggal');
  
    for (i = 0; i < openMSlider.length; i++) {
      openMSlider[i].addEventListener('click', openModal);
    }
}
  
imgOpenModel();
  
  function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  
  function currentSlide(num) {
    showSlides(slideIndex = num);
  }
  
  

  


    // var slideIndex = 1;
  // showSlides(slideIndex);
  
  
  // function showSlides(num) {
  //   var slides = document.getElementsByClassName("slides");
  //   if (num > slides.length) {
  //       slideIndex = 1
  //   }
  //   if (num < 1) {
  //       slideIndex = slides.length
  //   }
  //   for (i = 0; i < slides.length; i++) {
  //       slides[i].style.display = "none";
  //   }
  //   slides[slideIndex-1].style.display = "block";
  // }
