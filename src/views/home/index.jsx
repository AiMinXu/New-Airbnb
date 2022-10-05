import React, { memo, useEffect } from 'react'
import xamRequest from '@/services'
const Home = memo(() => {
  useEffect(() => {
    xamRequest.get({
      url: '/home/highscore'
    }).then(res => {
      console.log(res);
    })
  }, [])
  return (
    <div>Home</div>
  )
})

export default Home
