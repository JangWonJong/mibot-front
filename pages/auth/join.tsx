import React, {useState, useEffect} from 'react'
import Register from '@/components/auth/Join'
import { NextPage } from 'next'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { joinRequest, UserState, User, UserInput } from '@/modules/users/join'
import { AppState } from '@/modules/store'


const RegisterPage=()=> {
  const [loginUser, setLoginUser] = useState<UserInput>({username:'', password:'', email:'', name:'', address:'', birth:'', tel:''})
  const dispatch = useAppDispatch()

  const {isLoggined, loginedUser} = useAppSelector((state: AppState) => state.login || {})
  const handleChange = (e: React.FormEvent<HTMLTextAreaElement | HTMLInputElement>)=> {
    e.preventDefault()
    const { name ,value } = e.currentTarget
    setLoginUser({
      ...loginUser, [name]: value
    })
  }
  //const {isLoggined, loginedUser} = useSelector((state: RootStates) => state.login || {})
  
  const handleSubmit = (e:any) => {
    e.preventDefault()
    console.log(`로그인 정보 ${JSON.stringify(loginUser)}`)
    dispatch(joinRequest(loginUser))
    console.log(' 모듈에 저장된 로그인값: '+JSON.stringify(loginedUser))
  }
  
  return (
    <div>
      <Register handleChange={handleChange} handleSubmit={handleSubmit}/>
    </div>
)  
}


export default RegisterPage
