import React from 'react'
import { Route, Switch } from 'react-router-dom'

import SearchInvestments from '../containers/Investments/SearchInvestments'
import AddInvestments from '../containers/Investments/AddInvestments'
import EditInvestments from '../containers/Investments/EditInvestments'

const InvestmentsRoutes = (props) => {
  return (
    <Switch>
      <Route path={`${props.match.url}/all`} component={SearchInvestments}></Route>
      <Route path={`${props.match.url}/add`} component={AddInvestments}></Route>
      <Route path={`${props.match.url}/edit/:investmentsId`} component={EditInvestments}></Route>
    </Switch>
  )
}

export default InvestmentsRoutes;