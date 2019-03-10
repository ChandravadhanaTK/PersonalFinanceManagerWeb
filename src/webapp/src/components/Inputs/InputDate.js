import React, { Fragment } from 'react'
import { Label, Input, FormFeedback, FormText } from 'reactstrap'
import moment from 'moment'

const InputDate = ({ input, meta: { touched, error, warning }, id, title }) => {
  const showErr = touched ? (error ? 'is-invalid' : 'is-valid') : ""
  return (
    <Fragment>
      <Label for={id}>{title}</Label>
      <Input type="date" {...(touched ? { valid: !error } : {})} {...input} value={input.value ? moment(input.value).format('YYYY-MM-DD') : ""} className={showErr} />
      {error && <FormFeedback>{error}</FormFeedback>}
      {!error && warning && <FormText>{warning}</FormText>}
    </Fragment>
  )
}

export default InputDate