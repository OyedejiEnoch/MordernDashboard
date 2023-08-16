import "./Home.scss"
import Topbox from "../../components/topbox/Topbox"
import ChartBox from "../../components/chartBox/ChartBox"
import BarChatBox from "../../components/barChatBox/BarChatBox"
import { chartBoxUser, chartBoxConversion, chartBoxProduct, chartBoxRevenue , barChartBoxRevenue, barChartBoxVisit} from "../../data"
import PieChartBox from "../../components/pieChartBox/PieChartBox"
import AreaChartBox from "../../components/areaChart/AreaChartBox"
const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <Topbox />
      </div>
      <div className="box box2">
        <ChartBox  {...chartBoxUser}/>
        {/* title={title} title.name 
            title={title.title} name={title.name} props.title props.name 
        */}
      </div>
      <div className="box box3">
      <ChartBox  {...chartBoxProduct} />
      </div>
      <div className="box box4">
       <PieChartBox />
      </div>
      <div className="box box5">
      <ChartBox  {...chartBoxRevenue} />
      </div>
      <div className="box box6">
      <ChartBox  {...chartBoxConversion} />
      </div>
      <div className="box box7"><AreaChartBox /></div>
      <div className="box box8"><BarChatBox {...barChartBoxVisit} /></div>
      <div className="box box9"><BarChatBox {...barChartBoxRevenue} /></div>
    </div>
  )
}

export default Home
