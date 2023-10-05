const lunchText = document.querySelector('#lunchText')
const dinnerText = document.querySelector('#dinnerText')

const hours = new Date().getHours()

if(lunchText) {
  if (hours >= 11 && hours < 15) {
    lunchText.innerHTML = 'Sim'
  } else {
    lunchText.innerHTML = 'Não'
  }
}

if (dinnerText) {
  if (hours >= 17 && hours < 22) {
    dinnerText.innerHTML = 'Sim'
  } else {
    dinnerText.innerHTML = 'Não'
  }
}