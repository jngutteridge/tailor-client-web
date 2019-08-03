import { all, takeEvery } from "redux-saga/effects";
import { USER_LOGIN, USER_LOGIN_RETRIEVE, USER_LOGOUT, USER_REGISTER } from "../login/login-action";
import { TEXT_RETRIEVE } from "../text/text-action";
import { getLoginUser, login, logout, registerUser } from "../login/login-saga";
import { getText } from "../text/text-saga";
import { managerSaga } from "../manager/manager-saga";

export default function* rootSaga() {
    yield takeEvery(USER_LOGIN_RETRIEVE, getLoginUser);
    yield takeEvery(USER_REGISTER, registerUser);
    yield takeEvery(TEXT_RETRIEVE, getText);
    yield takeEvery(USER_LOGOUT, logout);
    yield takeEvery(USER_LOGIN, login);
    yield all([ ...managerSaga ])
    ;
}