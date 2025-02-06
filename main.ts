input.onButtonPressed(Button.A, function () {
    basic.pause(100)
    for (let posIndex = 0; posIndex <= 20; posIndex++) {
        servos.P0.setAngle(angle + posIndex)
        basic.pause(5)
    }
    if (angle != 170) {
        angle = angle + 20
    } else {
        angle = 170
    }
    basic.pause(500)
})
input.onButtonPressed(Button.B, function () {
    basic.pause(100)
    for (let posIndex = 0; posIndex <= 20; posIndex++) {
        servos.P0.setAngle(angle - posIndex)
        basic.pause(5)
    }
    if (angle != 10) {
        angle = angle - 20
    } else {
        angle = 10
    }
    basic.pause(500)
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index <= 170; index++) {
        servos.P1.setAngle(index)
    }
    basic.pause(850)
    for (let index = 0; index <= 170; index++) {
        servos.P1.setAngle(170 - index)
    }
    basic.pause(500)
})
let angle = 0
servos.P0.setRange(10, 170)
servos.P1.setRange(10, 170)
angle = 90
servos.P0.setAngle(angle)
basic.forever(function () {
    if (angle == 170) {
        music.play(music.tonePlayable(247, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else if (angle == 10) {
        music.play(music.tonePlayable(247, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
})
