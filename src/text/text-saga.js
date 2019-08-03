import { call, put } from "redux-saga/effects";
import axios from "axios";
import { TEXT_RETRIEVE, textRetrievedAction } from "./text-action";
import { errorAction, loadingAction, loadingDoneAction } from "../app/app-action";
import * as showdown from "showdown";


export function* getText() {

    yield put(loadingAction(TEXT_RETRIEVE));
    try {
        const textResponse = yield call(axios.get, '/api/text');
        const converter = new showdown.Converter();
        const text = {};
        for (const t of textResponse.data.text) {
            text[ t.slug ] = converter.makeHtml(t.text);
        }
        yield put(textRetrievedAction(text));
        yield put(loadingDoneAction(TEXT_RETRIEVE));
    } catch (e) {
        const errorMessage = e.response.data.ErrorMessage;
        yield put(errorAction(TEXT_RETRIEVE, errorMessage));
    }
}