import * as actions from '../actions/types'

const initialState = {
  //budgetEditData: {},
  budgetList: []
}

export default function budgetReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_ALL_BUDGET_FULFILLED:
      return state = {...state, budgetList: action.payload.data}
    //case actions.GET_BUDGET_FULFILLED:
    //  return state = {...state, budgetEditData: action.payload.data}
    default:
      return state
  }
}