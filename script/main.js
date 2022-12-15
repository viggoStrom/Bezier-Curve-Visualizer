/** @type {HTMLCanvasElement} */


const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

// defines the internal pixel width and height that differs from the css style
canvas.width = 1000
canvas.height = canvas.width * 2 / 3

const temporaryGlobalU = .02

const line1 = new linearInterpolation([canvas.width * 1 / 6, 500], [canvas.width * 1 / 3, 200])
const line2 = new linearInterpolation([canvas.width * 1 / 3, 200], [canvas.width * 2 / 3, 200])
const line3 = new linearInterpolation([canvas.width * 2 / 3, 200], [canvas.width * 5 / 6, 500])

line1.update(temporaryGlobalU)
line2.update(temporaryGlobalU)
line3.update(temporaryGlobalU)

const line4 = new linearInterpolation(line1.getU(), line2.getU())
const line5 = new linearInterpolation(line2.getU(), line3.getU())

line4.update(temporaryGlobalU)
line5.update(temporaryGlobalU)

const line6 = new linearInterpolation(line4.getU(), line5.getU())

line6.update(temporaryGlobalU)

const frame = () => {
    
}