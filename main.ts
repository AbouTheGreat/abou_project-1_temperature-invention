// CircuitISworking
light.setBrightness(100)
light.setPixelColor(0, color.rgb(0, 255, 0))
pause(200)
light.clear()
light.setPixelColor(1, color.rgb(0, 255, 0))
pause(200)
light.clear()
light.setPixelColor(2, color.rgb(0, 255, 0))
pause(200)
light.clear()
light.setPixelColor(3, color.rgb(0, 255, 0))
pause(200)
light.clear()
light.setPixelColor(4, color.rgb(0, 255, 0))
pause(200)
light.clear()
light.setPixelColor(5, color.rgb(0, 255, 0))
pause(200)
light.clear()
light.setPixelColor(6, color.rgb(0, 255, 0))
pause(200)
light.clear()
light.setPixelColor(7, color.rgb(0, 255, 0))
pause(200)
light.clear()
light.setPixelColor(8, color.rgb(0, 255, 0))
pause(200)
light.clear()
light.setPixelColor(9, color.rgb(0, 255, 0))
pause(200)
light.clear()
// TemperatureChecker
while (true) {
    // HotestTempForHumans 
    console.log("The temperture is : " + input.temperature(TemperatureUnit.Fahrenheit) + "°F")
    if (input.temperature(TemperatureUnit.Fahrenheit) > 100) {
        while (true) {
            music.baDing.play(1000)
            light.setAll(color.rgb(255, 0, 0))
            pause(200)
            light.clear()
            pause(200)
            light.setAll(color.rgb(255, 0, 0))
        }
    } else if (input.temperature(TemperatureUnit.Fahrenheit) < 60) {
        // coldestTempForHumans           
        console.log("The temperture is : " + input.temperature(TemperatureUnit.Fahrenheit) + "°F")
        while (true) {
            music.baDing.play(1000)
            light.setAll(color.rgb(0, 0, 255))
            pause(200)
            light.clear()
            pause(200)
            light.setAll(color.rgb(0, 0, 255))
        }
    } else if (60 < input.temperature(TemperatureUnit.Fahrenheit) && input.temperature(TemperatureUnit.Fahrenheit) < 100) {
        console.log("The temperture is : " + input.temperature(TemperatureUnit.Fahrenheit) + "°F")
        while (true) {
            music.baDing.play(50)
            light.setAll(color.rgb(0, 255, 0))
            pause(1000)
            light.clear()
            pause(1000)
            light.setAll(color.rgb(0, 255, 0))
        }
    }
    
}
