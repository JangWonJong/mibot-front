
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
  const [sort, setSort] = useState({picture: {}, image: {item: '', color: ''}})
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
    let variables = [{
      title: "title",
      content: "content"
    }]
    picture.append("data", new Blob([JSON.stringify(variables)], {type: "application?/json"}))
    const res = await axios.post(`${SERVER}/images/image`, picture, {headers})
    const image = res.data
    setSort({picture: picture, image: image})

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