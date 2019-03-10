import React from 'react'
import { Nav, NavItem, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom'
import BankAccountRoutes from '../routes/bankAccountRoutes'

class BankAccount extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs="12" sm="3">
            <Nav pills vertical className="m-t-10">
              <NavItem>
                <NavLink to={`${this.props.match.url}/add`} className="nav-link" activeClassName="active">Add Bank Account</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to={`${this.props.match.url}/all`} className="nav-link" activeClassName="active">View All</NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col xs="12" sm="9">
            <BankAccountRoutes match={this.props.match}></BankAccountRoutes>
          </Col>
        </Row>
      </div>
    );
  }
}

export default BankAccount