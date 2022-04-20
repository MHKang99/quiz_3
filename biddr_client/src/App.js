import './App.css';
import WelcomePage from './components/Welcome';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AuthRoute from './components/AuthRoute';
import NavBar from './components/NavBar';
import { User } from './requests';
import AuctionIndexPage from "./components/AuctionIndexPage";
import SignInPage from './components/SignInPage';
import AuctionShowPage from "./components/AuctionShowPage";
import NewAuctionPage from './components/NewAuctionPage';

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getCurrentUser();
  }, [])

  // useEffect(()=> {

  // }, [user])

  const getCurrentUser = () => {
    return User.current().then(user => {
      if (user?.id) {
        // console.log(user.id)
        setUser(user)
      }
    })
  }
  console.log(user)
  const onSignOut = () => { setUser(null) }


  return (
    <BrowserRouter>
      <NavBar currentUser={user} onSignOut={onSignOut} />
      <Switch>
        <Route path="/welcome" component={WelcomePage} />
        <Route path='/sign_in'
          render={(routeProps) => <SignInPage {...routeProps} onSignIn={getCurrentUser} />}
        />
        <Route path="/auctions/new" component={NewAuctionPage}/>
        {/* <AuthRoute isAuthenticated={user} exact path='/auctions/new' component={NewAuctionPage}></AuthRoute> */}
        <Route exact path='/auctions/:id' component={AuctionShowPage} />
        <Route path='/auctions' component={AuctionIndexPage} />
      </Switch>
    </BrowserRouter>
  )
}
