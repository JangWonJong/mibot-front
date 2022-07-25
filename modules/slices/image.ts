import { createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import { ImageInput, Image, ImageState } from '../types'
import { AppState } from '../store'


const initialState: ImageState = {
    data: {picture: undefined, image:{item: '', color: ''}},
    status: "loading"
}

const imageSlice = createSlice({
    name: 'imageSlice',
    initialState,
    reducers:{
        imageUpload : (state, action: PayloadAction<Image>) => {
            state.data = action.payload
            state.status = 'loading'
        },
        uploadSuccess: (state, action: PayloadAction<Image>) => {
           
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