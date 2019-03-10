import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Card, CardBody, CardTitle, FormGroup, Button } from 'reactstrap'
import InputText from '../Inputs/InputText'
import { Field, reduxForm } from 'redux-form'

const required = value => (value || typeof value === 'number' ? undefined : 'Required')
const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined

const BankAccountFieldsCard = (props) => {
  return (
    <Card>
      <CardBody>
        <CardTitle className="text-center">{props.title}</CardTitle>
        <form onSubmit={props.handleSubmit}>
          <Row>
            <Col xs="12" sm="6" lg="4">
              <FormGroup>
                <Field id="accountHolderName"
                       type="text"
                       name="accountHolderName"
                       title="Account Holder Name"
                       placeholder="Eg: Nagarjuna M"
                       validate={required}
                       component={InputText}>
                </Field>
              </FormGroup>
            </Col>
            <Col xs="12" sm="6" lg="4">
              <FormGroup>
                <Field id="accountNumber"
                       type="number"
                       name="accountNumber"
                       title="Account Number"
                       placeholder="Eg: 123456"
                       validate={[required, number]}
                       component={InputText}>
                </Field>
              </FormGroup>
            </Col>
            <Col xs="12" sm="6" lg="4">
              <FormGroup>
                <Field id="accountType"
                       type="text"
                       name="accountType"
                       title="Account Type"
                       placeholder="Eg: Savings"
                       validate={required}
                       component={InputText}>
                </Field>
              </FormGroup>
            </Col>
            <Col xs="12" sm="6" lg="4">
              <FormGroup>
                <Field id="bankName"
                       type="text"
                       name="bankName"
                       title="Bank Name"
                       placeholder="Eg: HDFC"
                       validate={required}
                       component={InputText}>
                </Field>
              </FormGroup>
            </Col>
            <Col xs="12" sm="6" lg="4">
              <FormGroup>
                <Field id="ifscCode"
                       type="text"
                       name="ifscCode"
                       title="IFSC Code"
                       placeholder="Eg: HDFC0001"
                       validate={required}
                       component={InputText}>
                </Field>
              </FormGroup>
            </Col>
            <Col xs="12" className="text-center">
              <Button color="primary" type="submit">{props.submitName}</Button>
            </Col>
          </Row>
        </form>
      </CardBody>
    </Card>
  )
}

BankAccountFieldsCard.propTypes = {
  title: PropTypes.string.isRequired,
  submitName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default reduxForm({
  form: 'bankAccountForm',
  enableReinitialize: true
})(BankAccountFieldsCard)
