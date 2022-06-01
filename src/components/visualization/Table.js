import * as d3 from 'd3';
import { useEffect } from 'react';

const Table = (props) => {


    const { astronomy } = props 

    useEffect(() => {
        if(Object.keys(astronomy).length !== 0){
            d3.select("table").remove()
            const data = [
                { "Astronomy": "moon_illumination", "Time": astronomy.moon_illumination},
                { "Astronomy": "moon_phase", "Time": astronomy.moon_phase },
                { "Astronomy": "moonrise", "Time": astronomy.moonrise  },
                { "Astronomy": "moonset", "Time":astronomy.moonset },
                { "Astronomy": "sunrise", "Time":astronomy.sunrise },
                { "Astronomy": "sunset", "Time":astronomy.sunset }
              ]
            tabulate(data, ['Astronomy','Time']);
        }    
    }, [astronomy])


              
      function tabulate(data, columns) {

          var table = d3.select('#container').append('table')
          var thead = table.append('thead')
          var	tbody = table.append('tbody');
    
          // append the header row
          thead.append('tr')
            .selectAll('th')
            .data(columns).enter()
            .append('th')
              .text(function (column) { return column; });
      
          // create a row for each object in the data
          var rows = tbody.selectAll('tr')
            .data(data)
            .enter()
            .append('tr');
      
          // create a cell in each row for each column
          rows.selectAll('td')
            .data(function (row) {
              return columns.map(function (column) {
                return {column: column, value: row[column]};
              });
            })
            .enter()
            .append('td')
              .text(function (d) { return d.value; });
      
        return table;
      }
    

    return (
        <div>
            <div id="container" />
        </div>
    )
}

export default Table;