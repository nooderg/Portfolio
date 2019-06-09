import React from 'react'
import './confettis.css'

class Confettis extends React.Component{
    componentDidMount() {
        class Confetti
        {
            constructor(_options)
            {
                this.ctx    = _options.context
                this.width  = _options.width
                this.height = _options.height
                this.x      = _options.x
                this.y      = _options.y
                this.radius = Math.random()* 10 + 10
                this.angle  = _options.angle
                this.length = _options.length
                this.speedX = (_options.speedX + Math.random() -0.5) * 0.9
                if(this.speedX === 1)
                {
                    this.speedX = 0
                }
                this.speedY = (_options.speedY + Math.random() - 0.5) * 0.6
                this.color = `hsl(${Math.random() * 360}, 80%, 50%)`
            }
        
            draw()
            {
            
                if(this.x < - this.radius || 
                   this.x > this.width ||
                   this.y < - this.radius ||
                   this.y > this.height)
                {
                    this.isOut = true
                }
            
                this.speedX /= 1.1
                this.speedY = (this.speedY / 1.1) + 0.009
            
                if(this.length < 20)
                {
                    this.length = (Math.random() - 0.5) * 30
                }
                this.x += this.speedX * (this.length * 0.2)
                this.y += this.speedY * (this.length * 0.15) + 1

            
                this.ctx.save()
                this.ctx.beginPath()
                this.ctx.rect(this.x, this.y, this.radius, this.radius)
                this.ctx.fillStyle = this.color
                this.ctx.globalCompositeOperation = 'alpha'
                this.ctx.fill()
                this.ctx.restore()
            }
        }
        const $canvas = document.querySelector('#canvas')
        const $canvas2 = document.querySelector('#canvas-2')
        const ctx = $canvas.getContext('2d')
        let vector = []
        let confettisTab = []


         /* RESIZE */
        const resize = () =>
        {
            $canvas.width = window.innerWidth
            $canvas.height = window.innerHeight
            $canvas2.width = window.innerWidth
            $canvas2.height = window.innerHeight
        }
         window.addEventListener('resize', resize)
        resize()


         /* CURSOR */
        const cursorStatus = 
        {
            x : 0,
            y : 0,
            state : 0,
            press : false,
            pressLength : 0,
            pressAngle : 0,
            speed : {x : 0, y : 0},
        }

        /************************** FIRST CANVAS ***/
         const drawLine = (vector) =>
        {
            ctx.beginPath()
            ctx.moveTo(vector[0].x, vector[0].y)
            ctx.lineTo(cursorStatus.x, cursorStatus.y)
            ctx.lineWidth = 2
            ctx.strokeStyle = '#fff'
            ctx.stroke()
        }


         window.addEventListener('mousemove', (_e) =>
        {
            cursorStatus.x = _e.clientX
            cursorStatus.y = _e.clientY
             if(cursorStatus.press)
            {
                drawLine(vector)   
            }
            else
            {
                // ctx.clearRect(0, 0, $canvas.width, $canvas.height)
            }
        })


         window.addEventListener('mousedown', (_e) =>
        {
            // reset()
            cursorStatus.press = true
            cursorStatus.state = 1

            const x = _e.clientX
            const y = _e.clientY
             vector[0] = {
                x,
                y
            } 
        })


         window.addEventListener('mouseup', (_e) =>
        {
            cursorStatus.press = false
            cursorStatus.state = 2

            const x = _e.clientX
            const y = _e.clientY
             vector[1] = {
                x,
                y
            }
        })

         const loop = () =>
        {
            ctx.clearRect(0,0, $canvas.width, $canvas.height)

            window.requestAnimationFrame(loop)
            if(cursorStatus.state === 2)
            {
                cursorStatus.pressLength = Math.hypot(vector[1].x - vector[0].x, vector[0].y - vector[0].y)
                cursorStatus.pressAngle = Math.atan2(vector[0].y - vector[1].y, vector[0].x - vector[1].x)
                cursorStatus.speed.x = (Math.cos(cursorStatus.pressAngle))
                cursorStatus.speed.y = (Math.sin(cursorStatus.pressAngle))

                confettisTab.push(new Confetti({
                    context : ctx,
                    width   : $canvas.width, 
                    height  : $canvas.height,
                    x  : vector[0].x,
                    y : vector[0].y,
                    angle   : cursorStatus.pressAngle,
                    length  : cursorStatus.pressLength,
                    speedX  : cursorStatus.speed.x,
                    speedY  : cursorStatus.speed.y
                }))
                confettisTab.push(new Confetti({
                    context : ctx,
                    width   : $canvas.width, 
                    height  : $canvas.height,
                    x  : vector[0].x,
                    y : vector[0].y,
                    angle   : cursorStatus.pressAngle,
                    length  : cursorStatus.pressLength,
                    speedX  : cursorStatus.speed.x,
                    speedY  : cursorStatus.speed.y
                }))
                confettisTab.push(new Confetti({
                    context : ctx,
                    width   : $canvas.width, 
                    height  : $canvas.height,
                    x  : vector[0].x,
                    y : vector[0].y,
                    angle   : cursorStatus.pressAngle,
                    length  : cursorStatus.pressLength,
                    speedX  : cursorStatus.speed.x,
                    speedY  : cursorStatus.speed.y
                }))  
                confettisTab.push(new Confetti({
                    context : ctx,
                    width   : $canvas.width, 
                    height  : $canvas.height,
                    x  : vector[0].x,
                    y : vector[0].y,
                    angle   : cursorStatus.pressAngle,
                    length  : cursorStatus.pressLength,
                    speedX  : cursorStatus.speed.x,
                    speedY  : cursorStatus.speed.y
                }))  
                confettisTab.push(new Confetti({
                    context : ctx,
                    width   : $canvas.width, 
                    height  : $canvas.height,
                    x  : vector[0].x,
                    y : vector[0].y,
                    angle   : cursorStatus.pressAngle,
                    length  : cursorStatus.pressLength,
                    speedX  : cursorStatus.speed.x,
                    speedY  : cursorStatus.speed.y
                }))
                confettisTab.push(new Confetti({
                    context : ctx,
                    width   : $canvas.width, 
                    height  : $canvas.height,
                    x  : vector[0].x,
                    y : vector[0].y,
                    angle   : cursorStatus.pressAngle,
                    length  : cursorStatus.pressLength,
                    speedX  : cursorStatus.speed.x,
                    speedY  : cursorStatus.speed.y
                }))  
                confettisTab.push(new Confetti({
                    context : ctx,
                    width   : $canvas.width, 
                    height  : $canvas.height,
                    x  : vector[0].x,
                    y : vector[0].y,
                    angle   : cursorStatus.pressAngle,
                    length  : cursorStatus.pressLength,
                    speedX  : cursorStatus.speed.x,
                    speedY  : cursorStatus.speed.y
                }))  
                confettisTab.push(new Confetti({
                    context : ctx,
                    width   : $canvas.width, 
                    height  : $canvas.height,
                    x  : vector[0].x,
                    y : vector[0].y,
                    angle   : cursorStatus.pressAngle,
                    length  : cursorStatus.pressLength,
                    speedX  : cursorStatus.speed.x,
                    speedY  : cursorStatus.speed.y
                })) 
                confettisTab.push(new Confetti({
                    context : ctx,
                    width   : $canvas.width, 
                    height  : $canvas.height,
                    x  : vector[0].x,
                    y : vector[0].y,
                    angle   : cursorStatus.pressAngle,
                    length  : cursorStatus.pressLength,
                    speedX  : cursorStatus.speed.x,
                    speedY  : cursorStatus.speed.y
                })) 
                confettisTab.push(new Confetti({
                    context : ctx,
                    width   : $canvas.width, 
                    height  : $canvas.height,
                    x  : vector[0].x,
                    y : vector[0].y,
                    angle   : cursorStatus.pressAngle,
                    length  : cursorStatus.pressLength,
                    speedX  : cursorStatus.speed.x,
                    speedY  : cursorStatus.speed.y
                })) 
                confettisTab.push(new Confetti({
                    context : ctx,
                    width   : $canvas.width, 
                    height  : $canvas.height,
                    x  : vector[0].x,
                    y : vector[0].y,
                    angle   : cursorStatus.pressAngle,
                    length  : cursorStatus.pressLength,
                    speedX  : cursorStatus.speed.x,
                    speedY  : cursorStatus.speed.y
                })) 
                confettisTab.push(new Confetti({
                    context : ctx,
                    width   : $canvas.width, 
                    height  : $canvas.height,
                    x  : vector[0].x,
                    y : vector[0].y,
                    angle   : cursorStatus.pressAngle,
                    length  : cursorStatus.pressLength,
                    speedX  : cursorStatus.speed.x,
                    speedY  : cursorStatus.speed.y
                })) 
                confettisTab.push(new Confetti({
                    context : ctx,
                    width   : $canvas.width, 
                    height  : $canvas.height,
                    x  : vector[0].x,
                    y : vector[0].y,
                    angle   : cursorStatus.pressAngle,
                    length  : cursorStatus.pressLength,
                    speedX  : cursorStatus.speed.x,
                    speedY  : cursorStatus.speed.y
                })) 
                confettisTab.push(new Confetti({
                    context : ctx,
                    width   : $canvas.width, 
                    height  : $canvas.height,
                    x  : vector[0].x,
                    y : vector[0].y,
                    angle   : cursorStatus.pressAngle,
                    length  : cursorStatus.pressLength,
                    speedX  : cursorStatus.speed.x,
                    speedY  : cursorStatus.speed.y
                })) 
                confettisTab.push(new Confetti({
                    context : ctx,
                    width   : $canvas.width, 
                    height  : $canvas.height,
                    x  : vector[0].x,
                    y : vector[0].y,
                    angle   : cursorStatus.pressAngle,
                    length  : cursorStatus.pressLength,
                    speedX  : cursorStatus.speed.x,
                    speedY  : cursorStatus.speed.y
                })) 
                confettisTab.push(new Confetti({
                    context : ctx,
                    width   : $canvas.width, 
                    height  : $canvas.height,
                    x  : vector[0].x,
                    y : vector[0].y,
                    angle   : cursorStatus.pressAngle,
                    length  : cursorStatus.pressLength,
                    speedX  : cursorStatus.speed.x,
                    speedY  : cursorStatus.speed.y
                })) 
                confettisTab.push(new Confetti({
                    context : ctx,
                    width   : $canvas.width, 
                    height  : $canvas.height,
                    x  : vector[0].x,
                    y : vector[0].y,
                    angle   : cursorStatus.pressAngle,
                    length  : cursorStatus.pressLength,
                    speedX  : cursorStatus.speed.x,
                    speedY  : cursorStatus.speed.y
                })) 
                confettisTab.push(new Confetti({
                    context : ctx,
                    width   : $canvas.width, 
                    height  : $canvas.height,
                    x  : vector[0].x,
                    y : vector[0].y,
                    angle   : cursorStatus.pressAngle,
                    length  : cursorStatus.pressLength,
                    speedX  : cursorStatus.speed.x,
                    speedY  : cursorStatus.speed.y
                })) 
                confettisTab.push(new Confetti({
                    context : ctx,
                    width   : $canvas.width, 
                    height  : $canvas.height,
                    x  : vector[0].x,
                    y : vector[0].y,
                    angle   : cursorStatus.pressAngle,
                    length  : cursorStatus.pressLength,
                    speedX  : cursorStatus.speed.x,
                    speedY  : cursorStatus.speed.y
                })) 
                confettisTab.push(new Confetti({
                    context : ctx,
                    width   : $canvas.width, 
                    height  : $canvas.height,
                    x  : vector[0].x,
                    y : vector[0].y,
                    angle   : cursorStatus.pressAngle,
                    length  : cursorStatus.pressLength,
                    speedX  : cursorStatus.speed.x,
                    speedY  : cursorStatus.speed.y
                })) 
                confettisTab.push(new Confetti({
                    context : ctx,
                    width   : $canvas.width, 
                    height  : $canvas.height,
                    x  : vector[0].x,
                    y : vector[0].y,
                    angle   : cursorStatus.pressAngle,
                    length  : cursorStatus.pressLength,
                    speedX  : cursorStatus.speed.x,
                    speedY  : cursorStatus.speed.y
                })) 
                confettisTab.push(new Confetti({
                    context : ctx,
                    width   : $canvas.width, 
                    height  : $canvas.height,
                    x  : vector[0].x,
                    y : vector[0].y,
                    angle   : cursorStatus.pressAngle,
                    length  : cursorStatus.pressLength,
                    speedX  : cursorStatus.speed.x,
                    speedY  : cursorStatus.speed.y
                })) 
                confettisTab.push(new Confetti({
                    context : ctx,
                    width   : $canvas.width, 
                    height  : $canvas.height,
                    x  : vector[0].x,
                    y : vector[0].y,
                    angle   : cursorStatus.pressAngle,
                    length  : cursorStatus.pressLength,
                    speedX  : cursorStatus.speed.x,
                    speedY  : cursorStatus.speed.y
                })) 
                confettisTab.push(new Confetti({
                    context : ctx,
                    width   : $canvas.width, 
                    height  : $canvas.height,
                    x  : vector[0].x,
                    y : vector[0].y,
                    angle   : cursorStatus.pressAngle,
                    length  : cursorStatus.pressLength,
                    speedX  : cursorStatus.speed.x,
                    speedY  : cursorStatus.speed.y
                })) 

            }
            confettisTab.map( c => 
                c.draw()
            )

            confettisTab = confettisTab.filter(_confetti => !_confetti.isOut)
            cursorStatus.state = 0
        }
        loop() 


    }

    render() {
        return (
            <div className="confettis">
                <a href="/">Back to home</a>
                <h1>Confettis canon ! Press and hold to YEET some confettis.</h1>
                <canvas id="canvas-2"></canvas>
                <canvas id="canvas"></canvas>
            </div>
        )
    }
}

export default Confettis