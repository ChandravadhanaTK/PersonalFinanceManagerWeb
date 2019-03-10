import React from 'react'
import { Nav, NavItem, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom'
import SettingsRoutes from '../routes/settingsRoutes'

class Settings extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs="12" sm="3">
            <Nav pills vertical className="m-t-10">
              <NavItem>
                <NavLink to={`${this.props.match.url}/view`} className="nav-link" activeClassName="active">View Settings</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to={`${this.props.match.url}/change-currency`} className="nav-link" activeClassName="active">Change Currency</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to={`${this.props.match.url}/change-password`} className="nav-link" activeClassName="active">Change Password</NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col xs="12" sm="9">
            <SettingsRoutes match={this.props.match}></SettingsRoutes>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Settings