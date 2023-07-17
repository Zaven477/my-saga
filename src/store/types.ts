export interface INews {
  by: string;
  descendants: number;
  id: number;
  kids?: number[];
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
}


export interface IDataState {
    news: INews[];
    loading: boolean;
    error: string | null;
  }
  
  export enum DataActionTypes {
    FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST',
    FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS',
    FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE',
  }
  
  interface FetchDataRequestAction {
    type: typeof DataActionTypes.FETCH_DATA_REQUEST;
  }
  
  interface FetchDataSuccessAction {
    type: typeof DataActionTypes.FETCH_DATA_SUCCESS;
    payload: INews[];
  }
  
  interface FetchDataFailureAction {
    type: typeof DataActionTypes.FETCH_DATA_FAILURE;
    payload: string;
  }
  
  export type DataAction =
    | FetchDataRequestAction
    | FetchDataSuccessAction
    | FetchDataFailureAction;
  

    