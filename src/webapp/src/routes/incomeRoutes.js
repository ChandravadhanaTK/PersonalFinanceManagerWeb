import React from 'react'
import { Route, Switch } from 'react-router-dom'

import SearchIncome from '../containers/Income/SearchIncome'
import AddIncome from '../containers/Income/AddIncome'
import EditIncome from '../containers/Income/EditIncome'

const IncomeRoutes = (props) => {
  return (
    <Switch>
      <Route path={`${props.match.url}/all`} component={SearchIncome}></Route>
      <Route path={`${props.match.url}/add`} component={AddIncome}></Route>
      <Route path={`${props.match.url}/edit/:incomeId`} component={EditIncome}></Route>
    </Switch>
  )
}

export default IncomeRoutes;