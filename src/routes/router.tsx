import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import {
	Landing,
	OrphanagesMap,
	OrphanageCreate,
	Orphanage
} from '../pages';


const Routes = () => {

	return (
		<BrowserRouter>
			<Switch>
				<Route exact={true} path="/" component={Landing} />
				<Route path="/map" component={OrphanagesMap} />
				<Route path="/orphanages/create" component={OrphanageCreate} />
				<Route path="/orphanages/:id" component={Orphanage} />
			</Switch>
		</BrowserRouter>
	)
}

export default Routes;