import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Card, CardBody, CardTitle, FormGroup, Button } from 'reactstrap'
import InputText from '../Inputs/InputText'
import InputSelect from '../Inputs/InputSelect'
import InputDate from '../Inputs/InputDate'
import { Field, reduxForm } from 'redux-form'

const required = value => (value || typeof value === 'number' ? undefined : 'Required')
const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined

const InvestmentsFieldsCard = (props) => {
  return (
    <Card>
      <CardBody>
        <CardTitle className="text-center">{props.title}</CardTitle>
        <form onSubmit={props.handleSubmit}>
          <Row>
            <Col xs="12" sm="6" lg="4">
              <FormGroup>
                <Field id="investmentsAmount"
                       type="text"
                       name="investmentsAmount"
                       title="Investments Amount"
                       placeholder="Eg: 2000"
                       validate={[required, number]}
                       component={InputText}>
                </Field>
              </FormGroup>
            </Col>
            <Col xs="12" sm="6" lg="4">
              <FormGroup>
                <Field id="investmentsType"
                       type="select"
                       name="investmentsType"
                       title="Investments Catagory"
                       validate={required}
                       component={InputSelect}>
                  <option value="stocks">Stocks</option>
                  <option value="mutual-funds">Mutual Funds</option>
                  <option value="bonds">Bonds</option>
                  <option value="retirement">Retirement</option>
                  <option value="investment-funds">Investment Funds</option>
                  <option value="insurance">Insurance</option>
                  <option value="other">Other</option>
                </Field>
              </FormGroup>
            </Col>
            <Col xs="12" sm="6" lg="4">
              <FormGroup>
                <Field id="investmentsDate"
                       type="date"
                       name="investmentsDate"
                       title="Investments Date"
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

InvestmentsFieldsCard.propTypes = {
  title: PropTypes.string.isRequired,
  submitName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default reduxForm({
  form: 'investmentsForm',
  enableReinitialize: true,
  initialValues: {
    investmentsType: 'stocks'
  }
})(InvestmentsFieldsCard)