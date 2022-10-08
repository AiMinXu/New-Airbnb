import LoginAndRegister from '@/components/app-login';
import React, { memo } from 'react'
import { useLocation } from 'react-router-dom';
import { LoginWrapper } from './style'




const Login = memo(() => {
  const location = useLocation()
  const path = location.pathname
  console.log(path);
  return (
    <LoginWrapper>
      <LoginAndRegister path={path} />
    </LoginWrapper>
  )
})

export default Login
