import { SyntheticEvent, useState } from 'react'
import { Box, Text, Flex,  Input, Button } from '@chakra-ui/react'
import Link from 'next/link'
import axios from 'axios'

function FileUploadResult5() {
    const [ img, setImg ] = useState('')

    const imgset = '/j/4.png'
    
    const url = 'http://127.0.0.1:8000/images/upload'
    //axios.post(url, '/image_save/iu.jpg')
    axios.post(url, {name: "C:/Users/bitcamp/EI/mibot-front/public/image_save/iu.jpg"})
    
    return (
        <>
        <h1>5. 최종 결과 이미지 선택</h1>
        <div>
            <img src={imgset} width={500} height={500}/>
        </div>
        
        <input/><br/>
        <input/>
        <Button><Link href="/menu/services/fileuploadresult6"><a>select &raquo;</a></Link></Button><br/>
        </>
    )
}

export default FileUploadResult5