import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import { Row, Col } from 'reactstrap'
import IncomeFieldsCard from '../../components/Income/IncomeFieldsCard'

class AddIncome extends React.Component {
  handleSubmit = (values) => {
    console.log(values)
    //converting into datatime format
    values.incomeDate = new Date(values.incomeDate)
    this.props.addIncome(values)
  }

  render() {
    return (
      <Row>
        <Col>
          <div className="m-t-10">
            <IncomeFieldsCard title="Add Income"
                              submitName="Add"
                              onSubmit={this.handleSubmit}>
            </IncomeFieldsCard>
          </div>
        </Col>
      </Row>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addIncome: (incomeData) => dispatch(actions.addIncome(incomeData))
})

export default connect(null, mapDispatchToProps) (AddIncome)