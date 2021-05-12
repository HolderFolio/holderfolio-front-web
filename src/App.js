import './App.scss';
import Routes from './routes/Routes';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from './redux/user/user-selectors';
import Login from './components/Auth/Login';
import { useState } from 'react';
import Signup from './components/Auth/Signup';

function App() {
  const currentUser = useSelector(selectCurrentUser)
  const [isLogin, setIsLogin] = useState(true)

  if (!currentUser) {
    return (
      <div className="App App-offline">
        <div className="App-offline__wrapper">
          <h1>Welcome to HolderFolio !</h1>
          <p>Please log in or create a new account to get access to the website's functionnalities.</p>
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
      <Routes />
    </div>
  );
}

export default App;