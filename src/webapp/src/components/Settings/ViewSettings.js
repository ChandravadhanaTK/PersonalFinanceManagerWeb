import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Card, CardBody, CardTitle } from 'reactstrap'

const ViewSettings = (props) => {
  return (
    <Card>
      <CardBody>
        <CardTitle className="text-center">{props.title}</CardTitle>
        <Row>
          <Col>
              <p>
                <b> Email id : </b> {props.settingsData.emailId}
              </p>
              <p>
                <b> Currency : </b> {props.settingsData.currency ? props.settingsData.currency : 'No currency selected yet!'}
              </p>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

ViewSettings.propTypes = {
  settingsData: PropTypes.object.isRequired
}

export default ViewSettings