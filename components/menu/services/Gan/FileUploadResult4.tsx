import { SyntheticEvent, useState } from 'react'
import { Box, Text, Flex,  Input, Button } from '@chakra-ui/react'
import Link from 'next/link'
import axios from 'axios'

function FileUploadResult4() {
    const [ img, setImg ] = useState('')

    const imgset = '/j/3.jpg'
    const imgset2 = '/j/2.png'
    const url = 'http://127.0.0.1:8000/images/upload'
    //axios.post(url, '/image_save/iu.jpg')
    axios.post(url, {name: "C:/Users/bitcamp/EI/mibot-front/public/image_save/iu.jpg"})
    
    return (
        <>
        <h1>4. 합성할 이미지 확인</h1>
        <div>
            <img src={imgset2} width={300} height={300}/>
            <img src={imgset} width={300} height={300}/>

        </div>
        <Button><Link href="/menu/services/fileuploadresult5"><a>check &raquo;</a></Link></Button>

        </>
    )
}

export default FileUploadResult4