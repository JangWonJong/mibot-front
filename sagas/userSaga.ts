import { PayloadAction } from '@reduxjs/toolkit'
import { call, delay, put, takeLatest } from 'redux-saga/effects'
// yarn add @redux-saga/is --dev , yarn add @types/redux, yarn add redux-saga
import { joinSuccess, userActions } from '@/modules/users/join';
import { loginActions, loginFailure, loginSuccess } from '@/modules/users/login';
import { LoginType ,userJoinApi, userLoginApi,} from '@/apis/userApi'
import {AxiosResponse } from 'axios'

interface UserJoinType{
    type: string;
    payload: {
        username:string, password:string, email:string, 
        name:string, tel:string, birth:string, address:string
    }
}
/**
interface UserLoginType{
    type: string;
    payload: {
        username:string, password:string
    }
}
interface UserLoginSuccessType{
    type: string;
    payload: {
        username:string, password: string
    }
}
 */
export interface LoginUser{
    username : string, password: string, email: string, name: string, tel:string,
    birth:string, userId?: number, address: string, token: any, roles: any
}

export interface UserLoginInput{
    username: string,
    password: string
}
export interface UserInput{
    username : string, password: string, email: string, name: string, tel:string,
    birth:string, userId?: number, address: string

}

function* join(action: {payload: UserInput}){
    const { joinSuccess, joinFailure } = userActions
    const param = action.payload
    try{
        alert(' 진행 3:  saga내부 join 성공  '+ JSON.stringify(param))
        const response: UserJoinType = yield call(userJoinApi, param) 
        yield put(joinSuccess(response.payload))
    }catch(error){
         alert(' 진행 3:  saga내부 join 실패  ') 
         yield put(joinFailure(error))
    }
}
function* login(action : {payload: UserLoginInput}){
    const {loginSuccess, loginFailure} = loginActions
    const param = action.payload
    try{
        alert(' 진행 3: saga내부 성공  '+ JSON.stringify(param))
        const response: LoginUser = yield call(userLoginApi, param)
        yield put(loginSuccess(response))
    }catch(error){
         alert('진행 3: saga내부 join 실패  ') 
         yield put(loginFailure(error))
    }
}
export function* watchJoin(){
    const { joinRequest } = userActions
    yield takeLatest(joinRequest, join)
}
export function* watchLogin(){
    const {loginRequest} = loginActions
    yield takeLatest(loginRequest, login)
}