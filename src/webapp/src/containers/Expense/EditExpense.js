import React from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'reactstrap'
import * as actions from '../../actions'
import { getFormatedDateForApi } from '../../helper'
import ExpenseFieldsCard from '../../components/Expense/ExpenseFieldsCard'

class EditExpense extends React.Component {
  componentWillMount() {
    this.props.getExpense(this.props.match.params.expense_id)
  }

  handleSubmit = (values) => {
    console.log(values)
    //converting into datatime format
    values.expense_date = getFormatedDateForApi(values.expense_date)
    this.props.editExpense(values)
  }
  render() {
    return (
      <Row>
        <Col>
          <div className="m-t-10">
            <ExpenseFieldsCard title="Edit Expense"
                              submitName="Update"
                              initialValues={this.props.expenseEditData}
                              onSubmit={this.handleSubmit}>
            </ExpenseFieldsCard>
          </div>
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = state => ({
  expenseEditData: state.expenseReducer.expenseEditData
})

const mapDispatchToProps = dispatch => ({
  getExpense: (expenseId) => dispatch(actions.getExpense(expenseId)),
  editExpense: (expenseData) => dispatch(actions.editExpense(expenseData))
})

export default connect(mapStateToProps, mapDispatchToProps) (EditExpense)