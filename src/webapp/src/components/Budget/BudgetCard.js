import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Card, CardBody, CardText, UncontrolledTooltip  } from 'reactstrap'
import { getFormatedDate } from '../../helper'

const BudgetCard = (props) => {
  const handleDelete = () => {
    props.getBudgetId(props.budget.budgetId)
  }
  return (
    <Card className="m-b-5">
      <CardBody>
        <CardText className="flex-sb-m">
          <span>
            <i className="fa fa-calendar m-l-30 text-info" aria-hidden="true"></i> {getFormatedDate(props.budget.fromExpenseDate)}
            <i className="fa fa-calendar m-l-30 text-info" aria-hidden="true"></i> {getFormatedDate(props.budget.toExpenseDate)}
            <i className="fa fa-bookmark-o text-primary" aria-hidden="true"></i> {props.budget.budgetType}
            <i className="fa fa-bookmark-o text-primary" aria-hidden="true"></i> {props.budget.plotType}
          </span>
          <span>
            <Link to={`/budget/edit/${props.budget.budgetId}`}>
              <i id={`budgetEdit_${props.budget.budgetId}`} className="fa fa-pencil icon-btn text-warning" aria-hidden="true"></i>
            </Link>
            <i id={`budgetDelete_${props.budget.budgetId}`} className="fa fa-trash-o icon-btn m-l-15 text-danger" onClick={handleDelete} aria-hidden="true"></i>
            <UncontrolledTooltip placement="top" target={`budgetEdit_${props.budget.budgetId}`}>
              Edit
            </UncontrolledTooltip>
            <UncontrolledTooltip placement="top" target={`budgetDelete_${props.budget.budgetId}`}>
              Delete
            </UncontrolledTooltip>
          </span>
        </CardText>
        <CardText className="flex-sb-m">
          <small className="text-muted">Created on: {getFormatedDate(props.budget.createdDate)}</small>
          <small className="text-muted">Last updated: {getFormatedDate(props.budget.updatedDate)}</small>
        </CardText>
      </CardBody>
    </Card>
  )
}

BudgetCard.propTypes = {
  budget: PropTypes.object.isRequired,
  getBudgetId: PropTypes.func.isRequired
}

export default BudgetCard