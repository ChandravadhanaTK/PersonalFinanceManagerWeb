import * as actions from './types'
import API from '../api/apiController'

export const getAllBudget = (budgetDetails) => {
  return (dispatch) => {
    dispatch({type: actions.GET_ALL_BUDGET_PENDING})
    API.post('/budget/plot',budgetDetails)
      .then(res => dispatch({type: actions.GET_ALL_BUDGET_FULFILLED, payload: res}))
      .catch(err => dispatch({type: actions.GET_ALL_BUDGET_REJECTED, payload: err}))
  }
}

//export const getBudget = (budgetId) => {
//  return (dispatch) => {
//    dispatch({type: actions.GET_BUDGET_PENDING})
//    API.get(`/budget/${budgetId}`)
//      .then(res => dispatch({type: actions.GET_BUDGET_FULFILLED, payload: res}))
//		.catch(err => dispatch({type: actions.GET_BUDGET_REJECTED, payload: err}))
//  }
//}
