import React, {useState, useEffect} from 'react'
import Login from '@/components/auth/Login'
import { NextPage } from 'next'
import {useAppDispatch, useAppSelector} from '@/hooks'
import { loginRequest, LoginState, LoginUser, UserLoginInput } from '@/modules/users/login'
import { AppState } from '@/modules/store'

const LoginPage: NextPage = () => {
  const [loginUser, setLoginUser] = useState<UserLoginInput>({username : '', password: ''})
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
    dispatch(loginRequest(loginUser))
    console.log(' 모듈에 저장된 로그인값: '+JSON.stringify(loginedUser))
  }
  
  return (
    <div>
      <Login handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
)}
export default LoginPage