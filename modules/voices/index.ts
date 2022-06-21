import { createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import { string } from 'prop-types';
import { AppState } from '../store'

export interface Voice {
    username:string, voice:string
}

export interface VoiceState{
    data: Voice[]
    status: 'idle' | 'loading' | 'failed'
}

const initialState: VoiceState = {
    data: [],
    status: 'idle'
}

export const voiceSlice = createSlice({
    name: 'voiceSlice',
    initialState,
    reducers:{
        joinRequest(state: VoiceState, {payload}){
            state.status = 'loading';
            
        },
        joinSuccess(state: VoiceState, {payload}){
            state.status = 'idle'
            state.data = [...state.data, payload]
            alert(`진행 : 음성 데이터 ${state.data}`)
        },
        joinFailure(state: VoiceState, {payload}){
            state.status = 'failed'
            state.data = payload
        }
        
    }
})

export const { joinRequest, joinSuccess, joinFailure } = voiceSlice.actions;

const {reducer, actions} = voiceSlice
export const voiceActions = actions
export default reducer