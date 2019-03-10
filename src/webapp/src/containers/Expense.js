import React, { Component } from 'react';
import { Nav, NavItem, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom'
import ExpenseRoutes from '../routes/expenseRoutes'

class Expense extends Component{
    
      render() {
        return (
          <div>
            <Row>
              <Col xs="12" sm="3">
                <Nav pills vertical className="m-t-10">
                  <NavItem>
                    <NavLink to={`${this.props.match.url}/add`} className="nav-link" activeClassName="active">Add Expense</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to={`${this.props.match.url}/all`} className="nav-link" activeClassName="active">View All Expense</NavLink>
                  </NavItem>
                </Nav>
              </Col>
              <Col xs="12" sm="9">
                <ExpenseRoutes match={this.props.match}></ExpenseRoutes>
              </Col>
            </Row>
          </div>
        );
      }

}

export default Expense;