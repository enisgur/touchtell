import axios from 'axios';
import {
  GET_ALLPRODUCTS,
  SEARCH_PRODUCTS,
  SEARCH_PRODUCT_CATEGORY,
  CLEAR_PRODUCTS,
  SEARCHING
} from './types';

export const getAllProducts = () => async dispatch => {
  try {
    const res = await axios.get('/api/products');

    dispatch({
      type: GET_ALLPRODUCTS,
      payload: res.data
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: CLEAR_PRODUCTS
    });
  }
};

export const searchProducts = search => async dispatch => {
  try {
    const res = await axios.get(`/api/products/name/${search}`);

    dispatch({
      type: SEARCH_PRODUCTS,
      payload: res.data
    });
  } catch (err) {
    console.log(err);

    dispatch({
      type: CLEAR_PRODUCTS
    });
  }
};

export const searchCategory = search => async dispatch => {
  try {
    const res = await axios.get(`/api/products/category/${search}`);

    dispatch({
      type: SEARCH_PRODUCT_CATEGORY,
      payload: res.data
    });
  } catch (err) {
    console.log(err);

    dispatch({
      type: CLEAR_PRODUCTS
    });
  }
};

export const clearProducts = () => async dispatch => {
  try {
    dispatch({
      type: CLEAR_PRODUCTS,
      payload: null
    });
  } catch (err) {
    console.log(err);
    // TODO dispatch error
  }
};

export const searching = () => async dispatch => {
  try {
    dispatch({
      type: SEARCHING,
      payload: null
    });
  } catch (err) {
    console.log(err);
    // TODO dispatch error
  }
};