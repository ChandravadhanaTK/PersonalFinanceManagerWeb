import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import InputText from '../Inputs/InputText'
import InputSelect from '../Inputs/InputSelect'
import { Row, Col, FormGroup, Button } from 'reactstrap'
import { Field, reduxForm } from 'redux-form'

const email = value =>
  (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined)
const required = value => (value || typeof value === 'number' ? undefined : 'Required')

const RegisterUserForm = (props) => {
  return (
    <Fragment>
      <form onSubmit={props.handleSubmit}>
        <FormGroup >
          <Field id="firstName"
                  type="text"
                  name="firstName"
                  title="First Name"
                  placeholder="Enter your First Name"
                  validate={required}
                  component={InputText}>
          </Field>
        </FormGroup>
        <FormGroup >
          <Field id="lastName"
                  type="text"
                  name="lastName"
                  title="Last Name"
                  placeholder="Enter your Last Name"
                  validate={required}
                  component={InputText}>
          </Field>
        </FormGroup>
        <FormGroup >
          <Field id="mobileNumber"
                  type="number"
                  name="mobileNumber"
                  title="Mobile Number"
                  placeholder="Enter your Mobile Number"
                  validate={required}
                  component={InputText}>
          </Field>
        </FormGroup>
        <FormGroup >
          <Field id="emailId"
                  type="email"
                  name="emailId"
                  title="Email"
                  placeholder="Enter your email"
                  validate={[required,email]}
                  component={InputText}>
          </Field>
        </FormGroup>
        <FormGroup >
          <Field id="password"
                  type="password"
                  name="password"
                  title="Password"
                  placeholder="Enter password"
                  validate={required}
                  component={InputText}>
          </Field>
        </FormGroup>
        <FormGroup>
          <Field id="currency"
                  type="select"
                  name="currency"
                  title="Preferred currency"
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
        <Row>
          <Col sm="12" className="m-align text-center">
            <Button color="primary" type="submit">{props.submitName}</Button>
            <Link to="/login" className="p-l-10">Login?</Link>
          </Col>
        </Row>
      </form>
    </Fragment>
  )
}

RegisterUserForm.propTypes = {
  submitName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default reduxForm({
  form: 'registerUserForm',
  initialValues: {
    currency: 'INR'
  }
})(RegisterUserForm)