import React from 'react'
import { Route, Switch } from 'react-router-dom'


import ViewSettings from '../containers/Settings/ViewSettings';
import ChangePassword from '../containers/Settings/ChangePassword';
import ChangeCurrency from '../containers/Settings/ChangeCurrency';

const SettingsRoutes = (props) => {
  return (
    <Switch>
      <Route path={`${props.match.url}/view`} component={ViewSettings}></Route>
      <Route path={`${props.match.url}/change-password`} component={ChangePassword}></Route>
      <Route path={`${props.match.url}/change-currency`} component={ChangeCurrency}></Route>
    </Switch>
  )
}

export default SettingsRoutes;