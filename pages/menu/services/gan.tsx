
import Gan from '@/components/menu/services/Gan'
import React, { useEffect, useState } from 'react'
import { NextPage } from 'next'
import axios from 'axios'
import { Image } from '@/modules/types'
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
  
  const [images, setImages] = useState([])
  const [sort, setSort] = useState<Image>({imageId : 0,
                                          imageName : '',
                                          image : '',
                                           size : 0})
  const dispatch = useAppDispatch()
  const onLoadFile = (e: any) => {
    e.preventDefault()
    const file = e.target.files
    console.log(file)
    setImages(file)
  }
  const onSubmitFile = async (e: any) => {
    e.preventDefault()
    const picture = new FormData()
    picture.append('uploadImage', images[0])

    console.log('>>' + picture)
    console.log(JSON.stringify(images[0]))

    const res = await axios.post(`${SERVER}/images/image`, picture, {headers})
    const image = res.data
    setSort({ imageId : res.data.imageId,
            imageName : res.data.imageName,
            image : res.data.image,
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