import "./BarChatBox.scss"
import { BarChart, Bar, Tooltip, ResponsiveContainer } from 'recharts';

type Props ={
    title:string,
    dataKey:string,
    color:string,
    barChartData: object[]

}

const BarChatBox = (props:Props) => {
  return (
    <div className="barChatBox">
      <h1>{props.title}</h1>
      <div className="chart">
      <ResponsiveContainer width="99%" height={150}>
        <BarChart data={props.barChartData}>
        <Tooltip
          contentStyle={{background:"#2a3447", borderRadius:"5px"}}
          labelStyle={{display:"none"}}
          cursor={{fill:"none"}}
          />
          <Bar dataKey= {props.dataKey} fill={props.color} />
        </BarChart>
      </ResponsiveContainer>
      </div>
    </div>
  )
}

export default BarChatBox
