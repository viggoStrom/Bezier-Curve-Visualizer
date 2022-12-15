/** @type {HTMLCanvasElement} */


const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

// defines the internal pixel width and height that differs from the css style
canvas.width = 1000
canvas.height = canvas.width * 2 / 3

const line1 = new linearInterpolation([canvas.width * 1 / 6, 500], [canvas.width * 1 / 3], 200)
const line2 = new linearInterpolation([canvas.width * 1 / 3, 200], [canvas.width * 2 / 3], 200)
const line3 = new linearInterpolation([canvas.width * 2 / 3, 200], [canvas.width * 5 / 6], 500)

// const line4 = new linearInterpolation(line1.getU, line2.getU)

line1.update(.3)
line2.update(.3)
line3.update(.3)

// line4.update(.3)