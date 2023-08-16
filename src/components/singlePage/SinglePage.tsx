import "./SinglePage.scss"
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';


type Props ={
    id:number,
    img?:string,
    title:string,
    info:object,
    // because its just a single object
    chart?:{
        dataKeys:{name:string, color:string}[],
        // data:object[];
        // because we are having an array of data
    },
    activities?:{time:string, text:string}[]

}

const SinglePage =(props:Props)=>{

    return(
        <div className="singlePage">
            <div className="view">
                <div className="info">
                    <div className="topInfo">
                       {props.img && (<img src={props.img} alt="img" />)}
                        <h1>{props.title}</h1>
                        <button>Update</button>
                    </div>
                    <div className="details">
                        {Object.entries(props.info).map((item)=>(

                        <div className="item" key={item[0]}>
                            <span className="itemTitle">{item[0]}</span>
                            <span className="itemValue">{item[1]}</span>
                        </div>
                
                        ))}
                    </div>
                </div>
                <hr />
            { props.chart &&   (<div className="chart">
                <ResponsiveContainer width="99%" height="100%">
        <LineChart
        //   width={500}
        //   height={300}
        //   data={props.chart.data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
       { props.chart.dataKeys.map((dataKey)=>(
             <Line type="monotone" dataKey={dataKey.name} stroke={dataKey.color} activeDot={{ r: 8 }} />

       )) }
        </LineChart>
      </ResponsiveContainer>
                </div>)}
            </div>
            <div className="activities">
                <h2>Latest Activities</h2>
                <ul>
               { props.activities &&  
                    ( props.activities.map((activity)=>(
                     <li key={activity.text}>
                     <div>
                         <p>{activity.text}</p>
                         <time>{activity.time}</time>
                     </div>
                 </li>
                  )))}
                </ul>
            </div>
        </div>
    )
    
}


export default SinglePage