// NAVIGATION FUNCTIONALITIES
const hamburger = document.querySelector('.hamburger-menu');
const mobileNav = document.querySelector('.mobile-nav');
const close = document.querySelector('.close');
const links = document.querySelectorAll('.link');

hamburger.addEventListener('click', (e) => {
  mobileNav.classList.add('mobile-nav-active');
});

close.addEventListener('click', (e) => {
  mobileNav.classList.remove('mobile-nav-active');
});

// BARNER SLIDDER FUNCTIONALY
const slides = document.querySelectorAll('.slide');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const auto = true;
const intervalTime = 5000;
let slideIterval;

const nextSlide = () => {
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // check if next slide
  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add('current');
  } else {
    // Add current slide to start
    slides[0].classList.add('current');
  }

  setTimeout(() => current.classList.remove('current'));
}

const prevSlide = () => {
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // check if previous slide
  if (current.previousElementSibling) {
    current.previousElementSibling.classList.add('current');
  } else {
    // Add current slide to last
    slides[slides.length - 1].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
}

// Button events
next.addEventListener('click', e => {
  nextSlide();
  if (auto) {
    clearInterval(slideIterval);
    slideIterval = setInterval(nextSlide, intervalTime);
  }
});

prev.addEventListener('click', e => {
  prevSlide();
  if (auto) {
    clearInterval(slideIterval);
    slideIterval = setInterval(prevSlide, intervalTime);
  }
});

// Auto slide
if (auto) {
  // Run next slide at interval time
  slideIterval = setInterval(nextSlide, intervalTime);
}



// ////////////////////////////////////////////////////////////////////////////////////////////////////
// GALLERY SCRIPT

const lightBoxContainer = document.querySelector('.lightbox');
const lightBoxImage = document.querySelector('.lightbox-img');
const counter = document.querySelector('.lightbox-counter');
const lightboxText = document.querySelector('.lightbox-text');
const galleryItems = document.querySelectorAll('.item');
const nextPic = document.querySelector('#next');
const pastPic = document.querySelector('#prev');

let index;
let imgSrc;

// close Lightbox when outside the picture is clicked

lightBoxContainer.addEventListener('click', (e) => {
  if (e.target !== lightBoxImage && e.target !== nextPic && e.target !== pastPic) {
    lightBox();
  }
});

galleryItems.forEach((item, itemIndex) => {
  item.querySelector('.fa').addEventListener('click', () => {
    index = itemIndex;
    lightBox();
    changeImage();
  });
});

nextPic.addEventListener('click', nextEl);
function nextEl(e) {
  if (index == galleryItems.length - 1) {
    index = 0;
  } else {
    index++;
  }
  changeImage();
}

pastPic.addEventListener('click', prevEl);
function prevEl() {
  if (index == 0) {
    index = galleryItems.length - 1;
  } else {
    index--;
  }
  changeImage();
}

function lightBox() {
  lightBoxContainer.classList.toggle('open');
}

lightBoxImage.addEventListener('click', nextEl);

function changeImage() {
  imgSrc = galleryItems[index].querySelector('img').getAttribute('src');
  lightBoxImage.src = imgSrc;
  counter.innerHTML = (index + 1) + " of " + galleryItems.length;
  lightboxText.innerHTML = galleryItems[index].querySelector('h2').innerHTML;
}


// CONTACT SCRIPT

// FOCUS IN AND OUT OF INPUT
function inputFocus() {
  const inputBox = document.querySelectorAll('.input-group input');
  const textareaBox = document.querySelector('.input-group textarea');

  inputBox.forEach(input => {
    input.addEventListener('blur', () => {
      const inputValue = input.value;
      if (inputValue === '') {
        input.classList.remove('has-value');
      } else {
        input.classList.add('has-value');
      }
    });
  });

  textareaBox.addEventListener('blur', blurredTextarea);
  function blurredTextarea() {
    const inputValue = textareaBox.value;
    if (inputValue === '') {
      textareaBox.classList.remove('has-value');
    } else {
      textareaBox.classList.add('has-value');
    }
  }

}
inputFocus();





