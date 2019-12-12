import {createAction } from 'redux-actions';
//Catagory table view 
export const ITEM_REQUEST ="ITEM_REQUEST"
export const Catagoryrequest=createAction(ITEM_REQUEST);

export const ITEM_REQUEST_SUCCESS="ITEM_REQUEST_SUCCESS"
export const Catagorysucess=createAction(ITEM_REQUEST_SUCCESS); 

export const ITEM_REQUEST_FAIL="ITEM_REQUEST_FAIL"
export const Catagoryfail=createAction(ITEM_REQUEST_FAIL);
 
