document.addEventListener('DOMContentLoaded', function() {
  const progressData = [];
  function createWeatherCard(item) {
    const card = document.createElement('div');
    card.classList.add('weather_block');

    const infoContainer = document.createElement('div')
    infoContainer.classList.add('weather_block_Info')
  
    const title = document.createElement('div');
    title.classList.add('weather_block_title');
    title.textContent = item.title;
  
    const icon = document.createElement('img');
    icon.src = item.icon;
  
    const value = document.createElement('div');
    value.classList.add('weather_block_value');
    value.textContent = item.value;
  
    const addInfo = document.createElement('div');
    addInfo.classList.add('weather_block_addInfo');
    addInfo.innerHTML = item.additionalInfo;

  
    card.appendChild(title);
    card.appendChild(icon);
    card.appendChild(value);
  
    if (["Влажность", "Давление", "Видимость"].includes(item.title)) {
      {
        item.title === "Давление" ? progressData.push(parseInt(item.value) / 10) : progressData.push(parseInt(item.value))
      }
      const slider = document.createElement('div');
      slider.classList.add('weather_block_slider');
      slider.classList.add(item.title === "Давление" ? 'weather_block_slider--1' : 'weather_block_slider--2');
  
      const circle = document.createElement('div');
      circle.classList.add('weather_block_slider_circle');
      
      slider.appendChild(circle);
      infoContainer.appendChild(slider)
    }

    infoContainer.appendChild(addInfo);

    card.appendChild(infoContainer);
  
    return card;
  }



/// мне было лень писать еще один див под проценты :)
  const weatherData = [
    { title: "Влажность", value: "75%", icon: 'public/icons/humidity.svg', additionalInfo: `0%&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;100%` },
    { title: "Давление", value: "761", icon: 'public/icons/pressure.svg', additionalInfo: 'Повышенное' },
    { title: "Видимость", value: "28 км", icon: 'public/icons/visibility.svg', additionalInfo: 'Нормальная' },
    { title: "Рассвет", value: "8:42", icon: 'public/icons/sunrise.svg', additionalInfo: 'Прошло: 02:47 ' },
    { title: "Закат", value: "16:37", icon: 'public/icons/sunset.svg', additionalInfo: 'Осталось: 05:08' },
    { title: "Сила ветра", value: "2 м/с", icon: 'public/icons/windPower.svg', additionalInfo: 'Северо-Западный' }
  ];

  const cardContainer = document.querySelector('.weather_block_menu');
  // движение круга
  function moveProgress(element, number){
    element.style.left = (element.style.left + number) + "%";
  }

  weatherData.forEach((item) => {
    const card = createWeatherCard(item);
    cardContainer.appendChild(card);
  });

  const progressBars = Array.from(document.querySelectorAll('.weather_block_slider_circle'));
  
  for (let i = 0; i < progressBars.length; ++i){
    moveProgress(progressBars[i], progressData[i]);
  }
});