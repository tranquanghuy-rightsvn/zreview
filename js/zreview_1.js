document.querySelector('.more').addEventListener('click', function() {
  var a = document.querySelector('.category-popup');
  if (a.classList.contains('active')) {
    a.classList.remove('active');
    a.style.visibility = 'hidden';
    a.style.opacity = '0';
    a.style.display = 'none';
  } else {
    a.classList.add('active');
    a.style.visibility = 'visible';
    a.style.opacity = '1';
    a.style.display = 'block';
  }
});


function loadImageBasedOnScreenWidth() {
  var screenWidth = window.innerWidth;
  var imgElement = document.getElementById('banner-quangcao');

  if (screenWidth > 780) {
    imgElement.src = './images/zontape_lg.png';
  } else {
    imgElement.src = './images/zontape.png';
  }
}

window.onload = loadImageBasedOnScreenWidth;
window.onresize = loadImageBasedOnScreenWidth;
