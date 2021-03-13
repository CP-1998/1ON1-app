import { animated } from 'react-spring';
import BackgroundPhoto from '../../assets/gradienta-ix_kUDzCczo-unsplash.jpg'
import { useSpring } from 'react-spring'
import OctaPhoto from '../../assets/aqua-737544_1920.png'
import './dashboardNewUser.css'



function DashboardNewUser() {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  const otherProps = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 5000 });
  return (
    <div>
      <img src={BackgroundPhoto} alt='background.jpg' id='colorBackground'></img>
      <animated.div id='pageContent' style={props}>
        <img src={OctaPhoto} alt="triangle.png" style={otherProps} className="triangleImg"></img>
        <div id="textDiv">
          <p>Click</p>
          <p>Here</p>
          <p>To</p>
          <p>Get</p>
          <p>Started</p>
        </div>
      </animated.div>
    </div>
  )
}

export default DashboardNewUser;