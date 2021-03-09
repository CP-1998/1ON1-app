import StrapCard from '../../components/strapCard.js'
import BackgroundPhoto from '../../assets/gradienta-ix_kUDzCczo-unsplash.jpg'
import { useSpring, animated } from 'react-spring'
import './signUp.css'

function SignUp() {
  const props = useSpring({ duration: 8000, opacity: 1, from: { opacity: 0 } })
  return (
    <div>
      <img src={BackgroundPhoto} alt='background.jpg' id='colorBackground'></img>
      <animated.div id='pageContent' style={props}>
        <StrapCard></StrapCard>
      </animated.div>
    </div>
  )
}

export default SignUp;