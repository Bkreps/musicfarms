$('.carousel').carousel({
    interval: false
});


// $('.link').on('click', function() {
//     $('.modal').modal('show')
//     $('.carousel').carousel(1);
// });

$('.link').on('click', function() {
    $('.modal').modal('show');
    $('.carousel').carousel($(this).index());
    console.log(this.index);
});



// const gallery = [/gallerytest2/vatraandcosmic/vandc1.jpg, /gallerytest2/vatraandcosmic/vandc2.jpg, /gallerytest2/vatraandcosmic/vandc3.jpg];

// var classesNodeList = document.querySelectorAll(".image");
// var classes = Array.prototype.map.call(classesNodeList, function(element) {
//     return element.value;
// });

// var classes = document.getElementsByClassName("image"); // Do not use a period here!
// var values = Array.prototype.map.call(classes, function(el) {
//     return el.value;
// });

// var classes = document.querySelectorAll(".image").value,
//     values = [];

// for(var i = 0; i < classes.length; i++) {
//     values.push(classes[i].value);
// }

// console.log(values);
var arr=[];
$(document).ready(function(){
    
    $(".image").each(function(){ arr.push($(this));});
    // $.each(arr,function(key,val){ val.css('color','gray')});  
});

console.log(arr);



