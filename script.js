const $ = s => document.querySelector(s)
const range = (min, max) => ~~(min + Math.random() * (max - min))

function init() {
    const stars = []

    const sky$ = $('.sky')
    const maxWidth = sky$.scrollWidth
    const maxHeight = sky$.scrollHeight
    const maxSize = Math.max(maxWidth, maxHeight)

    for (let i = 0; i < maxSize / 2; i++) {
        const size = range(1, 4)
        const lightRatio = size / 5 / 0.7
        const light = ~~(range(140, 255) * lightRatio)
        const left = range(0, maxSize)
        const top = range(0, maxSize)
        const style = `
      width: ${size}px;
      height: ${size}px;
      left: ${left}px;
      top: ${top}px;
      opacity: ${lightRatio};
      background: rgb(${light}, ${light}, ${light});
    `
        const star = `<span style="${style}" data-big=${size > 2}></span>`
        stars.push(star)
    }

    $('.stars').innerHTML = stars.join('')
}

init()

window.addEventListener('resize', init)