import { takeLatest, fork, all, put, call } from 'redux-saga/effects';
import {CatagoryAction} from '../Actions/index';
import {get} from '../Api/api';
function* Catagoryrequest(){
    console.log("haiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
    const catagoryresponse = yield call(get);
    const response=catagoryresponse.response;
    console.log('hjjj',catagoryresponse);
        yield put(CatagoryAction.Catagorysucess(response))
    
}
export default function* CatagorySaga(){
    yield takeLatest(CatagoryAction.ITEM_REQUEST, Catagoryrequest);
    
}

