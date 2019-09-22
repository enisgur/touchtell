import axios from 'axios';
import {
  axiosURL,
  SELECTEDBRAND,
  SELECTEDMODEL,
  SELECTEDISSUE,
  DELETESELECTEDBRAND,
  DELETESELECTEDMODEL,
  DELETESELECTEDISSUE,
  ALLFIX,
  ALLMODELS,
  GETDATE
} from './types';

// SET AXIOS PROXY BASEURL
axios.defaults.baseURL = axiosURL;

export const getDate = () => async dispatch => {
  try {
    const res = await axios.get('/date');
    // var returnDate = await res.data.date;
    // console.log(res.data.date);

    dispatch({
      type: GETDATE,
      payload: res.data.date
    });
  } catch (err) {
    console.log(err);
  }
};

export const getSelectedBrand = brand => async dispatch => {
  try {
    dispatch({
      type: SELECTEDBRAND,
      payload: brand
    });
  } catch (err) {
    console.log(err);
  }
};

export const getSelectedModel = model => async dispatch => {
  try {
    dispatch({
      type: SELECTEDMODEL,
      payload: model
    });
  } catch (err) {
    console.log(err);
  }
};

export const getSelectedIssue = issue => async dispatch => {
  try {
    dispatch({
      type: SELECTEDISSUE,
      payload: issue
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteSelectedBrand = () => async dispatch => {
  try {
    dispatch({
      type: DELETESELECTEDBRAND
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteSelectedModel = () => async dispatch => {
  try {
    dispatch({
      type: DELETESELECTEDMODEL
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteSelectedIssue = () => async dispatch => {
  try {
    dispatch({
      type: DELETESELECTEDISSUE
    });
  } catch (err) {
    console.log(err);
  }
};

export const getAllBrand = () => async dispatch => {
  try {
    const res = await axios.get('/api/fix');

    dispatch({
      type: ALLFIX,
      payload: res.data
      // payload: brend
    });
  } catch (err) {
    console.log(err);
  }
};

export const getAllModels = model => async dispatch => {
  try {
    const res = await axios.get(`/api/fix/${model}`);

    dispatch({
      type: ALLMODELS,
      payload: res.data
      // payload: brend
    });
  } catch (err) {
    console.log(err);
  }
};

// export const getAllBrand = () => dispatch => {
//   try {
//     dispatch({
//       type: ALLFIX
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };
