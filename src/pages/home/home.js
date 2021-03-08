import BackgroundPhoto from '../../assets/gradienta-ix_kUDzCczo-unsplash.jpg'
import TwitterPhoto from '../../assets/iconfinder_Circled_Twitter_svg_5279123.png'
import FacebookPhoto from '../../assets/iconfinder_Circled_Facebook_svg_5279111.png'
import YoutuePhoto from '../../assets/iconfinder_Circled_Youtube_svg_5279120.png'
import InstagramPhoto from '../../assets/iconfinder_Circled_Instagram_svg_5279112.png'
import LinkedinPhoto from '../../assets/iconfinder_Circled_Linkedin_svg_5279114.png'
import GithubPhoto from '../../assets/iconfinder_github_rounded_394187.png'
import DiscordPhoto from '../../assets/iconfinder_discord_4691356.png'
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
        <br></br>
        <div class="row justify-content-md-center">
          <img src={TwitterPhoto} alt="twitter.png" class="socialPhoto"></img>
          <img src={InstagramPhoto} alt="instagram.png" class="socialPhoto"></img>
          <img src={FacebookPhoto} alt="facebook.png" class="socialPhoto"></img>
          <img src={LinkedinPhoto} alt="linkedin.png" class="socialPhoto"></img>
          <img src={YoutuePhoto} alt="youtube.png" class="socialPhoto"></img>
          <img src={GithubPhoto} alt="discord.png" class="socialPhoto"></img>

        </div>

      </animated.div>
    </div>
  );
}

export default HomeDisplay;