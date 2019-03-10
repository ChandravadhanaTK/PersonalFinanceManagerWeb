import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { Card, CardBody, CardText, UncontrolledTooltip  } from 'reactstrap'
import { getFormatedDate, getCurrencyIconFont } from '../../helper'

const ExpenseCard = (props) => {
  const handleDelete = () => {
    props.getExpenseId(props.expense.expense_id)
  }
 
  return (
    <Card className="m-b-5">
      <CardBody className="bg-list">
        <CardText className="flex-sb-m">
          <span>
            <i className="fa fa-bookmark-o text-primary" aria-hidden="true"></i> {props.expense.expense_name}
            <i className="fa fa-money m-l-30 text-success" aria-hidden="true"></i> <i className={getCurrencyIconFont(props.currency)} aria-hidden="true"></i>{props.expense.expense_amount}
            <i className="fa fa-credit-card m-l-30 text-warning" aria-hidden="true"></i> {props.expense.expense_type}
            <i className="fa fa-calendar m-l-30 text-info" aria-hidden="true"></i> {getFormatedDate(props.expense.expense_date)}
          </span>
          <span>
          <Link to={`/expense/edit/${props.expense.expense_id}`}>
            <i id={`expenseEdit_${props.expense.expense_id}`} className="fa fa-pencil icon-btn text-warning" aria-hidden="true"></i>
          </Link>
            <i id={`expenseDelete_${props.expense.expense_id}`} className="fa fa-trash-o icon-btn m-l-15 text-danger" onClick={handleDelete} aria-hidden="true"></i>
            <UncontrolledTooltip placement="top" target={`expenseEdit_${props.expense.expense_id}`}>
              Edit
            </UncontrolledTooltip>
            <UncontrolledTooltip placement="top" target={`expenseDelete_${props.expense.expense_id}`}>
              Delete
            </UncontrolledTooltip>
          </span>
        </CardText>
        <CardText className="flex-sb-m">
          <small className="text-muted">Created on: {getFormatedDate(props.expense.created_date)}</small>
          <small className="text-muted">Last updated: {getFormatedDate(props.expense.updated_date)}</small>
        </CardText>
        {/* {props.expense.editField ? <ExpenseFieldsCard title="Edit Expense"
                                submitName="Edit"
                                onSubmit={this.handleSubmit}>
        </ExpenseFieldsCard> : null} */}
      </CardBody>
    </Card>
  )
}

ExpenseCard.propTypes = {
  expense: PropTypes.object.isRequired,
  getExpenseId: PropTypes.func.isRequired
}

export default (ExpenseCard)