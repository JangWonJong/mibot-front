import React from 'react'
import styles from '@/styles/Login.module.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from 'next/link';

export default function Login() {
  return (
    <div className={styles.container}>
            <h1 >Login</h1>
            <div>
            <TextField
              margin="normal"
              required
              fullWidth
              id=""
              label="이메일"
              name="userid"
              autoComplete="userid"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="비밀번호"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            </div>
            <div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 1 }}
            >
              로그인
            </Button>
            </div>
            <div>
            <Link href='/auth/register' >
                <h5 style={{ marginTop: "0.5rem",textAlign:"end",color:"#5e5ee6",cursor:"pointer" }}>
						회원가입
            </h5>
            </Link>
            <Link href="/auth/googleLogin">
                <Button 
                  fullWidth
                  variant="contained"
                  sx={{ mt: 0.5, mb: 0 }}
                  >
                  Google 로그인                  
                </Button>
            </Link>
            </div>
            <div>
                <h5>계속 진행하면 mibot의 서비스 약관 및 개인정보 보호정책에 동의한 것으로 간주됩니다.</h5>
            </div>

        
    </div>
  )
}