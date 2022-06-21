import { AnyAction, CombinedState, combineReducers,  configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import logger from 'redux-logger'
import { HYDRATE } from 'next-redux-wrapper';
import { ImageState } from './images';
import { VoiceState } from './voices';
import { UserState } from './users';
import voiceReducer from './voices'
import imageReducer from './images'


import rootSaga from '@/sagas';
import createSagaMiddleware from '@redux-saga/core'
const isDev = process.env.NODE_ENV ==='development'
const sagaMiddleware = createSagaMiddleware()

interface RootStates {
	image: ImageState;
    voice: VoiceState;
    user: UserState;
    
}
const rootReducer = (
	state: RootStates,
    action: AnyAction
) => {
    if(action.type === HYDRATE) {
        return{
            ...state, ...action.payload
        }
    }
    return combineReducers({
        voice: voiceReducer,        
        image: imageReducer        
    })(state,action)
}

const makeStore = () =>{
    const store = configureStore({
        reducer:{ rootReducer },
        middleware: (getDefaultMiddleware) =>
        isDev? getDefaultMiddleware().concat(logger, sagaMiddleware) : getDefaultMiddleware(),
        devTools :isDev
    });
    sagaMiddleware.run(rootSaga)
    return store
}
export const wrapper = createWrapper(makeStore, {
    debug: isDev})

const store = makeStore();
export type RootState = ReturnType<typeof rootReducer>
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;