import React from 'react'
import { Navigate } from 'react-router-dom'
// import Login from '@/views/login'
// import Register from '@/views/register'

//路由懒加载，异步加载
const Home = React.lazy(() => import('@/views/home'))
const Entire = React.lazy(() => import('@/views/entire'))
const Detail = React.lazy(() => import('@/views/detail'))
const Login = React.lazy(() => import('@/views/login'))
const Register = React.lazy(() => import('@/views/register'))

const routes = [
  {
    path: "/",
    element: <Navigate to='/home' />
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/entire",
    element: <Entire />
  },
  {
    path: "/detail",
    element: <Detail />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
]

export default routes
