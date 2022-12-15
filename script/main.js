/** @type {HTMLCanvasElement} */


const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

// defines the internal pixel width and height that differs from the css style
canvas.width = "1000"
canvas.height = canvas.width * 3/2


linearInterpolation(0.5)