
import Gan from '@/components/menu/services/Gan'
import React, { useEffect, useState } from 'react'
import { NextPage } from 'next'
import axios, { AxiosResponse } from 'axios'
import { InputImage } from '@/modules/types'
import { imageUpload } from '@/modules/slices/image'
import { useAppDispatch } from '@/hooks'

const SERVER = 'http://127.0.0.1:8080'

export type Props = {
  onChange : (e: any) => void
  onSubmit : (e: any) => void 
}

const headers = {
  "Content-Type" : "multipart/form-data",
  Authorization: "JWT fefege...",
}

const GanPage: NextPage = () => {
  
  const [images, setImages] = useState<Array<Blob>>([])
  const [sort, setSort] = useState<InputImage>({imageId: 0, imageName:'', images:'', size:0})
  const dispatch = useAppDispatch()
  const onLoadFile = (e: any) => {
    e.preventDefault()
    const file = e.target.files
    setImages(file)
  }
  const onSubmitFile = async (e: any) => {
    e.preventDefault()
    const picture = new FormData()
      for (let i in images){
        picture.append('uploadImage', images[i])
      }
    console.log((images[0]))

    const res = await axios.post(`${SERVER}/images/image`, picture, {headers})
    const image = res.data
    setSort({ imageId : res.data.imageId,
            imageName : res.data.imageName,
            images : res.data.image,
            size : res.data.size})

    console.log(JSON.stringify(res.data))
    if(image !== null) {
      dispatch(imageUpload(sort))
    } else {
      alert('사진을 다시 등록 해주세요.')
    }
    
  }
  
  return (
      <div>
          <Gan onChange = {onLoadFile}  onSubmit = {onSubmitFile}/>
      </div>
  )
}

export default GanPage