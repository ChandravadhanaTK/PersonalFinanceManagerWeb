import React from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'reactstrap'
import * as actions from '../../actions'
import UpdateCurrency from '../../components/Settings/UpdateCurrency'

class ChangeCurrency extends React.Component {
  componentWillMount() {
    //Dispatching get all action
    this.props.getSettings(this.props.currentUser.emailId)
  }

  handleSubmit = (values) => {
    console.log(values)
    
    var currencyData = {
      emailId: this.props.settingsData.emailId,
      oldCurrency: this.props.settingsData.currency ? this.props.settingsData.currency : '',
      newCurrency: values.currency
    }
    this.props.editCurrency(currencyData)
  }
  render() {
    return (
      <Row>
        <Col>
          <div className="m-t-10">
            <UpdateCurrency title="Select Currency"
                            submitName="Update"
                            initialValues={this.props.settingsData}
                            onSubmit={this.handleSubmit}>
            </UpdateCurrency>
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
  editCurrency: (currencyData) => dispatch(actions.editCurrency(currencyData))
})

export default connect(mapStateToProps, mapDispatchToProps) (ChangeCurrency)