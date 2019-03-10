import React, { Component } from "react";
import { connect } from 'react-redux'
import * as actions from '../actions'
import LoginForm from '../components/loginForm'

class Login extends Component {

  handleSubmit = (values) => {
    console.log(values)
    this.props.loginUser(values)
  }

  render() {
    return (
      <div >
        <LoginForm title="Personal Finance Manager Login"
                   submitName="Login"
                   onSubmit={this.handleSubmit}>
        </LoginForm>
      </div>
    )
  }
}


const mapDispatchToProps = dispatch => ({
  loginUser: (loginDetails) => dispatch(actions.loginUser(loginDetails))
})

export default connect(null, mapDispatchToProps) (Login)



  
