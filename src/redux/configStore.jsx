import {createStore,combineReducers} from 'redux';

const rootReducer = combineReducers({
    //Noi chua cac state cua ung dung
    number: (state = 1) =>{
        return state;
    }
});

export const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());