import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';


class Chart extends Component {
    constructor(props){
      super(props);
      this.state = {
          chartData:{
            labels: [`Yes (${this.props.yes})`, `No (${this.props.no})`, `Maybe (${this.props.maybe})`],
            datasets: [
              {
                label: 'Legend',
                data: [
                  this.props.yes,
                  this.props.no,
                  this.props.maybe
                ],
                backgroundColor: [
                  '#08c39d',
                  '#eb2c97',
                  '#2fa1d4'
                ]
              }
            ]
          }
        }
    }

    static defaultProps = {
      displayTitle: true,
      displayLegend: true,
      legendPosition:'right',
    }
  
    render(){
      return (
        <div className="chart">        
          <Doughnut
            data={this.state.chartData}
            options={{
              title:{
                display: this.props.displayTitle,
                text:'Legend',
                fontSize: 25,  
                padding: 10,       
              },
              legend:{
                display: this.props.displayLegend,
                position: this.props.legendPosition,
                boxWidth: 10,
                fontSize: 18,
                  labels: {
                  boxWidth: 23,
                  fontSize: 18,
                  fontStyle: 'bold'
                }
              },             
              cutoutPercentage: 70
            // maintainAspectRatio: false
            }}
          />
        </div>
      )
    }
  }
  
  export default Chart;