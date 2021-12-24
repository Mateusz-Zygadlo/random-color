const app = document.querySelector('#app')
const generateButton = document.querySelector('#generate')
const intervalButton = document.querySelector('#interval')
const booleanValue = document.querySelector('#booleanValue')
const rgbColor = document.querySelector('#rgbColor')
let isWork = false
let isSetIntervalWork

const randomColor = () => {
  const rgbRandomColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
  app.style.backgroundColor = rgbRandomColor
  return rgbColor.textContent = rgbRandomColor
}

class Main {
  constructor(isWork, isSetIntervalWork){
    this.isWork = isWork
    this.isSetIntervalWork = isSetIntervalWork
  }

  changeIsWork(){
    this.isWork = !this.isWork
  }
  changeText(){
    booleanValue.textContent = this.isWork
  }
  checkIsWork(){
    return this.isWork
  }
}

class StartStop extends Main {
  start(){
    this.isSetIntervalWork = setInterval(randomColor, 1000)
  }
  stop(){
    clearInterval(this.isSetIntervalWork)
  }
}

const work = new StartStop()

const intervalButtonClick = () => {
  work.changeIsWork()
  work.changeText()
  
  if(work.checkIsWork()){
    return work.start()
  }
  return work.stop()
}

generateButton.addEventListener('click', randomColor)
intervalButton.addEventListener('click', intervalButtonClick)