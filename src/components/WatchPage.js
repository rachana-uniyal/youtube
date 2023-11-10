import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import { useSearchParams } from 'react-router-dom'
import CommentsContainer from './CommentsContainer'
import LiveChat from './LiveChat'

const WatchPage = () => {

  const [searchParams] = useSearchParams()
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(closeMenu())
  },[])

  return (<div className='flex flex-col w-full'>
    <div className='px-5 flex w-full'>
      <div>
        <iframe width="900" 
        height="400"
        src={"https://www.youtube.com/embed/"+searchParams.get("v")}
        title='Youtube Video Player'
        allow='autoplay'
        allowFullScreen
        >
        </iframe>
      </div>
      <div className='w-full'>
        <LiveChat/>
      </div>
    </div>
    <CommentsContainer/>
    </div>
  )
}

export default WatchPage