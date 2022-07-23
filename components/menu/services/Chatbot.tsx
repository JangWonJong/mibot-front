import React from 'react'
import Button from '@mui/material/Button';

type Props = {
  userName: string
  name : string
}

const Chatbot = (props: Props) => {
  return (
    <div>
        <h3>챗봇과 채팅하기</h3>
        <table>
            <tbody>
                <tr>
                    <td>
                        <img style={{width: 500}} src = "https://www.korea.kr/newsWeb/resources/attaches/2022.02/07/CH2.jpg" alt='logo'/>
                    </td>
                </tr>
                <label><input /></label>
                <label><input type = "submit" value="입력창"/></label>
            </tbody>
        </table>
    </div>
    
  )
}

export default Chatbot