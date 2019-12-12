import {CatagoryAction} from '../Actions/index'

const intialState = {
    itemResponse:[],
    error:'',
};

export default function  (state = intialState, action) {
    switch (action.type) {
        case CatagoryAction.ITEM_REQUEST:
            return {
                ...state
            }
        case CatagoryAction.ITEM_REQUEST_SUCCESS:
            return {
                ...state,
                itemResponse:action.payload
                
            }
        case CatagoryAction.ITEM_REQUEST_FAIL:
            return {
                ...state,
                error:action.payload.error
            }
            default:
                return {
                    ...state
                }
    }
}