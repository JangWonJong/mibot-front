import { AnyAction, CombinedState, combineReducers,  configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import logger from 'redux-logger'
import { HYDRATE } from 'next-redux-wrapper';
import { ImageState } from './images';
import { VoiceState } from './voices';
import userReducer, { UserState } from './users/join';
import voiceReducer from './voices'
import imageReducer from './images'
import rootSaga from '@/sagas';
import createSagaMiddleware from '@redux-saga/core'
import loginReducer, { LoginState } from './users/login';

const isDev = process.env.NODE_ENV ==='development'
const sagaMiddleware = createSagaMiddleware()
/** 
interface RootStates {
	image: ImageState;
    voice: VoiceState;
    user: UserState;
    login: LoginState;
    
}
*/

const combinedReducers = combineReducers({
    user : userReducer,
    login: loginReducer
})

const rootReducer = (
	state: ReturnType<typeof combinedReducers>,
    action: AnyAction
) => {
    if(action.type === HYDRATE) {
        return{
            ...state, ...action.payload
        }
    } else{
    return combinedReducers (state,action)      
    }    
}


const makeStore = () =>{
    const store = configureStore({
        reducer:{
             rootReducer 
            },
        middleware: (getDefaultMiddleware) =>
        //직렬화 문제 발생 시 {serializableCheck: false} 파라미터로 전달
        getDefaultMiddleware()
            .prepend(sagaMiddleware)
            .concat(logger) ,
        devTools :isDev
    });
    sagaMiddleware.run(rootSaga)
    return store
}

export const wrapper = createWrapper(makeStore, {debug: isDev})
const store = makeStore();
export type AppState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export default store;