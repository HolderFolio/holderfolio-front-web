import './App.scss';
import Routes from './routes/Routes';
import { useSelector } from 'react-redux';
import Login from './components/Auth/Login';
import { useState } from 'react';
import Signup from './components/Auth/Signup';
import { selectCurrentUser } from './redux/auth/auth-selectors';
import Navigation from './components/Navigation/Navigation';
import { NavLink } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";

function App() {
  const currentUser = useSelector(selectCurrentUser)
  const [navOpen, setNavOpen] = useState(false)
  const [isLogin, setIsLogin] = useState(true)

  if (!currentUser) {
    return (
      <div className="App App-offline">
        <div className="App-offline__wrapper">
          <h1>HOLDERFOLIO</h1>
          {isLogin ? (
            <p>Sign in to your account</p>
          ) : (
            <p>Create a new account</p>
          )}
          <div className="App__form">
            {isLogin ? (
              <>
                <Login />
                <p className="App__switch" onClick={() => setIsLogin(false)}>No account ? Sign up here</p>
              </>
            ) : (
              <>
                <Signup />
                <p className="App__switch" onClick={() => setIsLogin(true)}>Already an account ? Log in here</p>
              </>
            )}
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="App">
      <div className="App__main">
        <div className={`App__nav ${navOpen ? "active" : ""}`} onClick={() => setNavOpen(false)} >
          <Navigation setNavOpen={setNavOpen} />
        </div>
        <div className="App__main--top">
          <div className="App__main--menu" onClick={() => setNavOpen(true)}>
            <IoMenu />
          </div>
          <NavLink exact to="/">
            <h1>HOLDERFOLIO</h1>
          </NavLink>
        </div>
        <Routes />
      </div>
    </div>
  );
}

export default App;