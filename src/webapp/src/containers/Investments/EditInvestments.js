import React from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'reactstrap'
import * as actions from '../../actions'
import InvestmentsFieldsCard from '../../components/Investments/InvestmentsFieldsCard'

class EditInvestments extends React.Component {
  componentWillMount() {
    console.log(this.props.match.params.investmentsId)
    this.props.getInvestments(this.props.match.params.investmentsId)
  }

  handleSubmit = (values) => {
    console.log(values)
    //converting into datatime format
    values.investmentsDate = new Date(values.investmentsDate)
    this.props.editInvestments(values)
  }
  render() {
    return (
      <Row>
        <Col>
          <div className="m-t-10">
            <InvestmentsFieldsCard title="Edit Investment"
                                   submitName="Update"
                                   initialValues={this.props.investmentsEditData}
                                   onSubmit={this.handleSubmit}>
            </InvestmentsFieldsCard>
          </div>
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = state => ({
  investmentsEditData: state.investmentsReducer.investmentsEditData
})

const mapDispatchToProps = dispatch => ({
  getInvestments: (investmentsId) => dispatch(actions.getInvestments(investmentsId)),
  editInvestments: (investmentsData) => dispatch(actions.editInvestments(investmentsData)),
})

export default connect(mapStateToProps, mapDispatchToProps) (EditInvestments)