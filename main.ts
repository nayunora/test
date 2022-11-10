let lightsOn = 0
input.onGesture(Gesture.TiltRight, function () {
    music.playMelody("C5 G B A F A C5 B ", 120)
})
input.onGesture(Gesture.TiltLeft, function () {
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
	
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.lightLevel())
    music.playSoundEffect(music.createSoundEffect(
    WaveShape.Sine,
    200,
    600,
    255,
    0,
    150,
    SoundExpressionEffect.None,
    InterpolationCurve.Linear
    ), SoundExpressionPlayMode.UntilDone)
})
input.onSound(DetectedSound.Loud, function () {
    lightsOn = lightsOn
    basic.showString("" + (lightsOn))
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("Hello!")
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . . # .
        # . . . #
        . . . . #
        # . . . #
        . . . # .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # # . .
        . # # # .
        # # # # #
        # # # # #
        # # # # .
        `)
})
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P13, 1)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P14, 1)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P13, 0)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P14, 0)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P15, 0)
    basic.pause(100)
})
