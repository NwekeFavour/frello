import './App.css'
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom'
import Login from './pages/login'
import Register from './pages/register'
// import Home from './pages/home'

function App() {

  return (
    <>
      <Router>
        <div className='App'>
          {/* <ul> */}
            {/* <li>
              <Link to={"/login"}>Login</Link>
            </li> */}
            {/* <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={"/register"}>Register</Link>
            </li> */}
          {/* </ul> */}
          <Routes>
            <Route
              exact
              path='/'
              Component={Login}
            ></Route>
            <Route
            exact
            path='/login'
            Component={Login}
            ></Route>
            {/* <Route exact path='/' Component={Home}>
            </Route> */}
            <Route
            path='/register'
            Component={Register}
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
