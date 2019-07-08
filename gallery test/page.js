document.querySelectorAll('.imggal').addEventListener('click', function() {
  // openModal();
});



document.querySelector('.close').addEventListener('click', function() {
  document.getElementById("myModal").style.display = "none";
});

document.querySelector('.prev').addEventListener('click', function() {
    plusSlides(-1);
  });
 document.querySelector('.next').addEventListener('click', function() {
    plusSlides(1);
  });
  

 
function openModal() {
  document.getElementById("myModal").style.display = "block";
}




function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  
  function showSlides(n) {
    var slides = document.getElementsByClassName("slides");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
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
