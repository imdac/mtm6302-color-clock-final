// retrieve the HTML elements
const $body = document.body
const $clock = document.getElementById('clock')

// 01:01:01
// add a preceeding 0 when less than 10
// if num is less than 10, return num with
// preceeding 0
// else return number
function addZero (num) {
  if (num < 10) {
    return '0' + num
  }

  return num 
}


setInterval(function () {
  // current date and time
  const now = new Date()

  // getting the components of time
  const hours = addZero(now.getHours())
  const minutes = addZero(now.getMinutes())
  const seconds = addZero(now.getSeconds())

  const hex = `#${hours}${minutes}${seconds}`
  $clock.textContent = hex
  $body.style.backgroundColor = hex
}, 1000)

