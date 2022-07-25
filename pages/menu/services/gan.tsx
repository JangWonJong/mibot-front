
import Gan from '@/components/menu/services/Gan'
import React, { useEffect, useState } from 'react'
import { NextPage } from 'next'
import axios from 'axios'

export type Props = {
  onChange : (e: any) => void
  onSubmit : (e: any) => void 
}

const headers = {
  "Content-Type" : "multipart/form-data",
  //Authorization: "JWT fefege...",
}

const GanPage: NextPage = () => {
  
  const [images, setImages] = useState('')
  const onLoadFile = (e: any) => {
    e.preventDefault()
    const file = e.target.files
    console.log(file)
    setImages(file)
  }
  const onSubmitFile = async (e: any) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('uploadImage', images[0])
    console.log('>>' + formData)
    const res = await axios.post(`http://127.0.0.1:8000/images/`, formData, {headers})
  }
  
  return (
      <div>
          <Gan onChange = {onLoadFile}  onSubmit = {onSubmitFile}/>
      </div>
  )
}

export default GanPage