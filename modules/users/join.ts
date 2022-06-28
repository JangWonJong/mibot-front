import { createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'

export interface UserInput{
    username : string, password: string, email: string, name: string, tel:string,
    birth:string, address: string
}


export interface User {
    username : string, password: string, email: string, name: string, tel:string,
    birth:string, address: string
}

export interface UserState{
    data: User[]
    status: 'idle' | 'loading' | 'failed'
    error : null
}

const initialState: UserState = {
    data: [],
    status: 'idle',
    error: null
}

//export declare function createSlice<State, CaseReducers extends SliceCaseReducers<State>
//, Name extends string = string>(options: CreateSliceOptions<State, CaseReducers, Name>): 
//Slice<State, CaseReducers, Name>;

export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers:{
        joinRequest(state, action : PayloadAction<UserInput>){
            state.status = 'loading';
            console.log(`진행4 : 회원가입 데이터 ${JSON.stringify(state.data)}`)
            
        },
        joinSuccess(state, action : PayloadAction<User>){
            const newState = state.data.concat(action.payload)
            state.data = newState
            state.status = 'idle'           
            alert(`진행5 : 회원가입 데이터 ${JSON.stringify(state.data)}`)
        },
        joinFailure(state, {payload: error}){
            state.status = 'failed'
            state.data = error
        }
        
    }
})

export const { joinRequest, joinSuccess, joinFailure } = userSlice.actions;

const {reducer, actions} = userSlice
export const userActions = actions
export default reducer