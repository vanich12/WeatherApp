document.addEventListener("DOMContentLoaded", function () {
  const sliderHead = document.querySelector('.slider_head')
  const sliderContent = document.querySelector('.slider_content')

  const nearestTimeData = [
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
  ]
  
  function hoursComponent(data) {
    let html = '';
    const timeData = data === '24_hours' ? nearestTimeData : subsequentTimeData;
    timeData.forEach((item) => {
        html += `
        <div class="slider_content_arrow_right">
          <img src="public/icons/arrowRight.svg" alt="">
        </div>
        
       <div class="slider_content_arrow_left">
          <img src="public/icons/arrowLeft.svg" alt="">
       </div>
            <div class="slider_content_item">
                <div class="slider_content_item_el">${item.time}</div>
                <img src="${item.icon}" alt="Закрыть" />
                <div class="slider_content_item_el">${item.temp}</div>
            </div>`;
    });
    return html;
};

  const timeObj = [
    {title:'24 часа', value:'24_hours', open: true, head: '', data:hoursComponent},
    {title:'5 дней', value:'5_days', open: false, head: '', data:hoursComponent}
    ]

    timeObj.forEach((item)=>{
      let html = ''
      html=`
      <div class="slider_head_item">на ${item.title}</div>
      `
      sliderHead.innerHTML += html 
    })

    const sliderItems = document.querySelectorAll('.slider_head_item')
    const times = Array.from(sliderItems);

    timeObj.forEach((item,i)=>{
      item.head = times[i];
    })

    timeObj.forEach((item,index)=>{
    if(item.open)
    {   
       item.head.classList.add('slider_head_item--active');
       sliderContent.innerHTML = item.data.call(item, item.value)
    }
    item.head.addEventListener('click', () => {
      timeObj.forEach((otherItem, otherIndex) => {
          if (index === otherIndex) {
              otherItem.open = true;
              otherItem.head.classList.add('slider_head_item--active');
              sliderContent.classList.add('hidden'); // Добавить класс для запуска анимации
              setTimeout(() => {
                sliderContent.innerHTML = item.data.call(item, item.value);
                sliderContent.classList.remove('hidden'); // Убрать класс после завершения анимации
              }, 300); // Задержка,
          } else {
              otherItem.open = false;
              otherItem.head.classList.remove('slider_head_item--active');
          }
      });
  });
  })



  })