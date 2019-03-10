import React, { Fragment } from 'react'
import { Label, Input } from 'reactstrap'

const InputSelect = ({ input, meta: { touched, error }, id, title, children, ...custom }) => (
  <Fragment>
    <Label for={id}>{title}</Label>
    <Input type="select" {...(touched ? { valid: !error } : {})} {...input} {...custom}>
      {children}
    </Input>
  </Fragment>
)

export default InputSelect