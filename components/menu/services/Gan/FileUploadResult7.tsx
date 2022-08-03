import { SyntheticEvent, useState } from 'react'
import { Box, Text, Flex,  Input, Button } from '@chakra-ui/react'
import Link from 'next/link'
import axios from 'axios'
function FileUploadResult7() {
    const [ img, setImg ] = useState('')

    const imgset = '/j/6.gif'
    
    const url = 'http://127.0.0.1:8000/images/upload'
    //axios.post(url, '/image_save/iu.jpg')
    axios.post(url, {name: "C:/Users/bitcamp/EI/mibot-front/public/image_save/iu.jpg"})
    
    return (
        <>
        <h1>7. 모션화 </h1>
        <div>
            <img src={imgset} width={500} height={500}/>
        </div>
        
         <Button><Link href="/menu/services/fileupload"><a>다시 선택 &raquo;</a></Link></Button>
         <Button><Link href="/menu/services/chatbot"><a>대화시작 &raquo;</a></Link></Button>
        </>
    )
}

export default FileUploadResult7