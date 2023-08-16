import "./AreaChatBox.scss"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const AreaChartBox = () => {

  const data = [
    {
      name: 'Sun',
      users: 4000,
      products: 2400,
      sales: 2400,
    },
    {
      name: 'Mon',
      users: 3000,
      products: 1398,
      sales: 3210,
    },
    {
      name: 'Tue',
      users: 2000,
      products: 9800,
      sales: 2290,
    },
    {
      name: 'Wed',
      users: 2780,
      products: 3908,
      sales: 2000,
    },
    {
      name: 'Thur',
      users: 1890,
      products: 4800,
      sales: 2181,
    },
    {
      name: 'Fri',
      users: 1890,
      products: 4800,
      sales: 2181,
    },
    {
      name: 'Sat',
      users: 1890,
      products: 4800,
      sales: 2181,
    },
  ]


  return (
    <div className="areaChartBox">
      <h1>Revenue Analysis</h1>
      <div className="chart">
      <ResponsiveContainer width="99%" height="100%">
        <AreaChart
          // width={500}
          // height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="users" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="products" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="sales" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
      </ResponsiveContainer>
      </div>
    </div>
  )
}

export default AreaChartBox
