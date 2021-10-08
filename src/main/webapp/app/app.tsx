import 'react-toastify/dist/ReactToastify.css';
import './app.scss';

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Card } from 'reactstrap';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { hot } from 'react-hot-loader';

import { IRootState } from 'app/shared/reducers';
import { setLocale } from 'app/shared/reducers/locale';
import Header from 'app/shared/layout/header/header';
import ErrorBoundary from 'app/shared/error/error-boundary';
import AppRoutes from 'app/routes';

const baseHref = document.querySelector('base').getAttribute('href').replace(/\/$/, '');

export interface IAppProps extends StateProps, DispatchProps { }

export const App = (props: IAppProps) => {
  useEffect(() => {
  }, []);

  return (
    <Router basename={baseHref}>
      <div className="contentView">
        <ToastContainer position={toast.POSITION.TOP_LEFT} className="toastify-container" toastClassName="toastify-toast" />
        <ErrorBoundary>
          <Header
            currentLocale={props.currentLocale}
            onLocaleChange={props.setLocale}
          />
        </ErrorBoundary>
        <div className="gitexContainer" id="app-view-container">
          <ErrorBoundary>
            <AppRoutes />
          </ErrorBoundary>
        </div>
      </div>
    </Router>
  );
};

const mapStateToProps = ({ locale }: IRootState) => ({
  currentLocale: locale.currentLocale,
});

const mapDispatchToProps = { setLocale };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(hot(module)(App));
