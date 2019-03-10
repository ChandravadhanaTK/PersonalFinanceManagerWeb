import moment from 'moment'
import { createBrowserHistory } from 'history';

const getFormatedDate = (date) => {
  return moment(new Date(date)).format('ll')
}

const getFormatedDateForApi = (date) =>{
  return moment(new Date(date)).format()
}
 
const history = createBrowserHistory();

const getCurrencyIconFont = (currency) => {
  return (currency && currency !== "") ? `fa fa-${currency.toLowerCase()} fs-13` : 'fa fa-inr fs-13'
} 

export {
  getFormatedDate,
  getFormatedDateForApi,
  history,
  getCurrencyIconFont
}