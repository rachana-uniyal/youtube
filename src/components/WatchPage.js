import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import { useSearchParams } from 'react-router-dom'

const WatchPage = () => {

  const [searchParams] = useSearchParams()
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(closeMenu())
  },[])

  return (
    <div className='px-5'>
      <iframe width="900" 
      height="400"
      src={"https://www.youtube.com/embed/"+searchParams.get("v")}
      title='Youtube Video Player'
      allow='autoplay'
      allowFullScreen
      >
      </iframe>
    </div>
  )
}

export default WatchPage