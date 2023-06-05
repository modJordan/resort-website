window.onscroll = function () { myFunction() };

//get header
var header = documnet.getElementById("myHeader");

//get the offset position of the navbad
var sticky = header.offsetTop;

//add sticky class to header when you reach it's scroll posotion. remove "sticky" when you leave scroll position

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky")
  }
}