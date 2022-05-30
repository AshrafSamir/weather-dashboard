import * as d3 from 'd3';
import {useEffect} from 'react';
import { useSelector } from 'react-redux';

const LineChart = (props) => {


	const {width, height } = props;
  const { chartData } = useSelector((state) => state.weather)

  useEffect(()=>{
    if (chartData.length > 0) {
      drawChart();
    } 
  },[chartData])

    
    const drawChart = () => {
  
      // Establish margins
    const margin = { top: 10, right: 50, bottom: 50, left: 50 };
    // establish x and y max values
    const yMinValue = d3.min(chartData, d => d.absMaxTemp);
    const yMaxValue = d3.max(chartData, d => d.absMaxTemp);
  
    // create chart area
    const svg = d3
        .select('#container')
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);
  
    // create scale for the x axis
    const xScale = d3
        .scaleBand()
        .domain(chartData.map(function(d) { return d.name}))
        .rangeRound([0, width])

        
    // create scale for y axis
    const yScale = d3
        .scaleLinear()
        .range([height, 0])
        .domain([yMinValue, yMaxValue]);
  
    // Create x grid
    svg
        .append('g')
        .attr('class', 'grid')
        .attr('transform', `translate(0,${height})`)
        .call(
        d3.axisBottom(xScale)
            .tickSize(-height)
            .tickFormat(''),
        );
  
    // create y grid
    svg
        .append('g')
        .attr('class', 'grid')
        .call(
            d3.axisLeft(yScale)
            .tickSize(-width)
            .tickFormat(''),
        );
  
    // create the x axis on the bottom
    svg
        .append('g')
        .attr('class', 'x-axis')
        .attr('transform', `translate(0,${height})`)
        .call(d3.axisBottom().scale(xScale).tickSize(15))
        .selectAll("text")  
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", ".15em")
        .attr("transform", "rotate(-35)");
  
    // create the y axis on the left
    svg
        .append('g')
        .attr('class', 'y-axis')
        .call(d3.axisLeft(yScale));
  
          // create a line with x and y coordinates scaled to the data
    const line = d3
        .line()
        .x(d => xScale(d.name))
        .y(d => yScale(d.absMaxTemp))    
        .curve(d3.curveMonotoneX);
  
    // draw the line
    svg
        .append('path')
        .datum(chartData)
        .attr('fill', 'none')
        .attr('stroke', '#82CFFD')
        .attr('stroke-width', 4)
        .attr('class', 'line') 
        .attr('d', line);
      }
  
    return (
      <div>
          <h4> Line Chart </h4>
          <div id="container" />
      </div>
    )
  }
  
  export default LineChart;