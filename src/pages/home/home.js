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
        <hr></hr>
        <h1 id="headerText">1/1</h1>
        <hr></hr>
        <p>Bridging the gap</p>
        <p>between learners</p>
        <p>and professionals</p>
        <hr></hr>
        <Button color='success' href="/signUp" style={{ marginTop: '20px', fontSize: '25px' }}>Sign Up</Button>
        <Button color='info' href="/signIn" style={{ marginTop: '20px', fontSize: '25px' }}>Sign In</Button>
      </animated.div>
    </div>
  );
}

export default HomeDisplay;