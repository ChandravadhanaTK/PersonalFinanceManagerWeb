import * as actions from '../actions/types'

const initialState = {
  expenseEditData: {},
  expenseList: [],
  searchItem : '',
  status : 0
}

export default function expenseReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_ALL_EXPENSE_FULFILLED:
      return state = {...state, expenseList: action.payload.data}
    case actions.GET_EXPENSE_FULFILLED:
      return state = {...state, expenseEditData: action.payload}
    case actions.DELETE_EXPENSE_FULFILLED:
      return state = {...state, expenseList: action.payload}
    case actions.SEARCH_EXPENSE_FULFILLED:
      return state = {...state, searchItem: action.payload.search}
    
    default:
      return state
  }
}
