import { useEffect } from 'react';
import ReactEcharts from "echarts-for-react";
import { useSelector } from 'react-redux';

const LineChart = (props) => {


    const { chartData } = useSelector((state) => state.weather)

    let yAxisData = []
    let xAxisData = []
    
    if(chartData){
        yAxisData = chartData.map((month)=>
            month.absMaxTemp
        )
        xAxisData = chartData.map((month)=>
            month.name
        )
    }

    useEffect(() => {

    }, [chartData])

    const option = {
        title: {
            text: 'Average temperature in every month'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['Avg temperature'],
            top: 50,
            right: 10,
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: xAxisData
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: 'Avg temperature',
                type: 'line',
                stack: 'Total',
                data: yAxisData
            }
        ]
    };




    return (
        <ReactEcharts  option={option} />
    )
}

export default LineChart;