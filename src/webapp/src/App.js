import React, { Component } from 'react'

import { Router } from 'react-router-dom'
import { history } from './helper'
import PageRoutes from './routes/pageRoutes'

import { Container, Row, Col } from 'reactstrap'

import NavigationBar from './containers/NavigationBar'
import NotificationsSystem from 'reapop';
import theme from 'reapop-theme-wybo';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Container fluid={true} className="container__main">
          <Row>
            <Col>
              <div className="wrap">
                <NavigationBar></NavigationBar>
                <div className="content">
                  <PageRoutes></PageRoutes>
                </div>
              </div>
            </Col>
          </Row>
          <NotificationsSystem theme={theme} />
        </Container>
      </Router>
    );
  }
}

export default App;
