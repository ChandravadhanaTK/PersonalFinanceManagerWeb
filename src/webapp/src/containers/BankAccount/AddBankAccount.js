import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import { Row, Col } from 'reactstrap'
import BankAccountFieldsCard from '../../components/BankAccount/BankAccountFieldsCard'

class AddBankAccount extends React.Component {
  handleSubmit = (values) => {
    console.log(values)
    //converting into datatime format
    values.bankAccountDate = new Date(values.bankAccountDate)
    this.props.addBankAccount(values)
  }

  render() {
    return (
      <Row>
        <Col>
          <div className="m-t-10">
            <BankAccountFieldsCard title="Add Bank Account"
                                   submitName="Add"
                                   onSubmit={this.handleSubmit}>
            </BankAccountFieldsCard>
          </div>
        </Col>
      </Row>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addBankAccount: (bankAccountData) => dispatch(actions.addBankAccount(bankAccountData))
})

export default connect(null, mapDispatchToProps) (AddBankAccount)