import LoginAndRegister from '@/components/app-login'
import React, { memo } from 'react'
import { useLocation } from 'react-router-dom'
import { RegisterWrapper } from './style'

const Register = memo(() => {
  const location = useLocation()
  const path = location.pathname
  return (
    <RegisterWrapper>
      <LoginAndRegister path={path} />
    </RegisterWrapper>
  )
})

export default Register
