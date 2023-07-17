import { all } from "redux-saga/effects";
import { watchFetchData } from "./saga";

export default function* rootSaga() {
  yield all([watchFetchData()]);
}
