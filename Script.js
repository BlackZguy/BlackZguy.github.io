const hints = ['พี่ตัวสูง อาจเจอพี่ได้บ่อยถ้าถุกที่', 'พี่เคยเดินไปหาเพื่อนๆในห้องเองตอนเรียน', 'อาจเจอพี่ได้บ่อยๆที่ทำงานของห้อง', 'น้องอาจเคยเห็นพี่แล้วตอนก่อนเปิดเทอม', 'พี่เป็นเด้กแข่งห้องหุ่นยนต์']

function updatetime() {
  let Time = new Date()
  let hinttime = new Date(`2025-06-08T00:00:00Z`)
  document.getElementById('time').innerHTML = `${Time}`.slice(0, 24)

  for (let i = 1; i <= 5; i++) {
    if (Time > hinttime) {
    document.getElementById(`hint${i}`).innerHTML = hints.slice(i - 1, i)
    } else {
      document.getElementById(`hint${i}`).innerHTML = 'just wait bro'
    }
    hinttime.setDate(hinttime.getDate() + 1)
  }
}

updatetime()
setInterval(updatetime, 1000)