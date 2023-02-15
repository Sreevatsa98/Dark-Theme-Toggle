import React from 'react';
import useLocalStorage from 'use-local-storage';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaApple, FaFacebook, FaGoogle, FaLinkedin, FaToggleOn, FaTwitter } from 'react-icons/fa'
import './App.css';

function App() {
  
  const [theme, setTheme]= useLocalStorage('theme' ? 'dark' : 'light')

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }

  return (
    <div className="app" data-theme={theme}>
      <div className='login'>
        <h1>Login</h1>
        <div className='container'>
          <div className='top'>
            <SocialIcons icons={<FaGoogle class="toggle" size="28"/>} />
            <SocialIcons icons={<FaFacebook class="toggle" size="28"/>} />
            <SocialIcons icons={<FaLinkedin class="toggle" size="28"/>} />
            <SocialIcons icons={<FaTwitter class="toggle" size="28"/>} />
            <SocialIcons icons={<FaApple class="toggle" size="28"/>} />
          </div>
          <p className='divider'><span>Or</span></p>
          <form action="">
            <label>Email</label>
            <input type="email" name="" id="" placeholder='Enter you email'/>
            <label>Password</label>
            <input type="password" name="" id="" placeholder='Enter you password'/>
            <div className='remember'>
              <input type="checkbox" checked='checked' />
              <p>Remember me </p>
            </div>
            <button>Log In</button>
          </form>
          <div className='bottom'>
            {/* <p>Forgot your password?</p>
            <a href="#">Reset Password</a>
            <p className='create'>Create Account</p> */}
          </div>
        </div>
        <div className='theme-toggle'>
          <h2>Switch Theme</h2>
          <SocialIcons icons={<FaToggleOn size="50" class="toggle" onClick={switchTheme}/>} />
        </div>
      </div>
    </div>

);
}
  const SocialIcons = ({ icons }) => (
    <div className='icons'>
      {icons}
    </div>
  )

export default App;
