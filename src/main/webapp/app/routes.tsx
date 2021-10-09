import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';
import PageNotFound from 'app/shared/error/page-not-found';

import IntroPage from 'app/pages/movingDubai-page/movingDubaiPage';
import UserNamePage from 'app/pages/usarName-page/userNamePage';
import NationalityPage from 'app/pages/nationality-page/nationalityPage';
import TakePhotoPage from 'app/pages/takePhoto-page/takePhotoPage';
import UploadLicensePage from 'app/pages/uploadLicense-page/uploadLicensePage';
import FinishLessonsPage from 'app/pages/finishLessons-page/finishLessonsPage';
import ThankYouPage from 'app/pages/thankYou-page/thankYouPage';
import YourJourneyPage from 'app/pages/yourJourney-page/yourJourneyPage';
import LecturesPage from 'app/pages/lectures-page/lecturesPage';

const Routes = () => (
  <div className="view-routes">
    <Switch>
      <ErrorBoundaryRoute exact path="/" component={IntroPage} />
      <ErrorBoundaryRoute exact path="/username" component={UserNamePage} />
      <ErrorBoundaryRoute exact path="/nationality" component={NationalityPage} />
      <ErrorBoundaryRoute exact path="/takePhoto" component={TakePhotoPage} />
      <ErrorBoundaryRoute exact path="/uploadLicense" component={UploadLicensePage} />
      <ErrorBoundaryRoute exact path="/thankYou" component={ThankYouPage} />
      <ErrorBoundaryRoute exact path="/yourJourney" component={YourJourneyPage} />
      <ErrorBoundaryRoute exact path="/Lectures" component={LecturesPage} />



      <ErrorBoundaryRoute exact path="/finishLessons" component={FinishLessonsPage} />
      <ErrorBoundaryRoute component={PageNotFound} />
    </Switch>
  </div>
);

export default Routes;
