document.addEventListener('DOMContentLoaded', function() {
  const progressData = [];
  
  function createWeatherCard(item) {
    const card = document.createElement('div');
    card.classList.add('weather-block');

    const infoContainer = document.createElement('div');
    infoContainer.classList.add('weather-block__info');
  
    const title = document.createElement('div');
    title.classList.add('weather-block__title');
    title.textContent = item.title;
  
    const icon = document.createElement('img');
    icon.classList.add('weather-block__icon')
    icon.src = item.icon;
  
    const value = document.createElement('div');
    value.classList.add('weather-block__value');
    value.textContent = item.value;
  
    const addInfo = document.createElement('div');
    addInfo.classList.add('weather-block__add-info');
    if (typeof item.additionalInfo === 'object') {
      addInfo.style.display = 'flex';
      addInfo.style.width = '100%';
      addInfo.style.justifyContent = 'space-between';
      const min = document.createElement('div');
      const max = document.createElement('div');
      min.innerHTML = item.additionalInfo.min.toString()+'%';
      max.innerHTML = item.additionalInfo.max.toString()+'%';
      addInfo.appendChild(min);
      addInfo.appendChild(max);
    }
    else{
      addInfo.innerHTML = item.additionalInfo;
    }
  
    card.appendChild(title);
    card.appendChild(icon);
    card.appendChild(value);
  
    if (["Влажность", "Давление", "Видимость"].includes(item.title)) {
      {
        item.title === "Давление" ? progressData.push(parseInt(item.value) / 10) : progressData.push(parseInt(item.value))
      }
      const slider = document.createElement('div');
      slider.classList.add('weather-block__slider');
      slider.classList.add(item.title === "Давление" ? 'weather-block__slider--1' : 'weather-block__slider--2');
      
      const circle = document.createElement('div');
      circle.classList.add('weather-block__slider-circle');
      
      slider.appendChild(circle);
      addInfo.style.minHeight = 'auto';
      infoContainer.appendChild(slider)
    }

    infoContainer.appendChild(addInfo);
    card.appendChild(infoContainer);
  
    return card;
  }

  const weatherData = [
    { title: "Влажность", value: "75%", icon: './public/icons/humidity.svg', additionalInfo: { min: 0, max: 100 } },
    { title: "Давление", value: "761", icon: './public/icons/pressure.svg', additionalInfo: 'Повышенное' },
    { title: "Видимость", value: "28 км", icon: './public/icons/visibility.svg', additionalInfo: 'Нормальная' },
    { title: "Рассвет", value: "8:42", icon: './public/icons/sunrise.svg', additionalInfo: 'Прошло: 02:47 ' },
    { title: "Закат", value: "16:37", icon: './public/icons/sunset.svg', additionalInfo: 'Осталось: 05:08' },
    { title: "Сила ветра", value: "2 м/с", icon: './public/icons/windPower.svg', additionalInfo: 'Северо-Западный' }
  ];

  const cardContainer = document.querySelector('.weather-block-menu');
  
  function moveProgress(element, number){
    element.style.left = (element.style.left + number) + "%";
  }

  weatherData.forEach((item) => {
    const card = createWeatherCard(item);
    cardContainer.appendChild(card);
  });

  const progressBars = Array.from(document.querySelectorAll('.weather-block__slider-circle'));
  
  for (let i = 0; i < progressBars.length; ++i){
    moveProgress(progressBars[i], progressData[i]);
  }
});