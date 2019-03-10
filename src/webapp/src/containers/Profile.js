import React from "react";
import { connect } from 'react-redux'
import * as actions from '../actions'
import ProfileForm from "../components/ProfileForm"

class Profile extends React.Component {  
  componentWillMount = () => {
    this.props.getProfile(this.props.currentUser.emailId)
  }

  handleSubmit = (values) =>{
    console.log(values)
  }

  render() {
    return (
      <ProfileForm title='Profile'
                   submitName="Edit Profile"
                   initialValues={this.props.currentUser}
                   handleSubmit={this.handleSubmit}>
      </ProfileForm>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.userReducer.user
})

const mapDispatchToProps = dispatch => ({
  getProfile: (emailId) => dispatch(actions.getProfile(emailId))
})

export default connect(mapStateToProps, mapDispatchToProps) (Profile)




