import * as actions from './types'
import API from '../api/apiController'
import { history } from '../helper'

export const getAllBankAccount = () => {
  return (dispatch) => {
    dispatch({type: actions.GET_ALL_BANKACCOUNT_PENDING})
    API.get('/bankAccount/all')
      .then(res => dispatch({type: actions.GET_ALL_BANKACCOUNT_FULFILLED, payload: res}))
      .catch(err => dispatch({type: actions.GET_ALL_BANKACCOUNT_REJECTED, payload: err}))
  }
}

export const searchBankAccount = (bankAccountKey) => {
  bankAccountKey = bankAccountKey ? bankAccountKey : ''
  return (dispatch) => {
    dispatch({type: actions.SEARCH_BANKACCOUNT_PENDING})
    API.get(`/bankAccount/search?bankAccountKey=${bankAccountKey}`)
      .then(res => dispatch({type: actions.SEARCH_BANKACCOUNT_FULFILLED, payload: res}))
      .catch(err => dispatch({type: actions.SEARCH_BANKACCOUNT_REJECTED, payload: err}))
  }
}

export const addBankAccount = (bankAccountData) => {
  return (dispatch) => {
    dispatch({type: actions.ADD_BANKACCOUNT_PENDING})
    API.put('/bankAccount/new', bankAccountData)
      .then(res => {
        dispatch({type: actions.ADD_BANKACCOUNT_FULFILLED, payload: res})
        history.push('/bankAccount/all')
      })
      .catch(err => dispatch({type: actions.ADD_BANKACCOUNT_REJECTED, payload: err}))
  }
}

export const deleteBankAccount = (bankAccountId) => {
  return (dispatch) => {
    dispatch({type: actions.DELETE_BANKACCOUNT_PENDING})
    API.delete(`/bankAccount/delete/${bankAccountId}`)
      .then(res => {
        dispatch({type: actions.DELETE_BANKACCOUNT_FULFILLED, payload: res})
        //TODO: update bank account list
        // getAllBankAccount()
      })
      .catch(err => dispatch({type: actions.DELETE_BANKACCOUNT_REJECTED, payload: err}))
  }
}