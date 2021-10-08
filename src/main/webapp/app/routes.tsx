import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';
import PageNotFound from 'app/shared/error/page-not-found';

import IntroPage from 'app/pages/intro/intro';

const Routes = () => (
  <div className="view-routes">
    <Switch>
      <ErrorBoundaryRoute exact path="/intro" component={IntroPage} />
      <ErrorBoundaryRoute component={PageNotFound} />
    </Switch>
  </div>
);

export default Routes;
