import { SyntheticEvent, useState } from 'react'
import axios from 'axios'


function FileUploadResult() {
    const [ img, setImg ] = useState('')

    const imgset = '/image_save/iu.jpg'
    const imgset2 = '/image_save/winter.jpg'
    const imgset3 = '/image_save/grid.png'
    const imgset4 = '/image_save/select.png'
    const imgset5 = '/image_save/change.png'
    const imgset6 = '/image_save/motion.gif'
    const url = 'http://127.0.0.1:8000/images/upload'
    //axios.post(url, '/image_save/iu.jpg')
    axios.post(url, {path: "/public/image_save/iu.jpg"})
    .then(function (response) {
         // response  
    }).catch(function (error) {
        // 오류발생시 실행
    }).then(function() {
        // 항상 실행
    });

    return (
        <>
        <div>
            <img src={imgset} width={500} height={500}/>
        </div>
        <style jsx>{`
            div {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
            }
        `}</style>
        </>
    )
}

export default FileUploadResult