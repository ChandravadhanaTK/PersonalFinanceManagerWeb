import * as actions from './types'
import API from '../api/apiController'
import { history } from '../helper'

export const getAllIncome = () => {
  return (dispatch) => {
    dispatch({type: actions.GET_ALL_INCOME_PENDING})
    API.get('/income/all')
      .then(res => dispatch({type: actions.GET_ALL_INCOME_FULFILLED, payload: res}))
      .catch(err => dispatch({type: actions.GET_ALL_INCOME_REJECTED, payload: err}))
  }
}

export const getIncome = (incomeId) => {
  return (dispatch) => {
    dispatch({type: actions.GET_INCOME_PENDING})
    API.get(`/income/${incomeId}`)
      .then(res => dispatch({type: actions.GET_INCOME_FULFILLED, payload: res}))
      .catch(err => dispatch({type: actions.GET_INCOME_REJECTED, payload: err}))
  }
}

export const searchIncome = (incomeKey) => {
  incomeKey = incomeKey ? incomeKey : ''
  return (dispatch) => {
    dispatch({type: actions.SEARCH_INCOME_PENDING})
    API.get(`/income/search?incomeKey=${incomeKey}`)
      .then(res => dispatch({type: actions.SEARCH_INCOME_FULFILLED, payload: res}))
      .catch(err => dispatch({type: actions.SEARCH_INCOME_REJECTED, payload: err}))
  }
}

export const addIncome = (incomeData) => {
  return (dispatch) => {
    dispatch({type: actions.ADD_INCOME_PENDING})
    API.put('/income/new', incomeData)
      .then(res => {
        dispatch({type: actions.ADD_INCOME_FULFILLED, payload: res})
        history.push('/income/all')
      })
      .catch(err => dispatch({type: actions.ADD_INCOME_REJECTED, payload: err}))
  }
}

export const editIncome = (incomeData) => {
  return (dispatch) => {
    dispatch({type: actions.EDIT_INCOME_PENDING})
    API.post('/income/edit', incomeData)
      .then(res => {
        dispatch({type: actions.EDIT_INCOME_FULFILLED, payload: res})
        history.push('/income/all')
      })
      .catch(err => dispatch({type: actions.EDIT_INCOME_REJECTED, payload: err}))
  }
}

export const deleteIncome = (incomeId) => {
  return (dispatch) => {
    dispatch({type: actions.DELETE_INCOME_PENDING})
    API.delete(`/income/delete/${incomeId}`)
      .then(res => {
        dispatch({type: actions.DELETE_INCOME_FULFILLED, payload: res})
        //TODO: update income list
        // getAllIncome()
      })
      .catch(err => dispatch({type: actions.DELETE_INCOME_REJECTED, payload: err}))
  }
}