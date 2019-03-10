import * as actions from './types'
import API from '../api/apiController'
import {notify} from 'reapop';
import { history } from '../helper'

export const getAllExpense = (id) => {
  return (dispatch) => {
    dispatch({type: actions.GET_ALL_EXPENSE_PENDING})
    API.get('/expense/all')
      .then(res => dispatch({type: actions.GET_ALL_EXPENSE_FULFILLED, payload: res}))
      .catch(err => {
        dispatch({type: actions.GET_ALL_EXPENSE_REJECTED, payload: err})
        dispatch(notify({message: 'Error occurred while fetching data', status: 'error'}));
      })
  }
}

export const getExpense = (editExpenseId) => {
  return (dispatch,getState) => {
    const state = getState()
    let expense = state.expenseReducer.expenseList
    const editExpense = expense.filter(obj => (-1 !== editExpenseId.indexOf(obj.expense_id)))
    dispatch({type: actions.GET_EXPENSE_FULFILLED, payload: editExpense[0]})
  }
}

export const addExpense = (expenseData) => {
  return (dispatch) => {
    dispatch({type: actions.ADD_EXPENSE_PENDING})
    API.put('/expense/new', expenseData)
      .then(res => {
        dispatch({type: actions.ADD_EXPENSE_FULFILLED, payload: res})
        history.push('/expense/all')
      })
      .catch(err => dispatch({type: actions.ADD_EXPENSE_REJECTED, payload: err}))
  }
}

export const editExpense = (expenseData) => {
  return (dispatch) => {
    dispatch({type: actions.EDIT_EXPENSE_PENDING})
    API.post('/expense/edit', expenseData)
      .then(res => {
        dispatch({type: actions.EDIT_EXPENSE_FULFILLED, payload: res})
        history.push('/expense/all')
      })
      .catch(err => dispatch({type: actions.EDIT_EXPENSE_REJECTED, payload: err}))
  }
}

export const deleteExpense = (toDeleteExpenseId) => {
  return (dispatch,getState) => {
    const state = getState()
    dispatch({type: actions.DELETE_EXPENSE_PENDING})
    API.delete(`/expense/delete/${toDeleteExpenseId}`)
      .then(res =>  {
          if(res.status === 200){
            let expense = state.expenseReducer.expenseList
            const deletedExpense = expense.filter(obj => (-1 === toDeleteExpenseId.indexOf(obj.expense_id)));
            dispatch({type: actions.DELETE_EXPENSE_FULFILLED, payload: deletedExpense})
          }
        })
      .catch(err => {
        dispatch({type: actions.DELETE_EXPENSE_REJECTED, payload: err})
        dispatch(notify({message: 'Error occurred while fetching data', status: 'error'}));
      })
  }
}

export const searchExpense = (expenseKey) => {
  return (dispatch) => {
    dispatch({type: actions.SEARCH_EXPENSE_FULFILLED, payload: expenseKey })
  }
}
