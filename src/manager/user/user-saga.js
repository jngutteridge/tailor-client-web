import { errorAction, loadingAction, loadingDoneAction } from "../../app/app-action";
import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { USER_INDEX_RETRIEVE, USER_RETRIEVE, userIndexRetrievedAction, userRetrievedAction } from "./user-action";

export const userSaga = [
    takeEvery(USER_INDEX_RETRIEVE, getUserIndex),
    takeEvery(USER_RETRIEVE, getUser)
];

export function* getUserIndex() {
    yield put(loadingAction(USER_INDEX_RETRIEVE));
    try {
        const userIndexResponse = yield call(axios.get, '/api/user/index');
        yield put(userIndexRetrievedAction(userIndexResponse.data.Users));
        yield put(loadingDoneAction(USER_INDEX_RETRIEVE));
    } catch (e) {
        const errorMessage = e.response.data.ErrorMessage;
        yield put(errorAction(USER_INDEX_RETRIEVE, errorMessage));
    }
}

export function* getUser(action) {
    yield put(loadingAction(USER_RETRIEVE));
    try {
        const email = action.email;
        const userResponse = yield call(axios.get, '/api/user', { params: { email } });
        const user = userResponse.data;
        yield put(userRetrievedAction(user));
        yield put(loadingDoneAction(USER_RETRIEVE));
    } catch (e) {
        const errorMessage = e.response.data.ErrorMessage;
        yield put(errorAction(USER_RETRIEVE, errorMessage));
    }
}