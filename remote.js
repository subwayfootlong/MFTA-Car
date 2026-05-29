input.onButtonPressed(Button.A, function () {
    radio.sendString("left")
})
input.onGesture(Gesture.LogoUp, function () {
    radio.sendString("backward")
})
input.onGesture(Gesture.ScreenUp, function () {
    radio.sendString("stop")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("right")
})
input.onGesture(Gesture.LogoDown, function () {
    radio.sendString("forward")
})
radio.setGroup(1)
