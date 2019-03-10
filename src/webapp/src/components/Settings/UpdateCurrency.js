import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Card, CardBody, CardTitle, FormGroup, Button } from 'reactstrap'
import InputSelect from '../Inputs/InputSelect'
import { Field, reduxForm } from 'redux-form'

const required = value => (value || typeof value === 'number' ? undefined : 'Required')
const UpdateCurrency = (props) => {
  return (
    <Card>
      <CardBody>
        <CardTitle className="text-center">{props.title}</CardTitle>
        <form onSubmit={props.handleSubmit}>
          <Row>
            <Col xs="12" sm="6" lg="4">
              <FormGroup>
                <Field id="currency"
                       type="select"
                       name="currency"
                       title="Currency Type"
                       validate={required}
                       component={InputSelect}>
                  <option value="USD">USD</option>
                  <option value="INR">INR</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                  <option value="JPY">JPY</option>
                  <option value="RUB">RUB</option>
                  <option value="BTC">BTC</option>
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

UpdateCurrency.propTypes = {
  title: PropTypes.string.isRequired,
  submitName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default reduxForm({
  form: 'currencyForm',
  enableReinitialize: true,
  initialValues: {
    currency: 'INR'
  }
})(UpdateCurrency)