import React from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'reactstrap'
import * as actions from '../../actions'
import SearchBar from '../../components/SearchBar'
import ValueBar from '../../components/ValueBar'
import InvestmentsCard from '../../components/Investments/InvestmentsCard'
import DeleteModal from '../../components/DeleteModal'

class SearchInvestments extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      investmentsDeleteModal: false,
      deleteInvestmentsId: ''
    }
  }

  componentWillMount() {
    //Dispatching get all action
    this.props.getInvestmentsList()
    this.props.getSettings(this.props.currentUser.emailId)
  }

  toggle = () => {
    this.setState({
      investmentsDeleteModal: !this.state.investmentsDeleteModal
    })
  }

  handleGetInvestmentsId = (investmentsId) => {
    this.setState({
      investmentsDeleteModal: true,
      deleteInvestmentsId: investmentsId
    })
  }

  handleDelete = () => {
    this.setState({
      investmentsDeleteModal: false
    })
    this.props.deleteInvestments(this.state.deleteInvestmentsId)
  }

  handleSubmit = (values) => {
    console.log(values)
    this.props.searchInvestments(values.search)
  }

  render() {
    return (
      <Row>
        <Col>
          <div className="block-search">
            <SearchBar placeholder="search investments..."
                       onSubmit={this.handleSubmit}>
            </SearchBar>
          </div>
          <ValueBar title="Total Investments"
                    color="success"
                    value={this.props.investments.investmentsList.reduce((prev, cur) => { return prev + cur.investmentsAmount}, 0)}
                    currency={this.props.settingsData ? this.props.settingsData.currency : ""}>
          </ValueBar>
          <div className="block-content">
            {this.props.investments.investmentsList.map(investments => {
              return <InvestmentsCard key={investments.investmentsId}
                                      investments={investments}
                                      match={this.props.match}
                                      currency={this.props.settingsData ? this.props.settingsData.currency : ""}
                                      getInvestmentsId={this.handleGetInvestmentsId}>
                      </InvestmentsCard>
            })}
          </div>
        </Col>
        <DeleteModal modalState={this.state.investmentsDeleteModal}
                     modalToggle={this.toggle}
                     modalAction={this.handleDelete}
                     modalTitle="Delete Investment"
                     modalBody="Are you sure you want to delete?">
        </DeleteModal>
      </Row>
    )
  }
}

const mapStateToProps = state => ({
  investments: state.investmentsReducer,
  settingsData: state.settingsReducer.currentSettings,
  currentUser: state.userReducer.user
})

const mapDispatchToProps = dispatch => ({
  getInvestmentsList: () => dispatch(actions.getAllInvestments()),
  searchInvestments: (investmentsKey) => dispatch(actions.searchInvestments(investmentsKey)),
  deleteInvestments: (investmentsId) => dispatch(actions.deleteInvestments(investmentsId)),
  getSettings: (emailId) => dispatch(actions.getSettings(emailId))
})

export default connect(mapStateToProps, mapDispatchToProps) (SearchInvestments)