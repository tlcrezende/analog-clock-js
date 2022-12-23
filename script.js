// A função setInterval chama a função do argumento a cada intervalo dado, no caso a cada 1000ms, isto é, a cada 1s
setInterval(setClock, 1000)

// atribui pra const os elementos do html
const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock() {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
}

// Cria função que recebe um elemento do html e a rotação
function setRotation(element, rotationRadio) {
    // busca a variável de rotação lá do css e atribui a rotação pra ela
    element.style.setProperty('--rotation', rotationRadio * 360)
}

setClock()
