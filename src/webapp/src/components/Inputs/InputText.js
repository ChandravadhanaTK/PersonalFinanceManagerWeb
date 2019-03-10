import React, { Fragment } from 'react'
import { Label, Input, FormFeedback, FormText } from 'reactstrap'

const InputText = ({ input, meta: { touched, error, warning }, id, title, ...custom }) => {
  const showErr = touched ? (error ? 'is-invalid' : 'is-valid') : ""
  return (
    <Fragment>
      {id ? <Label for={id}>{title}</Label> : ""}
      <Input {...(touched ? { valid: !error } : {})} {...input} {...custom} className={showErr} />
      {error && <FormFeedback>{error}</FormFeedback>}
      {!error && warning && <FormText>{warning}</FormText>}
    </Fragment>
  )
}

export default InputText