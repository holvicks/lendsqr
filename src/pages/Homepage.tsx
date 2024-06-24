import logo from '../assets/images/Group.svg'
import illustration from '../assets/images/lensqr-img.svg'
import { useState } from 'react';

function Homepage() {
const [passwordVisible, setPasswordVisible] = useState(false)
const [password, setPassword] = useState("")

const togglePassword=()=> {
    setPasswordVisible(!passwordVisible)
}
 
    return (
      <>
  <div className="container">
      <div className="column left-column">
        <img src={logo} alt="Lendsqr Logo" className="logo" />
        <img src={illustration} alt="Illustration" className="illustration" />
      </div>
      <div className="column right-column">
        <h1>Welcome!</h1>
        <p>Enter details to login.</p>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="password-input">
              <input  type={passwordVisible ? 'text' : 'password'}  onChange={(e)=> setPassword(e.target.value)}
              id="password" name="password" value={password} />
              <button type="button" onClick={togglePassword}  className="show-password">SHOW</button>
            </div>
          </div>
          <a href="#" className="forgot-password">Forgot Password?</a>
          <button type="submit" className="login-button">Log In</button>
        </form>
      </div>
    </div>

      </>
    );
  }
  
  export default Homepage;