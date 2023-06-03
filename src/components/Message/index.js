// Write your code here
import './index.css'

const Message = props => {
  const {user} = props
  const message = user ? 'Welcome User' : 'Please Login'

  return <h1 className="message">{message} </h1>
}

export default Message
