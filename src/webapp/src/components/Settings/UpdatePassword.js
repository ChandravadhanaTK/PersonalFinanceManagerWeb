import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Card, CardBody, CardTitle, FormGroup, Button } from 'reactstrap'
import InputText from '../Inputs/InputText'
import { Field, reduxForm } from 'redux-form'

const required = value => (value || typeof value === 'number' ? undefined : 'Required')
const passVal = (value, allValues) => (value !== allValues.newPassword ? 'Password and confirm password should match' : undefined)
const UpdatePassword = (props) => {
  return (
    <Card>
      <CardBody>
        <CardTitle className="text-center">{props.title}</CardTitle>
        <form onSubmit={props.handleSubmit}>
          <Row>
          <Col xs="12" sm="6" lg="4">
              <FormGroup>
                <Field id="NewPassword"
                       type="password"
                       name="newPassword"
                       title="New Password"
                       placeholder="new password"
                       validate={required}
                       component={InputText}>
                </Field>
              </FormGroup>
           </Col>
           <Col xs="12" sm="6" lg="4">
              <FormGroup>
                <Field id="ConfirmPassword"
                       type="password"
                       name="confirmPassword"
                       title="Confirm Password"
                       placeholder="retype password"
                       validate={[required, passVal]}
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

UpdatePassword.propTypes = {
  title: PropTypes.string.isRequired,
  submitName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default reduxForm({
  form: 'passwordForm'
})(UpdatePassword)