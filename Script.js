function updatetime() {
  document.getElementById('time').innerHTML = Date()
}

updatetime()
setInterval(updatetime, 1000)