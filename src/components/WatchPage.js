import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import { useSearchParams } from 'react-router-dom'
import CommentsContainer from './CommentsContainer'

const WatchPage = () => {

  const [searchParams] = useSearchParams()
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(closeMenu())
  },[])

  return (<div className='flex flex-col'>
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
    <CommentsContainer/>
    </div>
  )
}

export default WatchPage