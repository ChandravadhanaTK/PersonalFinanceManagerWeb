import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import InputText from '../Inputs/InputText'
import { Row, Col, FormGroup, Button } from 'reactstrap'
import { Field, reduxForm } from 'redux-form'

const required = value => (value || typeof value === 'number' ? undefined : 'Required')

const ActivateUserForm = (props) => {
  return (
    <Fragment>
      <form onSubmit={props.handleSubmit}>
        <FormGroup >
          <Field id="emailId"
                  type="email"
                  name="emailId"
                  title="Email Address"
                  validate={required}
                  disabled
                  component={InputText}>
          </Field>
        </FormGroup>
        <FormGroup >
          <Field id="otp"
                  type="number"
                  name="otp"
                  title="OTP"
                  placeholder="One time code"
                  validate={required}
                  component={InputText}>
          </Field>
        </FormGroup>
        <Row>
          <Col sm="12" className="m-align text-center">
            <Button color="primary" type="submit">{props.submitName}</Button>
          </Col>
        </Row>
      </form>
    </Fragment>
  )
}

ActivateUserForm.propTypes = {
  submitName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default reduxForm({
  form: 'activateUserForm',
  enableReinitialize: true
})(ActivateUserForm)