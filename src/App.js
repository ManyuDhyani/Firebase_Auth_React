import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Account from './components/Account';
import Home from './components/Home';
import Landing from './components/Landing';
// import Navigation from './components/Navigation';
// import SignIn from './components/SignIn';
// import SignUp from './components/SignUp';
import {AuthProvider} from './firebase/Auth';
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className='App'>
          <header className='App-header'>
            {/* <Navigation></Navigation> */}
          </header>
        </div>
        <Routes>
            <Route exact path='/' element={<Landing/>} />
            <PrivateRoute path='/home' exact element={<Home />} />
            <PrivateRoute path='/account' exact element={<Account />} />
            {/* <Route path='/signin' exact element={<SignIn />} />
            <Route path='/signup' exact element={<SignUp />} />         
            <PrivateRoute path='/changepassword' component={ChangePassword} /> */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
