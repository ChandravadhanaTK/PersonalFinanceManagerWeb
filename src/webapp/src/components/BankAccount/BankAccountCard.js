import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardBody, CardText, UncontrolledTooltip  } from 'reactstrap'
import { getFormatedDate } from '../../helper'

const BankAccountCard = (props) => {
  const handleDelete = () => {
    props.getBankAccountId(props.bankAccount.bankAccountId)
  }
  return (
    <Card className="m-b-5">
      <CardBody>
        <CardText className="flex-sb-m">
          <span>
            <i className="fa fa-bookmark-o text-primary" aria-hidden="true"></i> {props.bankAccount.accountNumber}
            <i className="fa fa-user-circle m-l-30 text-success" aria-hidden="true"></i> {props.bankAccount.accountHolderName}
            <i className="fa fa-cube m-l-30 text-warning" aria-hidden="true"></i> {props.bankAccount.accountType}
            <i className="fa fa-university m-l-30 text-info" aria-hidden="true"></i> {props.bankAccount.bankName}
            <i className="fa fa-building-o m-l-30 text-info" aria-hidden="true"></i> {props.bankAccount.ifscCode}
          </span>
          <span>
            <i id={`bankAccountDelete_${props.bankAccount.bankAccountId}`} className="fa fa-trash-o icon-btn m-l-15 text-danger" onClick={handleDelete} aria-hidden="true"></i>
            <UncontrolledTooltip placement="top" target={`bankAccountDelete_${props.bankAccount.bankAccountId}`}>
              Delete
            </UncontrolledTooltip>
          </span>
        </CardText>
        <CardText className="flex-sb-m">
          <small className="text-muted">Created on: {getFormatedDate(props.bankAccount.createdDate)}</small>
          <small className="text-muted">Last updated: {getFormatedDate(props.bankAccount.updatedDate)}</small>
        </CardText>
      </CardBody>
    </Card>
  )
}

BankAccountCard.propTypes = {
  bankAccount: PropTypes.object.isRequired,
  getBankAccountId: PropTypes.func.isRequired
}

export default BankAccountCard