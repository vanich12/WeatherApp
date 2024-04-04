document.addEventListener("DOMContentLoaded", function () {
  const sliderHead = document.querySelector('.slider__head')
  const sliderContent = document.querySelector('.slider__item-container')

  const nearestTimeData = [
    {time:'00:00', icon: 'public/icons/sky.svg', temp:'-7°'},
    {time:'00:00', icon: 'public/icons/sky.svg', temp:'-7°'},
    {time:'00:00', icon: 'public/icons/sky.svg', temp:'-7°'},
    {time:'00:00', icon: 'public/icons/sky.svg', temp:'-7°'},
    {time:'00:00', icon: 'public/icons/sky.svg', temp:'-7°'},
    {time:'00:00', icon: 'public/icons/sky.svg', temp:'-7°'},
    {time:'00:00', icon: 'public/icons/sky.svg', temp:'-7°'},
  ]

  const subsequentTimeData = [
    {time:'Вс, 07 янв.', icon: 'public/icons/clearSky.svg', temp:'от -17° до -11°'},
    {time:'Вс, 07 янв.', icon: 'public/icons/clearSky.svg', temp:'от -17° до -11°'},
    {time:'Вс, 07 янв.', icon: 'public/icons/clearSky.svg', temp:'от -17° до -11°'},
    {time:'Вс, 07 янв.', icon: 'public/icons/clearSky.svg', temp:'от -17° до -11°'},
    {time:'Вс, 07 янв.', icon: 'public/icons/clearSky.svg', temp:'от -17° до -11°'},
  ]
  
  function hoursComponent(data) {
    let html = '';
    const timeData = data === '24_hours' ? nearestTimeData : subsequentTimeData;
    const minWidth = data === '24_hours' ? '156px' : '275px'; // Установка различной ширины в зависимости от значения data

    timeData.forEach((item) => {
        html += `
          <div class="slider__content-item" style="min-width: ${minWidth};">
            <div class="slider__content-el">${item.time}</div>
            <img src="${item.icon}" alt="Закрыть" />
            <div class="slider__content-el">${item.temp}</div>
          </div>
       `;
    });    
    html+=`    <button class="btn card forecast-slider__navigation-btn" disabled>
    <img src="/7db0246f-d52/public/icons/arrowLeft.svg" alt="Назад">
  </button>`  

    return html;
  }

  const timeObj = [
    {title:'24 часа', value:'24_hours', open: true, head: '', data:hoursComponent},
    {title:'5 дней', value:'5_days', open: false, head: '', data:hoursComponent}
  ];

  timeObj.forEach((item)=>{
    let html = ''
    html=`
      <div class="slider__head-item">на ${item.title}</div>
    `;
    sliderHead.innerHTML += html; 
  });

  const sliderItems = document.querySelectorAll('.slider__head-item');
  const times = Array.from(sliderItems);

  timeObj.forEach((item,i)=>{
    item.head = times[i];
  });

  timeObj.forEach((item,index)=>{
    if(item.open) {   
      item.head.classList.add('slider__head-item--active');
      sliderContent.innerHTML = item.data.call(item, item.value);
    }
    item.head.addEventListener('click', () => {
      timeObj.forEach((otherItem, otherIndex) => {
          if (index === otherIndex) {
              otherItem.open = true;
              otherItem.head.classList.add('slider__head-item--active');
              sliderContent.classList.add('hidden'); // Добавить класс для запуска анимации
              setTimeout(() => {
                sliderContent.innerHTML = item.data.call(item, item.value);
                sliderContent.classList.remove('hidden'); // Убрать класс после завершения анимации
              }, 300); // Задержка,
          } else {
              otherItem.open = false;
              otherItem.head.classList.remove('slider__head-item--active');
          }
      });
    });
  });
});