import { createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'

import { AppState } from '../store'

export interface ImageInput{
    username:string, image:string
}

export interface Image {
    username:string, image:string
}

export interface ImageState{
    data: Image[]
    status: 'idle' | 'loading' | 'failed'
    error : null
}

const initialState: ImageState = {
    data: [],
    status: 'idle',
    error: null
}

export const imageSlice = createSlice({
    name: 'imageSlice',
    initialState,
    reducers:{
        imageUpload(state, action: PayloadAction<ImageInput>){
            state.status = 'loading';
            console.log(`업로드 이미지 ${JSON.stringify(state.data)}`)
            
        },
        uploadSuccess(state, action: PayloadAction<Image>){
            const newState = state.data.concat(action.payload)
            state.status = 'idle'
            state.data = [...state.data, action.payload]
            alert(`진행 : 이미지 데이터 ${state.data}`)
        },
        uploadFailure(state: ImageState, {payload}){
            state.status = 'failed'
            state.data = payload
        }
        
    }
})

export const { imageUpload, uploadSuccess, uploadFailure } = imageSlice.actions;

const {reducer, actions} = imageSlice
export const imageActions = actions
export default reducer