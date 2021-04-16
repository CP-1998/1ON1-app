import BackgroundPhoto from '../../assets/gradienta-ix_kUDzCczo-unsplash.jpg'
import DashDrawer from '../../components/dashDrawer.js'
import { useSpring, animated } from 'react-spring'

function Dashboard() {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } })
  return (
    <div>
      <img src={BackgroundPhoto} alt="background.jpg" id="colorBackground"></img>
      <animated.div style={props}>
        <DashDrawer />
      </animated.div>
    </div>
  )

}

export default Dashboard;