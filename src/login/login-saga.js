import { call, put } from "redux-saga/effects";
import axios from "axios";
import {
    USER_LOGOUT,
    USER_REGISTER,
    USER_LOGIN_RETRIEVE,
    userLoggedOutAction,
    userRegisteredAction,
    userLoggedInAction, USER_LOGIN
} from "./login-action";
import { errorAction, loadingAction, loadingDoneAction } from "../app/app-action";

export function* login() {
    yield put(loadingAction(USER_LOGIN));
    window.location = '/login?provider=facebook';
}

export function* getLoginUser() {
    yield put(loadingAction(USER_LOGIN_RETRIEVE));
    try {
        const userResponse = yield call(axios.get, '/api/login/register');
        yield put(userLoggedInAction(userResponse.data));
        yield put(loadingDoneAction(USER_LOGIN_RETRIEVE));
    } catch (e) {
        const errorMessage = e.response.data.ErrorMessage;
        yield put(errorAction(USER_LOGIN_RETRIEVE, errorMessage));
    }
}

export function* registerUser() {
    yield put(loadingAction(USER_REGISTER));
    try {
        const registrationResponse = yield call(axios.put, '/api/login/register');
        yield put(userRegisteredAction(registrationResponse.data.VerificationCode));
        yield put(loadingDoneAction(USER_REGISTER));
    } catch (e) {
        const errorMessage = e.response.data.ErrorMessage;
        yield put(errorAction(USER_REGISTER, errorMessage));
    }
}

export function* logout() {
    yield put(loadingAction(USER_LOGOUT));
    try {
        yield call(axios.delete, '/api/logout');
        yield put(userLoggedOutAction());
        yield put(loadingDoneAction(USER_LOGOUT));
    } catch (e) {
        const errorMessage = e.response.data.ErrorMessage;
        yield put(errorAction(USER_LOGOUT, errorMessage));
    }
}