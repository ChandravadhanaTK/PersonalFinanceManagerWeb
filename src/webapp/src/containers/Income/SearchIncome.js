import React from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'reactstrap'
import * as actions from '../../actions'
import SearchBar from '../../components/SearchBar'
import ValueBar from '../../components/ValueBar'
import IncomeCard from '../../components/Income/IncomeCard'
import DeleteModal from '../../components/DeleteModal'

class SearchIncome extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      incomeDeleteModal: false,
      deleteIncomeId: ''
    }
  }

  componentWillMount() {
    //Dispatching get all action
    this.props.getIncomeList()
    this.props.getSettings(this.props.currentUser.emailId)
  }

  toggle = () => {
    this.setState({
      incomeDeleteModal: !this.state.incomeDeleteModal
    })
  }

  handleGetIncomeId = (incomeId) => {
    this.setState({
      incomeDeleteModal: true,
      deleteIncomeId: incomeId
    })
  }

  handleDelete = () => {
    this.setState({
      incomeDeleteModal: false
    })
    this.props.deleteIncome(this.state.deleteIncomeId)
  }

  handleSubmit = (values) => {
    console.log(values)
    this.props.searchIncome(values.search)
  }

  render() {
    return (
      <Row>
        <Col>
          <div className="block-search">
            <SearchBar placeholder="search income..."
                       onSubmit={this.handleSubmit}>
            </SearchBar>
          </div>
          <ValueBar title="Total Income"
                    color="success"
                    value={this.props.income.incomeList.reduce((prev, cur) => { return prev + cur.incomeAmount}, 0)}
                    currency={this.props.settingsData ? this.props.settingsData.currency : ""}>
          </ValueBar>
          <div className="block-content">
            {this.props.income.incomeList.map(income => {
              return <IncomeCard key={income.incomeId}
                                 income={income}
                                 match={this.props.match}
                                 currency={this.props.settingsData ? this.props.settingsData.currency : ""}
                                 getIncomeId={this.handleGetIncomeId}>
                      </IncomeCard>
            })}
          </div>
        </Col>
        <DeleteModal modalState={this.state.incomeDeleteModal}
                     modalToggle={this.toggle}
                     modalAction={this.handleDelete}
                     modalTitle="Delete Income"
                     modalBody="Are you sure you want to delete?">
        </DeleteModal>
      </Row>
    )
  }
}

const mapStateToProps = state => ({
  income: state.incomeReducer,
  settingsData: state.settingsReducer.currentSettings,
  currentUser: state.userReducer.user
})

const mapDispatchToProps = dispatch => ({
  getIncomeList: () => dispatch(actions.getAllIncome()),
  searchIncome: (incomeKey) => dispatch(actions.searchIncome(incomeKey)),
  deleteIncome: (incomeId) => dispatch(actions.deleteIncome(incomeId)),
  getSettings: (emailId) => dispatch(actions.getSettings(emailId))
})

export default connect(mapStateToProps, mapDispatchToProps) (SearchIncome)