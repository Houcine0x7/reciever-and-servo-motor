radio.setGroup(1)

radio.onReceivedNumber(function(onReceivedNumber){
    if(onReceivedNumber == 0){
        pins.servoWritePin(AnalogPin.P0,0)
    }
    else if(onReceivedNumber == 180){
        pins.servoWritePin(AnalogPin.P0,180)
    }
})