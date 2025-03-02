import { useState } from "react";
import "../src/App.css";

const LoginForm = () => {
  const [isActive, setIsActive] = useState(false);
  const [message, setMessage] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signUpName, setSignUpName] = useState("");

  const handleSignIn = () => {
    if (loginEmail && loginPassword) {
      setMessage("Sign in successful!");
      setLoginEmail(""); 
      setLoginPassword(""); 

      setTimeout(() => setMessage(""), 3000);
    } else {
      setMessage("⚠️ Please enter email and password!");
      setTimeout(() => setMessage(""), 3000);
    }
  };

  const handleSignUp = () => {
    if (signUpName && signUpEmail && signUpPassword) {
      setMessage("Sign-Up successful!");
      setSignUpName("");
      setSignUpEmail(""); 
      setSignUpPassword(""); 

      setTimeout(() => setMessage(""), 3000);
    } else {
      setMessage(" Please enter all fields!");
      setTimeout(() => setMessage(""), 3000);
    }
  };

  return (
    <div className={`container ${isActive ? "active" : ""}`}>
      
      {message && <p className="success-message">{message}</p>}
      
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
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={signUpName}
            onChange={(e) => setSignUpName(e.target.value)}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={signUpEmail}
            onChange={(e) => setSignUpEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={signUpPassword}
            onChange={(e) => setSignUpPassword(e.target.value)}
          />
          <button type="button" onClick={handleSignUp}>Sign Up</button>
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
          <input
            type="email"
            name="loginEmail"
            placeholder="Email"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
          />
          <input
            type="password"
            name="loginPassword"
            placeholder="Password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          />
          <a href="#">Forgot Password?</a>
          <button type="button" onClick={handleSignIn}>Sign In</button>
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
