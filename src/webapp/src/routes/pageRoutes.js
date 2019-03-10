import React from 'react'
import { Switch } from 'react-router-dom'
import store from '../store'
import { PropsRoute, PublicRoute, PrivateRoute } from 'react-router-with-props'

import Home from '../containers/Home'
import Income from '../containers/Income'
import Expense from '../containers/Expense'
import Budget from '../containers/Budget'
import Investments from '../containers/Investments'
import BankAccount from '../containers/BankAccount'
import Profile from '../containers/Profile'
import Login from '../containers/Login'
import RegisterUser from '../containers/RegisterUser'
import Settings from '../containers/Settings'
import Logout from '../containers/Logout'

const getLoggedInState = () => {
  let state = store.getState()
  return state.userReducer.loggedIn
}
const PageRoutes = () => {
  return (
    <Switch>
      <PropsRoute exact path="/" component={Home} />
      <PublicRoute path="/login" authed={getLoggedInState()} redirectTo="/" component={Login} />
      <PublicRoute path="/signup" authed={getLoggedInState()} redirectTo="/login" component={RegisterUser} />
      <PrivateRoute path="/logout" authed={getLoggedInState()} redirectTo="/login" component={Logout} />
      <PrivateRoute path="/income" authed={getLoggedInState()} redirectTo="/login" component={Income} />
      <PrivateRoute path="/expense" authed={getLoggedInState()} redirectTo="/login" component={Expense} />
      <PrivateRoute path="/investments" authed={getLoggedInState()} redirectTo="/login" component={Investments} />
      <PrivateRoute path="/bankAccount" authed={getLoggedInState()} redirectTo="/login" component={BankAccount} />
      <PrivateRoute path="/profile" authed={getLoggedInState()} redirectTo="/login" component={Profile} />
      <PrivateRoute path="/settings" authed={getLoggedInState()} redirectTo="/login" component={Settings} />
      <PrivateRoute path="/budget" authed={getLoggedInState()} redirectTo="/login" component={Budget} />
    </Switch>
  )
}

export default PageRoutes;
