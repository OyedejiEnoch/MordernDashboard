import { ResponsiveContainer,PieChart, Pie, Sector, Cell, Tooltip } from "recharts"
import "./PieChartBox.scss"

const PieChartBox = () => {

    const data = [
        { name: 'Mobile', value: 400 , color:"#00e658"},
        { name: 'Laptop', value: 300, color:"#FFBB28" },
        { name: 'Tablet', value: 600, color:"#00e658" },
        { name: 'Tablet', value: 200, color:"#e42200" },
      ];


  return (
    <div className="pieChartBox">
        <h1>Leeds by Source</h1>
        <ResponsiveContainer  width="99%" height={300}>
        <PieChart >
            <Tooltip 
            contentStyle={{background:"white", borderRadius:"5px"}}
            />
        <Pie
          data={data}
          innerRadius={"70%"}
          outerRadius={"85%"}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((item) => (
            <Cell key={item.name} fill={item.color} />
          ))}
        </Pie>
      </PieChart>
        </ResponsiveContainer>

        <div className="options">
            {data.map((item)=>(
                <div className="option" key={item.name}>
                    <div className="title">
                        <div className="dot" style={{backgroundColor:item.color}} />
                        <span>{item.name}</span>
                    </div>
                    <span>{item.value}</span>
                </div>
            ))}
        </div>
    </div>
  )
}

export default PieChartBox
