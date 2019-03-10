import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import { Row, Col } from 'reactstrap'
import InvestmentsFieldsCard from '../../components/Investments/InvestmentsFieldsCard'

class AddInvestments extends React.Component {
  handleSubmit = (values) => {
    console.log(values)
    //converting into datatime format
    values.investmentsDate = new Date(values.investmentsDate)
    this.props.addInvestments(values)
  }

  render() {
    return (
      <Row>
        <Col>
          <div className="m-t-10">
            <InvestmentsFieldsCard title="Add Investment"
                                   submitName="Add"
                                   onSubmit={this.handleSubmit}>
            </InvestmentsFieldsCard>
          </div>
        </Col>
      </Row>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addInvestments: (investmentsData) => dispatch(actions.addInvestments(investmentsData))
})

export default connect(null, mapDispatchToProps) (AddInvestments)