
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

const GanPage: NextPage = () => {
  
  const [images, setImages] = useState([])
  //const [sort, setSort] = useState<InputImage>({name:'', lastModified: 0, lastModifiedDate: 0, type: '', webkitRelativePath: '', size: 0})
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
    dispatch(imageUpload(images[0]))         
        
  }
  
  return (
      <div>
          <Gan onChange = {onLoadFile}  onSubmit = {onSubmitFile}/>
      </div>
  )
}

export default GanPage