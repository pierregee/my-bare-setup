import * as React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import LoginView from './modules/user/login-view'
import RegisterView from './modules/user/register-view'
import MeView from './modules/user/me-view'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={LoginView} />
                <Route path="/register" component={RegisterView} />
                <Route path="/me" component={MeView} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes