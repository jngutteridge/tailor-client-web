import { APP_LOADING, APP_LOADING_DONE, APP_ERROR } from "./app-action";

const appReducer = (state = { process: {}, loading: false }, action) => {
    if (action.type === APP_ERROR) {
        console.log(`Error caught: ${action.process} - ${action.errorMessage}`);
    }
    switch (action.type) {
        case APP_ERROR:
        case APP_LOADING:
        case APP_LOADING_DONE:
            const process = { ...state.process };
            process[ action.process ] = action.type;
            for (const p in process) {
                if (process[p] === APP_LOADING) {
                    return { ...state, process, loading: true };
                }
            }
            return { ...state, loading: false, process };
        default:
            return state;
    }
};

export default appReducer;