import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardBody, CardText } from 'reactstrap'
import { getCurrencyIconFont } from '../helper'

const ValueBar = (props) => {
  return(
    <Card className="m-b-5">
      <CardBody>
        <CardText className="flex-sb-m">
          <span>{props.title}: <i className={getCurrencyIconFont(props.currency)} aria-hidden="true"></i><span className={'text-'+props.color}><b>{props.value}</b></span></span>
        </CardText>
      </CardBody>
    </Card>
  )
}

ValueBar.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired
}

export default ValueBar