import { SyntheticEvent, useState } from 'react'
import { Box, Text, Flex,  Input, Button } from '@chakra-ui/react'
import Link from 'next/link'
import axios from 'axios'

function Step1() {
    //const [ img, setImg ] = useState('')
    const imgset = '/j/1.png'
    //const url = 'http://127.0.0.1:8000/images/upload'
    //axios.post(url, '/image_save/iu.jpg')
    //axios.post(url, {name: "C:/Users/bitcamp/EI/mibot-front/public/image_save/iu.jpg"})
    
    return (
        <>
        <div>
        <h1>1. 업로드 이미지 확인</h1>
        </div>
        <div>
            <img src={imgset} width={400} height={500}/>
        </div>
        
        <Button><Link href="/menu/services/imageprocess/step2"><a>Face detection &raquo;</a></Link></Button>

        </>
    )
}

export default Step1