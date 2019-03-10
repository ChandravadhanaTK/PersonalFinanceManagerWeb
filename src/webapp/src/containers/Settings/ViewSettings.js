import React from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'reactstrap'
import * as actions from '../../actions'
import ViewSettingsCom from '../../components/Settings/ViewSettings'


class ViewSettings extends React.Component {
  componentWillMount() {
    //Dispatching get all action
    this.props.getSettings(this.props.currentUser.emailId)
  }

  render() {
    return (
      <Row>
        <Col>
          <div className="m-t-10">
              <ViewSettingsCom settingsData={this.props.settingsData}>
              </ViewSettingsCom>
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
  getSettings: (emailId) => dispatch(actions.getSettings(emailId))
})

export default connect(mapStateToProps, mapDispatchToProps) (ViewSettings)