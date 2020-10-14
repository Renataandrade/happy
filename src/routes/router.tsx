import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Landing, OrphanagesMap } from '../pages';


const Routes = () => {

    return(
        <BrowserRouter>
            <Switch>
                <Route exact={true} path="/" component={Landing} />
                <Route path="/map" component={OrphanagesMap} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;