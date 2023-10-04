const lunchText = document.querySelector('#lunchText')
const hours = new Date().getHours()

console.log(hours)

if (hours >= 11 && hours < 15) {
  lunchText.innerHTML = 'Sim'
} else {
  lunchText.innerHTML = 'Não'
}