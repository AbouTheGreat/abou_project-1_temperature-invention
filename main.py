#CircuitISworking
light.set_brightness(100)
light.set_pixel_color(0,color.rgb(0, 255, 0))
pause(200)
light.clear()
light.set_pixel_color(1,color.rgb(0, 255, 0))
pause(200)
light.clear()
light.set_pixel_color(2,color.rgb(0, 255, 0))
pause(200)
light.clear()
light.set_pixel_color(3,color.rgb(0, 255, 0))
pause(200)
light.clear()
light.set_pixel_color(4,color.rgb(0, 255, 0))
pause(200)
light.clear()
light.set_pixel_color(5,color.rgb(0, 255, 0))
pause(200)
light.clear()
light.set_pixel_color(6,color.rgb(0, 255, 0))
pause(200)
light.clear()
light.set_pixel_color(7,color.rgb(0, 255, 0))
pause(200)
light.clear()
light.set_pixel_color(8,color.rgb(0, 255, 0))
pause(200)
light.clear()
light.set_pixel_color(9,color.rgb(0, 255, 0))
pause(200)
light.clear()

#TemperatureChecker
while True:
    #HotestTempForHumans 
    print("The temperture is : " + input.temperature(TemperatureUnit.FAHRENHEIT) + "°F")
    if input.temperature(TemperatureUnit.FAHRENHEIT) > 100 :
        while True:
            music.ba_ding.play(1000)
            light.set_all(color.rgb(255, 0, 0))
            pause(200)
            light.clear()
            pause(200)
            light.set_all(color.rgb(255, 0, 0))
    #coldestTempForHumans           
    elif input.temperature(TemperatureUnit.FAHRENHEIT) < 60 :
        print("The temperture is : " + input.temperature(TemperatureUnit.FAHRENHEIT) + "°F")
        while True:
            music.ba_ding.play(1000)
            light.set_all(color.rgb(0, 0, 255))
            pause(200)
            light.clear()
            pause(200)
            light.set_all(color.rgb(0, 0, 255))
    elif 60 < input.temperature(TemperatureUnit.FAHRENHEIT) < 100 :
        print("The temperture is : " + input.temperature(TemperatureUnit.FAHRENHEIT) + "°F")
        while True:
            music.ba_ding.play(50)
            light.set_all(color.rgb(0, 255, 0))
            pause(1000)
            light.clear()
            pause(1000)
            light.set_all(color.rgb(0, 255, 0))



