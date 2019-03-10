import React from 'react'
import { Route, Switch } from 'react-router-dom'

import SearchBankAccount from '../containers/BankAccount/SearchBankAccount'
import AddBankAccount from '../containers/BankAccount/AddBankAccount'

const BankAccountRoutes = (props) => {
  return (
    <Switch>
      <Route path={`${props.match.url}/all`} component={SearchBankAccount}></Route>
      <Route path={`${props.match.url}/add`} component={AddBankAccount}></Route>
    </Switch>
  )
}

export default BankAccountRoutes;