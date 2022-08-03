import { SyntheticEvent, useState } from 'react'
import { Box, Text, Flex,  Input, Button } from '@chakra-ui/react'
import Link from 'next/link'
import axios from 'axios'


function FileUploadResult2() {
    const [ img, setImg ] = useState('')

    const imgset = '/j/2.png'
    const url = 'http://127.0.0.1:8000/images/upload'
    //axios.post(url, '/image_save/iu.jpg')
    axios.post(url, {name: "C:/Users/bitcamp/EI/mibot-front/public/image_save/iu.jpg"})
    
    return (
        <>
        <h1>2. 얼굴 인식 결과</h1>
        <div>
            <img src={imgset} width={500} height={500}/>
        </div>
        
        <Button><Link href="/menu/services/fileuploadresult3"><a>확인 &raquo;</a></Link></Button>
        
        </>
    )
}

export default FileUploadResult2