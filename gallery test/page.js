// .addEventListener('click', function() {
//   openModal();
// });

document.querySelector('.close').addEventListener('click', function() {
  document.getElementById("myModal").style.display = "none";
});

document.querySelector('.prev').addEventListener('click', function() {
    plusSlides(-1);
  });
 document.querySelector('.next').addEventListener('click', function() {
    plusSlides(1);
  });
  

  function clicky() {
    var openMSlider = document.querySelectorAll('.imggal');
  
  for (i = 0; i < openMSlider.length; i++) {
    openMSlider[i].addEventListener('click', openModal);
  }
  
  }
  
  clicky();
  
  function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  
  function plusSlides(num) {
  showSlides(slideIndex += num);
}

function currentSlide(num) {
    showSlides(slideIndex = num);
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  
  function showSlides(num) {
    var slides = document.getElementsByClassName("slides");
    if (num > slides.length) {
        slideIndex = 1
    }
    if (num < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
  }


  //       <div class="row">
  //               <div class="column">
  //                 <img src="/gallery test/vatraandcosmic/vandc1.jpg" style="width:100%" onclick="openModal();currentSlide(1)" class="hover-shadow cursor">
  //               </div>
  //               <div class="column">
  //                 <img src="/gallery test/vatraandcosmic/vandc2.jpg" style="width:100%" onclick="openModal();currentSlide(2)" class="hover-shadow cursor">
  //               </div>
  //               <div class="column">
  //                 <img src="/gallery test/vatraandcosmic/vandc3.jpg" style="width:100%" onclick="openModal();currentSlide(3)" class="hover-shadow cursor">
  //               </div>
  //               <div class="column">
  //                 <img src="/gallery test/vatraandcosmic/vandc4.jpg" style="width:100%" onclick="openModal();currentSlide(4)" class="hover-shadow cursor">
  //               </div>
  //             </div>
