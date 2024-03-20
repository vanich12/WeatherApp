document.addEventListener("DOMContentLoaded", function () {

const searchElement = document.querySelector('.header__search')
const wrapper = document.querySelector('.search_container')
const searchIcon = document.querySelector('.searc_icon')
const closeIcon = document.querySelector('.header__icon')

searchElement.addEventListener('change',function (e) {
  console.log(e.target.value)
})

searchElement.addEventListener('focus', ()=> {
  wrapper.classList.add('search_container--active')
})

searchElement.addEventListener('blur', ()=>{
  wrapper.classList.remove('search_container--active')
  searchElement.value = ''
})

closeIcon.addEventListener('click',()=>{
  wrapper.classList.remove('search_container--active')
  searchElement.value = ''
})
})