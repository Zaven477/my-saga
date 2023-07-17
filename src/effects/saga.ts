import { call, put, takeLatest } from "redux-saga/effects";
import { fetchDataSuccess, fetchDataFailure } from "../store/actions";
import { DataActionTypes, INews } from "../store/types";
import { fetchNews, fetchNewsId } from "../api";


function* fetchData(): Generator<any, void, INews[]> {
try {
  const response: any = yield call(fetchNews);
  const promise = response.map(async(id: number) => {
    return await fetchNewsId(id)
  })
  const result: INews[] = yield Promise.all(promise)
  yield put(fetchDataSuccess(result))
 } catch(error) {
  if(error instanceof Error) {
    yield put(fetchDataFailure(error.message))
  }
 }
  
}

export function* watchFetchData() {
  yield takeLatest(DataActionTypes.FETCH_DATA_REQUEST, fetchData);
}
