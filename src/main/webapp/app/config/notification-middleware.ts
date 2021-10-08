import { isPromise, translate } from 'react-jhipster';
import { toast } from 'react-toastify';

const addErrorAlert = (message, key?, data?) => {
  key = key ? key : message;
  toast.error(translate(key, data));
};
export default () => next => action => {
  // If not a promise, continue on
  if (!isPromise(action.payload)) {
    return next(action);
  }

  /**
   *
   * The notification middleware serves to dispatch the initial pending promise to
   * the promise middleware, but adds a `then` and `catch.
   */
  return next(action)
    .then(response => {
      if (action.meta && action.meta.successMessage) {
        toast.success(action.meta.successMessage);
      } else if (response && response.action && response.action.payload && response.action.payload.headers) {
        const headers = response.action.payload.headers;
        let alert: string | null = null;
        let alertParams: string | null = null;
        Object.entries<string>(headers).forEach(([k, v]) => {
          if (k.toLowerCase().endsWith('app-alert')) {
            alert = v;
          } else if (k.toLowerCase().endsWith('app-params')) {
            alertParams = decodeURIComponent(v.replace(/\+/g, ' '));
          }
        });
        if (alert) {
          const alertParam = alertParams;
          toast.success(translate(alert, { param: alertParam }));
        }
      }
      return Promise.resolve(response);
    })
    .catch(error => {
      if (action.meta && action.meta.errorMessage) {
        toast.error(action.meta.errorMessage);
      } else if (error && error.response) {
        const response = error.response;
        const data = response.data;
        if (!(response.status === 401)) {
          let i;
          switch (response.status) {
            // connection refused, server not reachable
            case 0:
              break;

            case 400: {
              break;
            }
            case 404:
              break;

            default:
              if (data !== '' && data.message) {
                addErrorAlert(data.message);
              } else {
                addErrorAlert(data);
              }
          }
        }
      }
      return Promise.reject(error);
    });
};
