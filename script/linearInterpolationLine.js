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
        if (u.toFixed(5) < 0 || u.toFixed(5) > 1) {
            return console.error(`LinearInterpolation(): u is only defined for 0 <= u <= 1 and ${u} is not within the span`);
        }

        this.ux = this.x1 + u * (this.x2 - this.x1)
        this.uy = this.y1 + u * (this.y2 - this.y1)
    }

    getU = () => {
        return [this.ux, this.uy]
    }

    getXY1 = () => {
        return [this.x1, this.y1]
    }
    getXY2 = () => {
        return [this.x2, this.y2]
    }

    setXY = (xy1, xy2) => {
        this.x1 = xy1[0]
        this.y1 = xy1[1]
        this.x2 = xy2[0]
        this.y2 = xy2[1]
    }

    drawU = () => {
        ctx.strokeStyle = "#363636"
        ctx.lineWidth = 4

        ctx.beginPath()
        ctx.arc(this.ux, this.uy, this.uRadius, 0, 2 * Math.PI)
        ctx.stroke()
    }

    update = (u, xy1, xy2) => {
        this.setXY(xy1, xy2)
        this.setU(u)

        this.drawLine()
        this.drawU()
    }
}

class marker {
    constructor() {
        this.cache = []
    }


    setXY = (xy) => {
        this.cache.push({ x: xy[0], y: xy[1] })
    }

    drawPath = () => {
        const cacheLength = this.cache.length

        for (let index = 0; index < cacheLength; index++) {
            const x = this.cache[index].x
            const y = this.cache[index].y

            ctx.fillStyle = "red"
            ctx.beginPath()
            ctx.arc(x, y, 2, 0, 2 * Math.PI)
            ctx.fill()
        }
    }

    update = (xy) => {
        this.setXY(xy)

        this.drawPath()
    }
}