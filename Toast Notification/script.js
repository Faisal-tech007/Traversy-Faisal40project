const button = document.getElementById('button')
const toasts  = document.getElementById('toasts')

const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
]

const types = ['info','success','fail']

button.addEventListener('click', () => createNOtification ())

function createNOtification (messages = null, type = null) {
  const notif = document.createElement('div')
  notif.classList.add('toast')
  notif.classList.add(type ? type : getRandomeTypes ())

  notif.innerHTML = messages ? messages : getRandomMessages()

  toasts.appendChild(notif)

  setTimeout(() => {
    notif.remove()
  }, 3000)
}

function getRandomMessages () {
    return messages[Math.floor(Math.random() * messages.length)]
}

function getRandomeTypes () {
    return types[Math.floor(Math.random() * types.length)]
}