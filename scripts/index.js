document.addEventListener("DOMContentLoaded", function () {

  const searchElement = document.querySelector('.header__search')
  const wrapper = document.querySelector('.search-container')
  const searchIcon = document.querySelector('.search-icon')
  const closeIcon = document.querySelector('.header__icon')
  
  searchElement.addEventListener('change',function (e) {
    console.log(e.target.value)
  })
  
  searchElement.addEventListener('focus', ()=> {
    wrapper.classList.add('search-container--active')
  })
  
  searchElement.addEventListener('blur', ()=>{
    wrapper.classList.remove('search-container--active')
    searchElement.value = ''
  })
  
  closeIcon.addEventListener('click',()=>{
    wrapper.classList.remove('search-container--active')
    searchElement.value = ''
  })
  })