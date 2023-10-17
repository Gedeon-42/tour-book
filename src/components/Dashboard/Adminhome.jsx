import React from 'react'
import TopUser from './TopUse'
import { LineChart, Line, Tooltip , AreaChart,BarChart, Legend,Bar, Rectangle, Area, XAxis, YAxis, CartesianGrid,ResponsiveContainer} from 'recharts';
import { FaClock, FaPlane, FaUser } from 'react-icons/fa';
const data = [
  { name: 'Jan', value: 50 },
  { name: 'Feb', value:100 },
  { name: 'Mar', value: 150 },
  { name: 'April', value: 200 },
  { name: 'May', value: 250 },
  { name: 'june', value: 200 },
  { name: 'july', value: 230 },
  { name: 'august', value: 300 },
  { name: 'september', value: 350 },
  { name: 'october', value: 300 },
  // Add more data points
];
const data1 = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const data2 = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

function Adminhome() {
  return (
    <div className='admin-home'>
<div className="admin-grid-content">
    <div className="box boxing1">
    <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={300}
          height={200}
          data={data1}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
    <div className="box boxing2">
    <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={200}
          height={200}
          data={data2}
          margin={{
            top: 5,
            right: 10,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
      </ResponsiveContainer>
    </div>
    <div className="box boxing3">
      <h2 className='payment-h1'>payment history</h2>
    <LineChart width={500} height={200} data={data}>
        <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
        <XAxis dataKey="name"  />
        <YAxis  />
        <Tooltip />
      </LineChart>
    </div>
</div>
<div className="admin-flex-content">
    <div className="flex1">
        <TopUser/>
    </div>
    <div className="flex2">
      <div className="flex2-header">
        <FaClock/>
        <p>remaining time to visit:</p>
        <div className="times">17:26</div>
      </div>
      <div className="flex2-body">
        <div className="flex2-body1">
          <h1>PAR</h1>
          <p>paris</p>
        </div>
        <p>--------<FaPlane/>----</p>
        <div className="flex2-body2">
          <h1>ENG</h1>
          <p>england</p>
        </div>
      </div>
      <div className="flexbody-footer">
      <div className="flex2-body1">
          <FaUser/>
          <p>seats</p>
        </div>
        <div className="flex2-body2">
          <h1>$230</h1>
        </div>
      </div>
<button className='btn-admin'>Go to cart</button>
    </div>
</div>
    </div>
  )
}

export default Adminhome