import { LoginType } from '@/apis/userApi'
import { createSlice, PayloadAction} from '@reduxjs/toolkit'


export interface UserLoginInput{
    username: string,
    password: string
}

export interface LoginUser{
    username : string, password: string, email: string, name: string, tel:string,
    birth:string, userId?: number, address: string, token: any, roles: any 
    
}

export type LoginState = {
        data: LoginUser[]
        loginedUser: null,
        token: null,
        isLoggined: boolean,
        status: 'idle' | 'loading' | 'failed'
        error : null
    }

const initialState: LoginState = {
    data: [],
    loginedUser: null,
    token: null,
    isLoggined: false,
    status: 'idle',
    error : null
}

export const loginSlice = createSlice({
    name: 'loginSlice',
    initialState,
    reducers: {
        loginRequest(state, action: PayloadAction<UserLoginInput>){
            state.status = 'loading';
            console.log(`진행 : 로그인 데이터 ${JSON.stringify(state.data)}`)

        },

        loginSuccess(state, action: PayloadAction<LoginUser>){
            const newState = state.data.concat(action.payload)
            state.data = newState
            console.log(`진행 : 로그인 데이터 ${JSON.stringify(state.data)}`)
            state.status = 'idle'
            state.isLoggined = true
        },
        loginFailure(state, {payload: error}){
            state.status = 'failed'
            state.error = error
            
        }
    }
})
export const {loginRequest, loginSuccess, loginFailure
    } = loginSlice.actions;

const {reducer, actions} = loginSlice
export const loginActions = actions
export default reducer
