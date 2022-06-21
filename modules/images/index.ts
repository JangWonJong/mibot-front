import { createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import { string } from 'prop-types';
import { AppState } from '../store'

export interface Image {
    username:string, image:string
}

export interface ImageState{
    data: Image[]
    status: 'idle' | 'loading' | 'failed'
}

const initialState: ImageState = {
    data: [],
    status: 'idle'
}

export const imageSlice = createSlice({
    name: 'imageSlice',
    initialState,
    reducers:{
        joinRequest(state: ImageState, {payload}){
            state.status = 'loading';
            
        },
        joinSuccess(state: ImageState, {payload}){
            state.status = 'idle'
            state.data = [...state.data, payload]
            alert(`진행 : 이미지 데이터 ${state.data}`)
        },
        joinFailure(state: ImageState, {payload}){
            state.status = 'failed'
            state.data = payload
        }
        
    }
})

export const { joinRequest, joinSuccess, joinFailure } = imageSlice.actions;

const {reducer, actions} = imageSlice
export const imageActions = actions
export default reducer