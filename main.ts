let a: Image = null
let b: Image = null
let tiempo = 0
input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
basic.forever(function () {
    a = images.createImage(`
        . . # . .
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        `)
    b = images.createImage(`
        . # # . .
        . # . # .
        . # # # .
        . # . # .
        . # # . .
        `)
    game.setScore(0)
    tiempo = 200
    for (let index = 0; index < 5; index++) {
        for (let x = 0; x <= 4; x++) {
            for (let y = 0; y <= 4; y++) {
                led.plot(x, y)
                basic.pause(tiempo)
            }
        }
        if (input.buttonIsPressed(Button.A)) {
            let y = 0
            let x = 0
            led.unplot(x, y)
        } else {
        	
        }
    }
})
