import { PayloadAction } from '@reduxjs/toolkit'
import { call, put, takeLatest, takeLeading, takeEvery } from 'redux-saga/effects'
import {  imageActions } from '@/modules/slices/image';
import { Image } from '../types'
import {AxiosResponse } from 'axios'
import { addImage } from '../apis/image'

function* addImageSaga ( action : {payload : Image}) {
    const {uploadSuccess, uploadFailure} = imageActions
    const param = action.payload
    try{
        const response: Image = yield call(addImage, param)
        yield put(uploadSuccess(response))
    } catch(error) {
        yield put(uploadFailure(error))
    }
}

export function* watchAddImage(){
    yield takeLatest(imageActions.imageUpload, addImageSaga)
}