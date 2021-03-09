import { Card, CardBody, CardTitle, Button } from 'reactstrap'
import './strapCard.css'

function StrapCard() {
  return (

    <Card className="contentCol" sm="6">
      <CardBody>
        <CardTitle className="cardTitle">Sign Up</CardTitle>
        <hr></hr>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default">First Name</span>
          </div>
          <input type="text" class="form-control" aria-label="First Name" aria-describedby="inputGroup-sizing-default" />
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default">Last Name</span>
          </div>
          <input type="text" class="form-control" aria-label="Last Name" aria-describedby="inputGroup-sizing-default" />
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default">Email</span>
          </div>
          <input type="text" class="form-control" aria-label="Email" aria-describedby="inputGroup-sizing-default" />
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default">Password</span>
          </div>
          <input type="password" class="form-control" aria-label="Password" aria-describedby="inputGroup-sizing-default" />
        </div>
        <hr></hr>
        <Button color="success" style={{ marginTop: '20px', fontSize: '25px' }}>Submit</Button>
        <Button color="danger" style={{ marginTop: '20px', fontSize: '25px' }}>return</Button>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          <label class="form-check-label" for="flexCheckDefault">
            Remember Me
                </label>
        </div>
      </CardBody>
    </Card>
  )
}

export default StrapCard;