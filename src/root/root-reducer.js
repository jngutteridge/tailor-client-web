import { combineReducers } from "redux";
import loginReducer from "../login/login-reducer";
import textReducer from "../text/text-reducer";
import appReducer from "../app/app-reducer";
import managerReducer from "../manager/manager-reducer";

export const rootReducer = combineReducers({
    login: loginReducer,
    text: textReducer,
    app: appReducer,
    ...managerReducer
});