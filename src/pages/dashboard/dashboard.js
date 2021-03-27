import BackgroundPhoto from '../../assets/gradienta-ix_kUDzCczo-unsplash.jpg'
import DashDrawer from '../../components/dashDrawer.js'

function Dashboard() {
  return (
    <div>
      <img src={BackgroundPhoto} alt="background.jpg" id="colorBackground"></img>
      <DashDrawer />
    </div>
  )

}

export default Dashboard;