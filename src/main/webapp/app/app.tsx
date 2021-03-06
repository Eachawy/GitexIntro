import 'react-toastify/dist/ReactToastify.css';
import './app.scss';

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { hot } from 'react-hot-loader';

import { IRootState } from 'app/shared/reducers';
import { setLocale } from 'app/shared/reducers/locale';
import Header from 'app/shared/layout/header/header';
import ErrorBoundary from 'app/shared/error/error-boundary';
import AppRoutes from 'app/routes';
import $ from 'jquery';

const baseHref = document.querySelector('base').getAttribute('href').replace(/\/$/, '');

export interface IAppProps extends StateProps, DispatchProps { }

export const App = (props: IAppProps) => {

  const [video, setVideo] = React.useState(false);



  useEffect(() => {
    $('html').on("mousemove", (event: any) => {
      $('.screenSever').fadeOut();
      setVideo(false);
    });
    $('html').on("keypress", (event: any) => {
      $('.screenSever').fadeOut();
      setVideo(false);
    });
    $('html').on("touchend", (event: any) => {
      $('.screenSever').fadeOut();
      setVideo(false);
    });
  }, []);


  const openScreenServer = (e) => {
    setVideo(true);
    $('.screenSever').fadeIn();
  }

  return (
    <Router basename={baseHref}>
      <div className="contentView">
        <ToastContainer position={toast.POSITION.TOP_LEFT} className="toastify-container" toastClassName="toastify-toast" />
        <ErrorBoundary>
          <Header
            currentLocale={props.currentLocale}
            onLocaleChange={props.setLocale}
            onClickRTALogo={openScreenServer}
          />
        </ErrorBoundary>
        <div className="gitexContainer" id="app-view-container">
          <ErrorBoundary>
            <AppRoutes />
          </ErrorBoundary>
        </div>
        <div className="screenSever">
          {
            video &&
            <video width="100%" height="100%" autoPlay muted loop>
              <source src="../content/Videos/video_ar_en.mp4" type="video/mp4" />
            </video>
          }
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
