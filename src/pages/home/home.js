import BackgroundPhoto from '../../assets/gradienta-ix_kUDzCczo-unsplash.jpg'
import './home.css'
import { useSpring, animated } from 'react-spring'
import { Button } from 'reactstrap';

function HomeDisplay() {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } })
  return (
    <div id='bodyDiv'>
      <img src={BackgroundPhoto} alt='background.jpg' id='colorBackground'></img>
      <animated.div id='pageContent' style={props}>
        <h1>1/1</h1>
        <p>Bridging the gap</p>
        <p>between learners</p>
        <p>and professionals</p>
        <Button color='info'>Sign Up</Button>
      </animated.div>
    </div>
  );
}

export default HomeDisplay;