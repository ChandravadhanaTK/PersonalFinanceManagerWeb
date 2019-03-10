import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Card, CardBody, CardText, UncontrolledTooltip  } from 'reactstrap'
import { getFormatedDate, getCurrencyIconFont } from '../../helper'

const IncomeCard = (props) => {
  const handleDelete = () => {
    props.getIncomeId(props.income.incomeId)
  }
  return (
    <Card className="m-b-5">
      <CardBody>
        <CardText className="flex-sb-m">
          <span>
            <i className="fa fa-bookmark-o text-primary" aria-hidden="true"></i> {props.income.incomeType}
            <i className="fa fa-money m-l-30 text-success" aria-hidden="true"></i> <i className={getCurrencyIconFont(props.currency)} aria-hidden="true"></i>{props.income.incomeAmount}
            <i className="fa fa-calendar m-l-30 text-info" aria-hidden="true"></i> {getFormatedDate(props.income.incomeDate)}
          </span>
          <span>
            <Link to={`/income/edit/${props.income.incomeId}`}>
              <i id={`incomeEdit_${props.income.incomeId}`} className="fa fa-pencil icon-btn text-warning" aria-hidden="true"></i>
            </Link>
            <i id={`incomeDelete_${props.income.incomeId}`} className="fa fa-trash-o icon-btn m-l-15 text-danger" onClick={handleDelete} aria-hidden="true"></i>
            <UncontrolledTooltip placement="top" target={`incomeEdit_${props.income.incomeId}`}>
              Edit
            </UncontrolledTooltip>
            <UncontrolledTooltip placement="top" target={`incomeDelete_${props.income.incomeId}`}>
              Delete
            </UncontrolledTooltip>
          </span>
        </CardText>
        <CardText className="flex-sb-m">
          <small className="text-muted">Created on: {getFormatedDate(props.income.createdDate)}</small>
          <small className="text-muted">Last updated: {getFormatedDate(props.income.updatedDate)}</small>
        </CardText>
      </CardBody>
    </Card>
  )
}

IncomeCard.propTypes = {
  income: PropTypes.object.isRequired,
  getIncomeId: PropTypes.func.isRequired
}

export default IncomeCard