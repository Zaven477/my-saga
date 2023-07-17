
import { DataActionTypes, DataAction, INews } from './types';

export const fetchDataRequest = (): DataAction => ({
  type: DataActionTypes.FETCH_DATA_REQUEST,
});

export const fetchDataSuccess = (news: INews[]): DataAction => ({
  type: DataActionTypes.FETCH_DATA_SUCCESS,
  payload: news,
});

export const fetchDataFailure = (error: string): DataAction => ({
  type: DataActionTypes.FETCH_DATA_FAILURE,
  payload: error,
});
