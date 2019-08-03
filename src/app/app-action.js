export const APP_LOADING = "APP_LOADING";
export const APP_LOADING_DONE = "APP_LOADING_DONE";
export const APP_ERROR = "APP_ERROR";

export const errorAction = (process, errorMessage) => ( { type: APP_ERROR, process, errorMessage } );
export const loadingAction = (process) => ( { type: APP_LOADING, process } );
export const loadingDoneAction = (process) => ( { type: APP_LOADING_DONE, process } );