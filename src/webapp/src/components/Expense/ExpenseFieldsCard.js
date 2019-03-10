import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Card, CardBody, CardTitle, FormGroup, Button } from 'reactstrap'
import InputText from '../Inputs/InputText'
import InputSelect from '../Inputs/InputSelect'
import InputDate from '../Inputs/InputDate'
import { Field, reduxForm } from 'redux-form'

const required = value => (value || typeof value === 'number' ? undefined : 'Required')
const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined
const ExpenseFieldsCard = (props) => {
  return (
    <Card>
      <CardBody>
        <CardTitle className="text-center">{props.title}</CardTitle>
        <hr/>
        <form onSubmit={props.handleSubmit}>
          <Row>
            <Col xs="12" sm="6" lg="3">
              <FormGroup>
              <Field id="expense_name"
                       type="text"
                       name="expense_name"
                       title="Expense Name"
                       placeholder="Eg: Food or Shopping Expenses"
                       validate={required}
                       component={InputText}>
                </Field>
                
              </FormGroup>
            </Col>
            <Col xs="12" sm="6" lg="3">
              <FormGroup>
              <Field id="expense_amount"
                       type="text"
                       name="expense_amount"
                       title="Expense Amount"
                       placeholder="Eg: 2000"
                       validate={[required, number]}
                       component={InputText}>
                </Field>
                
              </FormGroup>
            </Col>
            <Col xs="12" sm="6" lg="3">
              <FormGroup>
              <Field id="expense_type"
                       type="select"
                       name="expense_type"
                       title="Mode Of Payment"
                       validate={required}
                       component={InputSelect}>
                      <option value="Cash">Cash</option>
                      <option value="Card">Card</option>
                      <option value="Net Banking">Net Banking</option>
                      <option value="Others">Others</option>
              </Field>
              </FormGroup>
            </Col>
            <Col xs="12" sm="6" lg="3">
              <FormGroup>
              <Field id="expense_date"
                       type="date"
                       name="expense_date"
                       title="Expense Date"
                       validate={required}
                       component={InputDate}>
                </Field>
                
              </FormGroup>
            </Col>
            <Col xs="12" className="text-center">
              <Button color="custom" type="submit">{props.submitName}</Button>
            </Col>
          </Row>
        </form>
      </CardBody>
    </Card>
  )
}

ExpenseFieldsCard.propTypes = {
  title: PropTypes.string.isRequired,
  submitName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default reduxForm({
  form: 'expenseForm',
  enableReinitialize: true,
  initialValues: {
    expense_type: 'Cash'
  }
})(ExpenseFieldsCard)
