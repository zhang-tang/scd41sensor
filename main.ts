scd41Sensor.begin(scd41Sensor.BeginPara.Elevation)
scd41Sensor.measure(scd41Sensor.MeasureStatus.Start)
basic.showNumber(0)
basic.showNumber(scd41Sensor.getdata(scd41Sensor.MeasureData.Temperature))
while (scd41Sensor.getStatus()) {
	
}
basic.forever(function () {
	
})
