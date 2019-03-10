import React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import * as actions from '../../actions';
import { getFormatedDate } from '../../helper'
import SearchBar from '../../components/SearchBar';
import ValueBar from '../../components/ValueBar'
import ExpenseCard from '../../components/Expense/ExpenseCard';
import DeleteModal from '../../components/DeleteModal';

class SearchExpense extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      expenseDeleteModal: false,
      deleteExpenseId: '',
    }
  }

  componentWillMount() {
    //Dispatching get all action
    this.props.getExpenseList();
    this.props.getSettings(this.props.currentUser.emailId)
  }

  render() {

    const {searchExpense, match, expense, deleteExpense} = this.props;

    let filterList =  (values) => {
        searchExpense(values);
      }

    let toggle = () => {
        this.setState({
          expenseDeleteModal: !this.state.ExpenseDeleteModal
        })
    }
    
    let handleGetExpenseId = (expenseId) => {
        this.setState({
          expenseDeleteModal: true,
          deleteExpenseId: expenseId
        })
    }
    
    let handleDelete = () => {
      this.setState({
        expenseDeleteModal: false
      })
      deleteExpense(this.state.deleteExpenseId)
    }

    return (
      <Row>
        <Col>
          <div className="block-search">
            <SearchBar placeholder="search Expense..."
                       onChange={filterList}>
            </SearchBar>
          </div>
          <ValueBar title="Total Income"
                    color="success"
                    value={expense.reduce((prev, cur) => { return prev + cur.expense_amount}, 0)}
                    currency={this.props.settingsData ? this.props.settingsData.currency : ""}>
          </ValueBar>
          <div className="block-content">
            {expense.map(expense => {
              return <ExpenseCard key={expense.expense_id}
                                 expense={expense}
                                 match={match}
                                 currency={this.props.settingsData ? this.props.settingsData.currency : ""}
                                 getExpenseId={handleGetExpenseId}>
                      </ExpenseCard>
            })}
          </div>
        </Col>
        <DeleteModal modalState={this.state.expenseDeleteModal}
                     modalToggle={toggle}
                     modalAction={handleDelete}
                     modalTitle="Delete Expense"
                     modalBody="Are you sure you want to delete?">
        </DeleteModal>
      </Row>
    )
  }
}

const getFilterData = (state) =>{
  let values = state.expenseReducer.searchItem;
  let updatedList = state.expenseReducer.expenseList;
  if((values!==undefined)){
      updatedList = updatedList.filter(item => {
        var eachExpenseName = item.expense_name.toLowerCase()
        var eachExpenseType = item.expense_type.toLowerCase()
        var eachExpenseAmount = item.expense_amount.toString()
        var eachExpenseDate = (getFormatedDate(item.expense_date)).toLowerCase().toString()
        var eachCreatedDate = (getFormatedDate(item.created_date)).toLowerCase().toString()
        var eachUpdatedDate = getFormatedDate(item.updated_date).toLowerCase().toString()
        
        var searchVal = values.toLowerCase()
        var filterVal = false
        if((eachExpenseName.search(searchVal)!== -1)||(eachUpdatedDate.search(searchVal)!==-1)
        ||(eachExpenseType.search(searchVal)!== -1)||(eachCreatedDate.search(searchVal)!==-1) 
        ||(eachExpenseDate.search(searchVal)!==-1)||(eachExpenseAmount.search(searchVal)!==-1))
        {
            filterVal = true;
        }
        return filterVal;
      });
  }
  return updatedList;
}


const mapStateToProps = state => ({
  expense: getFilterData(state),
  status: state.expenseReducer.status,
  settingsData: state.settingsReducer.currentSettings,
  currentUser: state.userReducer.user
})

const mapDispatchToProps = (dispatch, state) => ({
  getExpenseList: () => dispatch(actions.getAllExpense()),
  searchExpense: (filterVal) => dispatch(actions.searchExpense(filterVal)),
  deleteExpense : (expenseDeleteData) => dispatch(actions.deleteExpense(expenseDeleteData)),
  getSettings: (emailId) => dispatch(actions.getSettings(emailId))
})

export default connect(mapStateToProps, mapDispatchToProps) (SearchExpense)