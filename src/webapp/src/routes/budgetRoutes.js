import React from 'react'
import { Route, Switch } from 'react-router-dom'

import PlotBudget from '../containers/Budget/PlotBudget'
import PlotMoneyFlow from '../containers/Budget/PlotMoneyFlow'

const BudgetRoutes = (props) => {
  return (
    <Switch>
      <Route path={`${props.match.url}/plot`} component={PlotBudget}></Route>
      <Route path={`${props.match.url}/summary`} component={PlotMoneyFlow}></Route>
    </Switch>
  )
}

export default BudgetRoutes;
