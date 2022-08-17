function mOver(obj) {
    obj.innerHTML = "Thank you"
}

function mOut(obj) {
    obj.innerHTML = "Mouse Over Me"
}

function sunset() {
document.getElementById("theimg").src = "local/IMG_6829.JPG"
}

function original() {
    document.getElementById("theimg").src = "local/IMG_2652.JPG"
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("scrollbar").style.top = "0";
  } else {
    document.getElementById("scrollbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}