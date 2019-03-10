import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Card, CardBody, CardTitle, FormGroup, Button } from 'reactstrap'
import InputSelect from '../Inputs/InputSelect'
import InputDate from '../Inputs/InputDate'
import { Field, reduxForm } from 'redux-form'

const required = value => (value || typeof value === 'number' ? undefined : 'Required')
const BudgetFieldsCard = (props) => {
  return (
    <Card>
      <CardBody>
        <CardTitle className="text-center">{props.title}</CardTitle>
        <form onSubmit={props.handleSubmit}>
          <Row>
            <Col xs="12" sm="6" lg="4">
              <FormGroup>
                <Field id="fromExpenseDate"
                       type="date"
                       name="fromExpenseDate"
                       title="From Expense Date"
                       validate={required}
                       component={InputDate}>
                </Field>
              </FormGroup>
            </Col>
            <Col xs="12" sm="6" lg="4">
	            <FormGroup>
	              <Field id="toExpenseDate"
	                     type="date"
	                     name="toExpenseDate"
	                     title="To Expense Date"
	                     validate={required}
	                     component={InputDate}>
	              </Field>
	            </FormGroup>
            </Col>
            <Col xs="12" sm="6" lg="4">
            <FormGroup>
              <Field id="budgetType"
                     type="select"
                     name="budgetType"
                     title="Budget Type"
                     validate={required}
                     component={InputSelect}>
                <option value="Investment">Investment</option>
                <option value="Income">Income</option>
                <option value="Expense">Expense</option>
                <option value="Income Vs Expense">Income Vs Expense</option>
                <option value="Income Vs Investment">Income Vs Investment</option>
              </Field>
            </FormGroup>
          </Col>
          <Col xs="12" sm="6" lg="4">
          <FormGroup>
            <Field id="plotType"
                   type="select"
                   name="plotType"
                   title="Plot Type"
                   validate={required}
                   component={InputSelect}>
              <option value="column">Column</option>
              <option value="bar">Bar</option>
              <option value="line">Line</option>
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

BudgetFieldsCard.propTypes = {
  title: PropTypes.string.isRequired,
  submitName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default reduxForm({
  form: 'budgetForm',
  enableReinitialize: true,
  initialValues: {
    budgetType: 'Investment',
    plotType: 'bar'
  }
})(BudgetFieldsCard)