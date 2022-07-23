import React from 'react'
import Button from '@mui/material/Button';


type Props = {
  userName: string
  name : string
}

const Gan = (props: Props) => {
  return (
    <div >
        <h3 >아이유님의 이미지 추가 </h3>
        <div style = {{display: 'flex', flexDirection:'row'}}>        
        <table>
            <tbody>
                <tr>
                    <td>
                        <img style={{width: 300}} src = "https://w.namu.la/s/59bbf73b123d0f9f693be3c3de9506b24a1f2a3067b4ffd0207a3a08eee32d750ebf1ca3e33084aa3bbcd6916bd0a8a187cc4556b87fa269c25f1a7ff3ea279f5c05cf6ea03bc13849aa0457e225a31427aded2db180bed9d52ead4f2ea9a7ea0b451cbdfb0e0ba59120e6c3da69b1a8" alt='logo'/>
                    </td>
                </tr>
                <label><input type = "submit" value="Add"/></label>
            </tbody>
        </table>
              
        <div style = {{display: 'flex', flexDirection:'row'}}>        
        <table>
            <tbody>
                <tr>
                    <td>
                        <img style={{width: 200}} src = "https://cdn-icons-png.flaticon.com/512/271/271226.png" alt='logo'/>
                    </td>
                </tr>                
            </tbody>
        </table>
        </div> 
        
        <div >
        <h3>캐릭터화된 이미지</h3>
        <table>
            <tbody>
                <tr>
                    <td>
                        <img style={{width: 300}} src = "https://w.namu.la/s/59bbf73b123d0f9f693be3c3de9506b24a1f2a3067b4ffd0207a3a08eee32d750ebf1ca3e33084aa3bbcd6916bd0a8a187cc4556b87fa269c25f1a7ff3ea279f5c05cf6ea03bc13849aa0457e225a31427aded2db180bed9d52ead4f2ea9a7ea0b451cbdfb0e0ba59120e6c3da69b1a8" alt='logo'/>
                    </td>
                </tr>
                
            </tbody>
        </table>
        </div>

    </div>

    </div>
  )
}

export default Gan