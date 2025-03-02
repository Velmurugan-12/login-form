import { useState } from "react";
import "../src/App.css"

const LoginForm = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={`container ${isActive ? "active" : ""}`}>
      
      <div className="form-container sign-up">
        <form>
          <h1>Create Account</h1>
          <div className="social-icons">
            <a href="#" className="icons"><i className="bx bxl-google"></i></a>
            <a href="#" className="icons"><i className="bx bxl-facebook"></i></a>
            <a href="#" className="icons"><i className="bx bxl-github"></i></a>
            <a href="#" className="icons"><i className="bx bxl-linkedin"></i></a>
          </div>
          <span>Register with your email</span>
          <input type="text" name="name" placeholder="Name" />
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <button type="button">Sign Up</button>
        </form>
      </div>

      
      <div className="form-container sign-in">
        <form>
          <h1>Sign In</h1>
          <div className="social-icons">
            <a href="#" className="icons"><i className="bx bxl-google"></i></a>
            <a href="#" className="icons"><i className="bx bxl-facebook"></i></a>
            <a href="#" className="icons"><i className="bx bxl-github"></i></a>
            <a href="#" className="icons"><i className="bx bxl-linkedin"></i></a>
          </div>
          <span>Login with your email</span>
          <input type="email" name="loginEmail" placeholder="Email" />
          <input type="password" name="loginPassword" placeholder="Password" />
          <a href="#">Forgot Password?</a>
          <button type="button">Sign In</button>
        </form>
      </div>

      
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Sign in with your personal details</p>
            <button className="hidden" onClick={() => setIsActive(false)}>Sign in</button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hello, Coder!</h1>
            <p>Sign up and start coding today</p>
            <button className="hidden" onClick={() => setIsActive(true)}>Sign up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
