import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Card, CardBody, CardTitle, FormGroup, Button, Text } from 'reactstrap'
import InputSelect from '../Inputs/InputSelect'
import InputDate from '../Inputs/InputDate'
import { Field, reduxForm } from 'redux-form'

const required = value => (value || typeof value === 'number' ? undefined : 'Required')
const Budget1FieldsCard = (props) => {
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

          <Col xs="12" sm="6" lg="4" class="text-center">
            <Button color="primary" type="submit">{props.submitName}</Button>
          </Col>
         </Row>
        </form>
      </CardBody>
    </Card>
  )
}

Budget1FieldsCard.propTypes = {
  title: PropTypes.string.isRequired,
  submitName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default reduxForm({
  form: 'budgetForm',
  enableReinitialize: true,
  initialValues: {  }
})(Budget1FieldsCard)