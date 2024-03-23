import React from 'react'
import ChartComponent from '../../component/helper/ChartComponent'
import './Dashboard.css'
import PieChartComponent from '../../component/helper/PieChartcomponent';
export default function Dashboard() {
  const data = [
    { name: 'Category A', value: 50 },
    { name: 'Category B', value: 80 },
    { name: 'Category C', value: 120 },
    { name: 'Category D', value: 200 },
    { name: 'Category E', value: 150 },
  ];
  const data2 = [
    { name: ' A', value: 50 },
    { name: ' B', value: 80 },
    { name: ' C', value: 120 },
    { name: ' D', value: 200 },
    { name: ' E', value: 150 },
  ];
  return (
    <div>
    <section className='Bar-graph-section'>
      <section className='Bar-graph-1'>
        <ChartComponent data={data}/>
      </section>
      <section className='Bar-graph-1'>
        <PieChartComponent/>
      </section>
    </section>
      <section className='Bar-graph-2'>
        <ChartComponent data={data2}/>
      </section>
    </div>
  )
}
