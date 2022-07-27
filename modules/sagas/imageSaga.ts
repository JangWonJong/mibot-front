import { PayloadAction } from '@reduxjs/toolkit'
import { call, put, takeLatest, takeLeading, takeEvery } from 'redux-saga/effects'
import {  imageActions, uploadSuccess } from '@/modules/slices/image';
import {AxiosResponse } from 'axios'
import { addImage } from '../apis/image'


interface InputImage{
    type: string
    payload:{
        imageId : number,
        imageName : string,
        images : string,
        size : number
    }
}

// saga까지 진행 안됨 
function* addImagesSaga(image: InputImage){
    try{
        console.log(' 3.  saga내부 upload 성공  '+ JSON.stringify(image))
        const response: any = addImage(image.payload)
        yield put(uploadSuccess(response.payload))
        window.location.href = ('/')
    }catch(error){
        yield put(imageActions.uploadFailure(error))
    }
}

/**
function* addImageSaga ( action : {payload : InputImage}) {
    const {uploadSuccess, uploadFailure} = imageActions
    const param = action.payload
    try{
        const response: InputImage = yield call(addImage, param)
        yield put(uploadSuccess(response))
    } catch(error) {
        yield put(uploadFailure(error))
    }
}
*/
export function* watchAddImage(){
    yield takeLatest(imageActions.imageUpload, addImagesSaga)
}