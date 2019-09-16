import {
  SELECTEDBRAND,
  SELECTEDMODEL,
  SELECTEDISSUE,
  DELETESELECTEDBRAND,
  DELETESELECTEDMODEL,
  DELETESELECTEDISSUE,
  ALLFIX,
  ALLMODELS
} from '../actions/types';

const initialState = {
  brands: null,
  selectedBrand: null,
  selectedModels: null,
  selectedModel: null,
  selectedIssue: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SELECTEDBRAND:
      return {
        ...state,
        selectedBrand: payload,
        loading: false
      };
    case SELECTEDMODEL:
      return {
        ...state,
        selectedModel: payload,
        loading: false
      };
    case SELECTEDISSUE:
      return {
        ...state,
        selectedIssue: payload,
        loading: false
      };
    case DELETESELECTEDBRAND:
      return {
        ...state,
        selectedBrand: null,
        selectedModels: null,
        loading: false
      };
    case DELETESELECTEDMODEL:
      return {
        ...state,
        selectedModel: null,
        selectedModels: null,
        loading: false
      };
    case DELETESELECTEDISSUE:
      return {
        ...state,
        selectedIssue: null,
        selectedModels: null,
        loading: false
      };
    case ALLFIX:
      return {
        ...state,
        brands: payload,
        loading: false
      };
    case ALLMODELS:
      return {
        ...state,
        selectedModels: payload,
        loading: false
      };

    default:
      return state;
  }
}
