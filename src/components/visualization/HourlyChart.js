import React from 'react'
import ReactEcharts from "echarts-for-react"; 
import { useSelector } from 'react-redux';


export default function HourlyChart() {


    const { hourlyData } = useSelector((state) => state.weather)
    const xAxisData = ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00' ]
    let yAxisDataTempC = []
    let yAxisDataTempF = []
    
    if(hourlyData){
        yAxisDataTempC = hourlyData.map((hour)=>
            hour.tempC
        )
        yAxisDataTempF = hourlyData.map((hour)=>
            hour.tempF
        )
    }


    const option = {
        title: {
          text: 'Hourly Tempreture'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          data: ['TemperatureC', 'TemperatureF']
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: xAxisData
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: 'TemperatureC',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: yAxisDataTempC
          },
          {
            name: 'TemperatureF',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: yAxisDataTempF
          },
        ]
      }

    return (
        <ReactEcharts option={option} />
    )
}
