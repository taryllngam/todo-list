const task = document.getElementById('task')
const list = document.getElementById('list')
const push = document.getElementById('push')

function addTask () {
  if (task.value.length <= 0) {
    alert('please enter a task')
  } else {
    const li = document.createElement('li')
    li.innerHTML = task.value
    list.appendChild(li)
    const span = document.createElement('span')
    span.innerHTML = '\u00d7'
    li.appendChild(span)
  }
  task.value = ''
  saveData()
}

list.addEventListener(
  'click',
  function (e) {
    if (e.target.tagName === 'LI') {
      e.target.classList.toggle('checked')
      saveData()
    } else if (e.target.tagName === 'SPAN') {
      e.target.parentElement.remove()
      saveData()
    }
  },
  false
)

function saveData () {
  localStorage.setItem('data', list.innerHTML)
}

function showTask () {
  list.innerHTML = localStorage.getItem('data')
}
showTask()

push.addEventListener("click", addTask)
