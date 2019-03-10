import React from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'reactstrap'
import * as actions from '../../actions'
import SearchBar from '../../components/SearchBar'
import BankAccountCard from '../../components/BankAccount/BankAccountCard'
import DeleteModal from '../../components/DeleteModal'

class SearchBankAccount extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bankAccountDeleteModal: false,
      deleteBankAccountId: ''
    }
  }

  componentWillMount() {
    //Dispatching get all action
    this.props.getBankAccountList()
  }

  toggle = () => {
    this.setState({
      bankAccountDeleteModal: !this.state.bankAccountDeleteModal
    })
  }

  handleGetBankAccountId = (bankAccountId) => {
    this.setState({
      bankAccountDeleteModal: true,
      deleteBankAccountId: bankAccountId
    })
  }

  handleDelete = () => {
    this.setState({
      bankAccountDeleteModal: false
    })
    this.props.deleteBankAccount(this.state.deleteBankAccountId)
  }

  handleSubmit = (values) => {
    console.log(values)
    this.props.searchBankAccount(values.search)
  }

  render() {
    return (
      <Row>
        <Col>
          <div className="block-search">
            <SearchBar placeholder="search bank account..."
                       onSubmit={this.handleSubmit}>
            </SearchBar>
          </div>
          <div className="block-content">
            {this.props.bankAccount.bankAccountList.map(bankAccount => {
              return <BankAccountCard key={bankAccount.bankAccountId}
                                      bankAccount={bankAccount}
                                      match={this.props.match}
                                      getBankAccountId={this.handleGetBankAccountId}>
                      </BankAccountCard>
            })}
          </div>
        </Col>
        <DeleteModal modalState={this.state.bankAccountDeleteModal}
                     modalToggle={this.toggle}
                     modalAction={this.handleDelete}
                     modalTitle="Delete Bank Account"
                     modalBody="Are you sure you want to delete?">
        </DeleteModal>
      </Row>
    )
  }
}

const mapStateToProps = state => ({
  bankAccount: state.bankAccountReducer
})

const mapDispatchToProps = dispatch => ({
  getBankAccountList: () => dispatch(actions.getAllBankAccount()),
  searchBankAccount: (bankAccountKey) => dispatch(actions.searchBankAccount(bankAccountKey)),
  deleteBankAccount: (bankAccountId) => dispatch(actions.deleteBankAccount(bankAccountId)),
})

export default connect(mapStateToProps, mapDispatchToProps) (SearchBankAccount)