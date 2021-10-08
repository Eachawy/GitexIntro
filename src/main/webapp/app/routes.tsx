import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';
import PageNotFound from 'app/shared/error/page-not-found';

import IntroPage from 'app/pages/movingDubai-page/movingDubaiPage';
import UserNamePage from 'app/pages/usarName-page/userNamePage';
import NationalityPage from 'app/pages/nationality-page/nationalityPage';

const Routes = () => (
  <div className="view-routes">
    <Switch>
      <ErrorBoundaryRoute exact path="/" component={IntroPage} />
      <ErrorBoundaryRoute exact path="/username" component={UserNamePage} />
      <ErrorBoundaryRoute exact path="/nationality" component={NationalityPage} />
      <ErrorBoundaryRoute component={PageNotFound} />
    </Switch>
  </div>
);

export default Routes;
