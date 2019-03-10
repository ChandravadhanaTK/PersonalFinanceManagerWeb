import React from 'react'
import { Nav, NavItem, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom'
import BudgetRoutes from '../routes/budgetRoutes'

class Budget extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs="12" sm="3">
            <Nav pills vertical className="m-t-10">
              <NavItem>
                <NavLink to={`${this.props.match.url}/plot`} className="nav-link" activeClassName="active">Budget Plot</NavLink>
              </NavItem>
              <NavItem>
              <NavLink to={`${this.props.match.url}/summary`} className="nav-link" activeClassName="active">Money Flow Summary</NavLink>
            </NavItem>              
            </Nav>
          </Col>
          <Col xs="12" sm="9">
            <BudgetRoutes match={this.props.match}></BudgetRoutes>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Budget