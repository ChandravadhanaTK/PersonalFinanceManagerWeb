import React from 'react'
import { Nav, NavItem, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom'
import InvestmentsRoutes from '../routes/investmentsRoutes'

class Investments extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs="12" sm="3">
            <Nav pills vertical className="m-t-10">
              <NavItem>
                <NavLink to={`${this.props.match.url}/add`} className="nav-link" activeClassName="active">Add Investment</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to={`${this.props.match.url}/all`} className="nav-link" activeClassName="active">View All</NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col xs="12" sm="9">
            <InvestmentsRoutes match={this.props.match}></InvestmentsRoutes>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Investments