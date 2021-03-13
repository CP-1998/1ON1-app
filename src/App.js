import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import HomeDisplay from './pages/home/home.js'
import MessagingDisplay from './pages/messaging/messaging.js'
import PremiumDisplay from './pages/premium/premium.js'
import ProfileDisplay from './pages/profile/profile.js'
import SupportDisplay from './pages/support/support.js'
import SignUp from './pages/signUp/signUp.js'
import SignIn from './pages/signIn/signIn.js'
import DashboardNewUser from './pages/dashboardNewUser/dashboardNewUser.js'


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/'>
            <HomeDisplay />
          </Route>
          <Route exact path='/profile'>
            <ProfileDisplay />
          </Route>
          <Route exact path='/support'>
            <SupportDisplay />
          </Route>
          <Route path='/messaging'>
            <MessagingDisplay />
          </Route>
          <Route path='/premium'>
            <PremiumDisplay />
          </Route>
          <Route path="/signUp">
            <SignUp />
          </Route>
          <Route path="/signIn">
            <SignIn />
          </Route>
          <Route path="/dashboardNewUser">
            <DashboardNewUser />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
