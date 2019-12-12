import { fork, all } from 'redux-saga/effects';

import CatagorySaga from './CatagorySaga';
 
export default function* sagas(){
    yield all([fork(CatagorySaga)]);

}