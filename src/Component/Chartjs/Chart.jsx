import React from 'react'
import { Pie, Bar } from 'react-chartjs-2'

const Chart = ({data, type})=> {
    const chartData = {
        labels: [
            'Blod Test', 'USG', 'Digital X-Ray'
        ],
        dataSets: [
            {
                data: 'Data',
                backgroundColor: ['#FFDD700', '#1e90ff', '#800080']
            },
        ],
    };
  return type === 'pie' ? <Pie data={chartData}/> : <Bar data={chartData}/>
};

export default Chart