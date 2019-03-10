import * as actions from './types'
import API from '../api/apiController'
import { history } from '../helper'

export const getAllInvestments = () => {
  return (dispatch) => {
    dispatch({type: actions.GET_ALL_INVESTMENTS_PENDING})
    API.get('/investments/all')
      .then(res => dispatch({type: actions.GET_ALL_INVESTMENTS_FULFILLED, payload: res}))
      .catch(err => dispatch({type: actions.GET_ALL_INVESTMENTS_REJECTED, payload: err}))
  }
}

export const getInvestments = (investmentsId) => {
  return (dispatch) => {
    dispatch({type: actions.GET_INVESTMENTS_PENDING})
    API.get(`/investments/${investmentsId}`)
      .then(res => dispatch({type: actions.GET_INVESTMENTS_FULFILLED, payload: res}))
      .catch(err => dispatch({type: actions.GET_INVESTMENTS_REJECTED, payload: err}))
  }
}

export const searchInvestments = (investmentsKey) => {
  investmentsKey = investmentsKey ? investmentsKey : ''
  return (dispatch) => {
    dispatch({type: actions.SEARCH_INVESTMENTS_PENDING})
    API.get(`/investments/search?investmentsKey=${investmentsKey}`)
      .then(res => dispatch({type: actions.SEARCH_INVESTMENTS_FULFILLED, payload: res}))
      .catch(err => dispatch({type: actions.SEARCH_INVESTMENTS_REJECTED, payload: err}))
  }
}

export const addInvestments = (investmentsData) => {
  return (dispatch) => {
    dispatch({type: actions.ADD_INVESTMENTS_PENDING})
    API.put('/investments/new', investmentsData)
      .then(res => {
        dispatch({type: actions.ADD_INVESTMENTS_FULFILLED, payload: res})
        history.push('/investments/all')
      })
      .catch(err => dispatch({type: actions.ADD_INVESTMENTS_REJECTED, payload: err}))
  }
}

export const editInvestments = (investmentsData) => {
  return (dispatch) => {
    dispatch({type: actions.EDIT_INVESTMENTS_PENDING})
    API.post('/investments/edit', investmentsData)
      .then(res => {
        dispatch({type: actions.EDIT_INVESTMENTS_FULFILLED, payload: res})
        history.push('/investments/all')
      })
      .catch(err => dispatch({type: actions.EDIT_INVESTMENTS_REJECTED, payload: err}))
  }
}

export const deleteInvestments = (investmentsId) => {
  return (dispatch) => {
    dispatch({type: actions.DELETE_INVESTMENTS_PENDING})
    API.delete(`/investments/delete/${investmentsId}`)
      .then(res => {
        dispatch({type: actions.DELETE_INVESTMENTS_FULFILLED, payload: res})
        //TODO: update investments list
        // getAllInvestments()
      })
      .catch(err => dispatch({type: actions.DELETE_INVESTMENTS_REJECTED, payload: err}))
  }
}