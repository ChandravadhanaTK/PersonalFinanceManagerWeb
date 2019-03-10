import React from 'react'
import { Route, Switch } from 'react-router-dom'

import SearchExpense from '../containers/Expense/SearchExpense'
import AddExpense from '../containers/Expense/AddExpense'
import EditExpense from '../containers/Expense/EditExpense'

const ExpenseRoutes = (props) => {
  return (
    <Switch>
      <Route path={`${props.match.url}/all`} component={SearchExpense}/>
      <Route path={`${props.match.url}/add`} component={AddExpense}/>
      <Route path={`${props.match.url}/edit/:expense_id`} component={EditExpense}/>
    </Switch>
  )
}

export default ExpenseRoutes;