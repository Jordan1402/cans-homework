basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    if (input.buttonIsPressed(Button.B)) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        for (let index = 0; index < 6; index++) {
            pins.digitalWritePin(DigitalPin.P2, 1)
            pins.digitalWritePin(DigitalPin.P1, 1)
            basic.pause(500)
            pins.digitalWritePin(DigitalPin.P1, 0)
            basic.pause(500)
        }
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
    if (input.buttonIsPressed(Button.A)) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        for (let index = 0; index < 5; index++) {
            pins.digitalWritePin(DigitalPin.P1, 1)
            basic.pause(500)
            pins.digitalWritePin(DigitalPin.P1, 0)
            basic.pause(500)
        }
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(2000)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
})
