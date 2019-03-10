import React from 'react'
import PropTypes from 'prop-types'
import { InputGroup, InputGroupAddon, Button } from 'reactstrap'

import InputText from './Inputs/InputText'
import { Field, reduxForm } from 'redux-form'

//const required = value => (value || typeof value === 'number' ? undefined : 'Required')

const SearchBar = (props) => {
  return(
    <form onSubmit={props.handleSubmit}>
      <InputGroup>
        <Field type="text"
               name="search"
               placeholder={props.placeholder}
               component={InputText}
               onChange={props.filterList}>
        </Field>
        <InputGroupAddon addonType="append">
          <Button type="submit"><i className="fa fa-search" aria-hidden="true"></i></Button>
        </InputGroupAddon>
      </InputGroup>
    </form>
  )
}

SearchBar.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired
}

export default reduxForm({
  form: 'searchForm',
})(SearchBar)