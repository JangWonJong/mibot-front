import { createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {  ImageState, InputImage  } from '../types'
import { AppState } from '../store'


const initialState: ImageState = {
    data: { imageId: 0, imageName: '', images: '', size: 0},
    status: "loading"
}

const imageSlice = createSlice({
    name: 'imageSlice',
    initialState,
    reducers:{
        imageUpload : (state, action: PayloadAction<InputImage>) => {
            state.data = action.payload
            state.status = 'loading'
            
        },
        uploadSuccess: (state, action: PayloadAction<InputImage>) => {
           
            state.data = action.payload
            state.status = 'successed'
        },
        uploadFailure : (state, action) => {
            state.data = action.payload
            state.status = 'failed'
        }
        
    }
})

export const { imageUpload, uploadSuccess, uploadFailure } = imageSlice.actions;

const {reducer, actions} = imageSlice
export const imageActions = actions
export default reducer