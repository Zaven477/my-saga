
import { IDataState, DataActionTypes, DataAction } from './types';

const initialState: IDataState = {
  news: [],
  loading: false,
  error: null,
};

const dataReducer = (state = initialState, action: DataAction): IDataState => {
  switch (action.type) {
    case DataActionTypes.FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case DataActionTypes.FETCH_DATA_SUCCESS:
      return {
        ...state,
        news: action.payload,
        loading: false,
        error: null,
      };
    case DataActionTypes.FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
