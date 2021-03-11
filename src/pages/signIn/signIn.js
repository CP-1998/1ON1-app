import SignInCard from '../../components/signInCard.js'
import BackgroundPhoto from '../../assets/gradienta-ix_kUDzCczo-unsplash.jpg'
import './signIn.css'
import { useSpring, animated } from 'react-spring'

function SignIn() {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } })
  return (
    <div>
      <img src={BackgroundPhoto} alt='background.jpg' id='colorBackground'></img>
      <animated.div id='pageContent' style={props}>
        <SignInCard></SignInCard>
      </animated.div>
    </div>
  )
}

export default SignIn;