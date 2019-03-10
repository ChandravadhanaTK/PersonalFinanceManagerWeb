import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { NavItem } from 'reactstrap'

const NavigationItems = () => {
  return (
    <Fragment>
      <NavItem>
        <NavLink to="/" className="nav-link" activeClassName="active">Home</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/income/all" className="nav-link" activeClassName="active">Income</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/expense/all" className="nav-link" activeClassName="">Expense</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/investments/all" className="nav-link" activeClassName="active">Investments</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/bankAccount/all" className="nav-link" activeClassName="active">Bank Account</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/budget/summary" className="nav-link" activeClassName="active">Budget</NavLink>
      </NavItem>
      {/* <NavItem>
        <NavLink to="/settings/view" className="nav-link" activeClassName="active">Settings</NavLink>
      </NavItem> */}
    </Fragment>
  )
}

export default NavigationItems
