import {Component} from 'react'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

import './index.css'

class Home extends Component {
  state = {isLogin: false}

  onLogin = () => {
    this.setState(prevState => ({isLogin: !prevState.isLogin}))
  }

  render() {
    const {isLogin} = this.state
    return (
      <div className="home-container">
        <div className="login-container">
          <Message user={isLogin} />
          {isLogin ? (
            <Logout logout={this.onLogin} />
          ) : (
            <Login login={this.onLogin} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
