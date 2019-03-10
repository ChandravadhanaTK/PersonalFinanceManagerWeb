import * as actions from '../actions/types'

const initialState = {
  incomeEditData: {},
  incomeList: []
}

export default function incomeReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_ALL_INCOME_FULFILLED:
      return state = {...state, incomeList: action.payload.data}
    case actions.GET_INCOME_FULFILLED:
      return state = {...state, incomeEditData: action.payload.data}
    case actions.SEARCH_INCOME_FULFILLED:
      return state = {...state, incomeList: action.payload.data}
    default:
      return state
  }
}
