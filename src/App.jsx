
import './App.css'
import BooksList from './BooksList';
import Header from './Header';
import Home from './home';
import Footer from './footer';
import Login from './login';
import { useState } from 'react';

function App() {

  const[loggedIn,setLoggedIn]=useState(false);
  const[showLogin,setShowLogin]=useState(false);

  function handleLogin() {
    setLoggedIn(true);
    setShowLogin(false);
  }

  return (
    <>
      {showLogin ? (
        <Login onLogin={handleLogin} />
      ) : !loggedIn ? (
        <>
          <Header onSignIn={() => setShowLogin(true)} />
          <Home />
          <BooksList />
          <Footer />
        </>
      ) : (
        <>
          <Header />
          <Home />
          <BooksList />
          <Footer />
        </>
      )}
    </>
  )
}

export default App
