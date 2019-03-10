import React from 'react'
import { Nav, NavItem, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom'
import IncomeRoutes from '../routes/incomeRoutes'

class Income extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs="12" sm="3">
            <Nav pills vertical className="m-t-10">
              <NavItem>
                <NavLink to={`${this.props.match.url}/add`} className="nav-link" activeClassName="active">Add Income</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to={`${this.props.match.url}/all`} className="nav-link" activeClassName="active">View All</NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col xs="12" sm="9">
            <IncomeRoutes match={this.props.match}></IncomeRoutes>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Income