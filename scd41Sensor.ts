
//% weight=100 color=#9999FF icon="\uf2f1" block="SCD41 Infrared CO2 Sensor (SEN0536)"
namespace scd41Sensor {

    export enum BeginPara {
        //% blockId="scd41Sensor_Elevation" block="Elevation"
        Elevation,
        //% blockId="scd41Sensor_Pressure" block="Air Pressure"
        Pressure,
    }

    export enum MeasureStatus {
        //% blockId="scd41Sensor_Start" block="Start"
        Start,
        //% blockId="scd41Sensor_Stop" block="Stop"
        Stop,
    }

    export enum MeasureData {
        //% blockId="scd41Sensor_Temperature" block="Temperature"
        Temperature,
        //% blockId="scd41Sensor_Humidity" block="Humidity"
        Humidity,
        //% blockId="scd41Sensor_CO2" block="CO2"
        CO2,
    }
    
    
    /**
     * 
     */

    //% blockId=scd41Sensor_begin block="SCD41 Init %para"
    //% weight=100
    export function begin(para: BeginPara): void {
        
    }

    /**
     * 
     */

    //% blockId=scd41Sensor_measure block="SCD41 %status measure"
    //% weight=80
    export function measure(status: MeasureStatus): void {

    }

    /**
     * 
     */

    //% blockId=scd41Sensor_getStatus block="Is the sensor data updated?"
    //% weight=60
    export function getStatus(): boolean {
        return true;
    }

    /**
     * 
     */

    //% blockId=scd41Sensor_getdata block="get %data"
    //% weight=40
    export function getdata(data: MeasureData): number {
        return 1;
    }

}