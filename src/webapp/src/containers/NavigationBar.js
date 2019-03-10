import React, { Fragment } from 'react'
import { NavLink,  Link } from 'react-router-dom'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem , NavItem} from 'reactstrap';
import Avatar from 'react-avatar';
import * as actions from '../actions';
import { connect } from 'react-redux'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav} from 'reactstrap'
import NavigationItems from '../components/NavBar/NavItems'

class NavigationBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      dropdownOpen: false
    }
  }

  componentWillMount() {
    if(this.props.auth.loggedIn)
      this.props.getProfile(this.props.currentUser.emailId)
  }

  componentWillReceiveProps(nextProps) {
    // this check makes sure that the getProfile action is not getting called for other prop changes
    if((this.props.auth.loggedIn !== nextProps.auth.loggedIn) && this.props.currentUser.emailId) {
      this.props.getProfile(this.props.currentUser.emailId)
    }
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  toggleDropDown = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    })
  }

  render() {
    let isloggedIn = this.props.auth.loggedIn
    let navItems = isloggedIn ? <NavigationItems/> : ""
    let authBtn, avtrBtn
    
    if(isloggedIn) {
      avtrBtn = 
        <Dropdown className="pfm-account-drpdwn" isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
          <DropdownToggle className="btn-avatar">
            <Avatar skypeId="sitebase" size="50" onClick={this.togglePopup} round={true}/>
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem header>{this.props.currentUser.firstName} <Link to="/settings/view" onClick={this.toggleDropDown}><i className="fa fa-cog dropdown-cog" aria-hidden="true" title="settings"></i></Link></DropdownItem>
            <DropdownItem><Link className="emailcss" to="/profile" title="profile">{this.props.currentUser.emailId}</Link></DropdownItem>
            <DropdownItem divider />
            <DropdownItem><Link className="logoutcss" to="/logout">Logout</Link></DropdownItem>
          </DropdownMenu>
        </Dropdown>
    } else {
      authBtn = 
        <Fragment>
          <NavLink to="/login">Login <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i></NavLink>
          <NavLink to="/signup" className="p-l-10">Sign Up <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i></NavLink>
        </Fragment>
    }
    
    return (
      <Fragment>
        <Navbar color="menu" dark expand="lg" className={isloggedIn ? "bg-menu-sm": ""}>
          <NavbarBrand href="/" className="pfm">PFM</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              {navItems}
            </Nav>
            <Nav className="ml-auto" navbar>
              {authBtn}
            </Nav>
          </Collapse>
        </Navbar>
        {avtrBtn}
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.userReducer.user,
  auth: state.userReducer
})

const mapDispatchToProps = dispatch => ({
  getProfile: (emailId) => dispatch(actions.getProfile(emailId))
})

export default connect(mapStateToProps, mapDispatchToProps) (NavigationBar)