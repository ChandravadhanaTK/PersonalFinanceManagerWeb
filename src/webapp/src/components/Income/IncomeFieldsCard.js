import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Card, CardBody, CardTitle, FormGroup, Button } from 'reactstrap'
import InputText from '../Inputs/InputText'
import InputSelect from '../Inputs/InputSelect'
import InputDate from '../Inputs/InputDate'
import { Field, reduxForm } from 'redux-form'

const required = value => (value || typeof value === 'number' ? undefined : 'Required')
const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined
const IncomeFieldsCard = (props) => {
  return (
    <Card>
      <CardBody>
        <CardTitle className="text-center">{props.title}</CardTitle>
        <form onSubmit={props.handleSubmit}>
          <Row>
            <Col xs="12" sm="6" lg="4">
              <FormGroup>
                <Field id="incomeAmount"
                       type="text"
                       name="incomeAmount"
                       title="Income Amount"
                       placeholder="Eg: 2000"
                       validate={[required, number]}
                       component={InputText}>
                </Field>
              </FormGroup>
            </Col>
            <Col xs="12" sm="6" lg="4">
              <FormGroup>
                <Field id="incomeType"
                       type="select"
                       name="incomeType"
                       title="Income Catagory"
                       validate={required}
                       component={InputSelect}>
                  <option value="salary">Salary</option>
                  <option value="gift">Gift</option>
                  <option value="other">Other</option>
                </Field>
              </FormGroup>
            </Col>
            <Col xs="12" sm="6" lg="4">
              <FormGroup>
                <Field id="incomeDate"
                       type="date"
                       name="incomeDate"
                       title="Income Date"
                       validate={required}
                       component={InputDate}>
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

IncomeFieldsCard.propTypes = {
  title: PropTypes.string.isRequired,
  submitName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default reduxForm({
  form: 'incomeForm',
  enableReinitialize: true,
  initialValues: {
    incomeType: 'salary'
  }
})(IncomeFieldsCard)