/** @type {HTMLCanvasElement} */


class linearInterpolation {
    constructor(xy1, xy2) {
        this.x1 = xy1[0]
        this.y1 = xy1[1]
        this.x2 = xy2[0]
        this.y2 = xy2[1]
        this.uRadius = 10
        this.straightLineModifier = (this.y2 - this.y1) / (this.x2 - this.x1)
    }

    drawLine = () => {
        ctx.strokeStyle = "#252525"
        ctx.lineWidth = 4

        ctx.beginPath()
        ctx.moveTo(this.x1, this.y1)
        ctx.lineTo(this.x2, this.y2)
        ctx.stroke()
    }

    setU = (u) => {
        if (u < 0 || u > 1) {
            return console.error(`LinearInterpolation(): u is only defined for 0 <= u <= 1 and ${u} is not within the span`);
        }

        this.ux = this.x1 + u * (this.x2 - this.x1)
        this.uy = this.y1 + u * (this.y2 - this.y1)
    }

    getU = () => {
        return [this.ux, this.uy]
    }

    drawU = () => {
        ctx.strokeStyle = "#363636"
        ctx.lineWidth = 4

        ctx.beginPath()
        ctx.arc(this.ux, this.uy, this.uRadius, 0, 2 * Math.PI)
        ctx.stroke()
    }

    update = (u) => {
        this.drawLine()
        this.setU(u)
        this.drawU()
    }
}