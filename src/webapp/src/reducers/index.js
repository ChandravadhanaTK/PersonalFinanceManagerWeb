import { combineReducers } from 'redux'

import incomeReducer from './incomeReducer'
import investmentsReducer from './investmentsReducer'
import bankAccountReducer from './bankAccountReducer'
import expenseReducer from './expenseReducer'
import budgetReducer from './budgetReducer'
import { reducer as ReduxFormReducer } from 'redux-form'
import { reducer as notificationsReducer } from 'reapop';
import userReducer from './userReducer'
import settingsReducer from './settingsReducer'

const defaultNotification = {
  position: 'bl',
  dismissible: true,
  dismissAfter: 5000,
  allowHTML: false,
  closeButton: false
};

export default combineReducers({
  incomeReducer,
  investmentsReducer,
  bankAccountReducer,
  expenseReducer,
  budgetReducer,
  'form': ReduxFormReducer,
  notifications: notificationsReducer(defaultNotification),
  userReducer,
  settingsReducer
})
