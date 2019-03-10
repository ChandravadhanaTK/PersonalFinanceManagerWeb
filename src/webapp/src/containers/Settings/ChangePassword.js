import React from 'react'
import {connect} from 'react-redux'
import { Row, Col } from 'reactstrap'
import * as actions from '../../actions'
import UpdatePassword from '../../components/Settings/UpdatePassword'

class ChangePassword extends React.Component {
  componentWillMount() {
    //Dispatching get all action
    this.props.getSettings(this.props.currentUser.emailId)
  }
  handleSubmit = (values) => {
    console.log(values)
    
    var passwordData = {
      emailId: this.props.settingsData.emailId,
      newPassword: values.newPassword,
      confirmPassword: values.confirmPassword
    }
    this.props.editPassword(passwordData)
  }
  render() {
    return (
      <Row>
        <Col>
          <div className="m-t-10">
          <UpdatePassword title="Update Password"
                              submitName="Update"
                              onSubmit={this.handleSubmit}>
            </UpdatePassword>
          </div>
        </Col>
      </Row>
    )
  }
}
const mapStateToProps = state => ({
  settingsData: state.settingsReducer.currentSettings,
  currentUser: state.userReducer.user
})

const mapDispatchToProps = dispatch => ({
  getSettings: (emailId) => dispatch(actions.getSettings(emailId)),
  editPassword: (passwordData) => dispatch(actions.editPassword(passwordData))
})

export default connect(mapStateToProps, mapDispatchToProps) (ChangePassword)
