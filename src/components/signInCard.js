import './signInCard.css'
import { Card, CardBody, CardTitle, Button } from 'reactstrap'

function SignInCard() {
  return (
    <Card className="contentCol" sm="6">
      <CardBody>
        <CardTitle className="cardTitle">Sign In</CardTitle>
        <hr></hr>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">Email</span>
          </div>
          <input type="text" className="form-control" aria-label="Email" aria-describedby="inputGroup-sizing-default" />
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">Password</span>
          </div>
          <input type="password" className="form-control" aria-label="Password" aria-describedby="inputGroup-sizing-default" />
        </div>
        <hr></hr>
        <Button color="success" style={{ marginTop: '20px', fontSize: '25px' }} href="./#/dashboard">Submit</Button>
        <Button color="danger" style={{ marginTop: '20px', fontSize: '25px' }} href="./#/">return</Button>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Remember Me
                </label>
        </div>
      </CardBody>
    </Card>
  )
};

export default SignInCard;