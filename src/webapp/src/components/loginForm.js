import React from 'react'
import PropTypes from 'prop-types'
import InputText from './Inputs/InputText'
import { Link } from 'react-router-dom'
import { Row, Col, Card, CardBody, FormGroup, Button } from 'reactstrap'
import { Field, reduxForm } from 'redux-form'

const email = value =>
  (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined)
const required = value => (value || typeof value === 'number' ? undefined : 'Required')

const LoginForm = (props) => {
  return (
    <Row>
      <Col xs="12" sm={{ size: 6, offset: 3 }} md={{ size: 4, offset: 4 }} className="m-align">
        <Card>
          <CardBody>
            <h2 className="text-center">{props.title}</h2>
            <form  onSubmit={props.handleSubmit}>
              <FormGroup>
                <Field id="email"
                      type="email"
                      name="emailId"
                      title="Email Address"
                      placeholder="Enter your email"
                      validate={[required,email]}
                      component={InputText}>
                </Field>
              </FormGroup>
              <FormGroup>
                <Field id="password"
                        type="password"
                        name="password"
                        title="Password"
                        placeholder="Enter password"
                        validate={required}
                        component={InputText}>
                </Field>
              </FormGroup>
              <Row>
                <Col sm="12" className="m-align text-center">
                  <Button color="primary" type="submit">{props.submitName}</Button>
                  <Link to="/signup" className="p-l-10">Sign Up?</Link>
                </Col>
              </Row>
            </form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}

LoginForm.propTypes = {
  title: PropTypes.string.isRequired,
  submitName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default reduxForm({
  form: 'loginForm'
})(LoginForm)