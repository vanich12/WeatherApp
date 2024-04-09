document.addEventListener("DOMContentLoaded", function () {
  const myImage = document.querySelector('.header_logo');
  const searchIcon = document.querySelector('.search-icon');
  const cardIcon = document.querySelectorAll('.weather-block__icon')
  // вот такая фигня с изменениями размеров тоже работает криво, буду рад если подскажите как это сделать поккрасивее, иногда размеры не меняются.
  const mediaQuery = window.matchMedia('(max-width: 768px)');
  const mediaQueryMobile = window.matchMedia('(max-width: 375px)');
  function handleScreenSizeChange(event) {
    if (event.matches) {
      myImage.src = "./public/icons/tabletLogo.svg";
      myImage.style.width = '54px'
      myImage.style.height = '48px'
    } else {
      myImage.src = "./public/icons/logo.svg";
    }
  }

  function handleMobileScreenSizeChange(event) {
    if (event.matches) {
      myImage.style.width = '32px'
      myImage.style.height = '32px'
      searchIcon.style.width = '16px'
      searchIcon.style.height = '16px'
      cardIcon.forEach((item)=>{
          item.style.width = '24px'
          item.style.height = '24px'
      })
      console.log('mobile')
    } 
    else{
      myImage.style.width = '192px'
      myImage.style.height = '48px'
    }
  }
  
  mediaQuery.addListener(handleScreenSizeChange);
  handleScreenSizeChange(mediaQuery); 
 
  mediaQueryMobile.addListener(handleMobileScreenSizeChange);
  handleMobileScreenSizeChange(mediaQueryMobile);
  })





