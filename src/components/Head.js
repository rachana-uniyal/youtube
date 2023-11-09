import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import { YOUTUBE_SEARCH_API} from '../utils/constants'

const Head = () => {

    const [searchQuery, setSearchQuery] = useState("")
    const [suggestions, setSuggestions] = useState([])
    const [showSuggestions, setShowSuggestions] = useState(false)

    useEffect(()=>{
        // calling api after 200ms
       const timer =  setTimeout(()=>getSearchSuggestion(),200)

       return () => {
        clearTimeout(timer)
       }
    },[searchQuery])

    const getSearchSuggestion = async ()=>{
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery)
        const json = await data.json()
        console.log(json)
        setSuggestions(json[1])
    }

    const dispatch = useDispatch()
    const toggleMenuHandler = () =>{
        dispatch(toggleMenu())
    }

  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
    <div className='flex col-span-1'>
        <img 
        onClick={()=> toggleMenuHandler()}
        className='h-8 cursor-pointer'
        alt="menu"
        src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"/>
        <img 
        className='h-14 mx-2'
        alt="youtube-logo"
        src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg"/>
    </div>
    <div className='col-span-10 px-12'>
        <input 
        className="w-1/2 border border-gray-400 p-2 rounded-l-full" 
        type="text"
        value={searchQuery} 
        onChange={(e)=> setSearchQuery(e.target.value)}
        onFocus={()=> setShowSuggestions(true)}
        onBlur={()=> setShowSuggestions(false)}
        />
        <button className="border border-gray-400 p-2 rounded-r-full">search</button>
        {showSuggestions && <div className='absolute bg-white px-2 py-2 w-[26.5rem] shadow-lg rounded-lg border border-gray-200'>
            <ul>
            {suggestions.map((suggestion) =>
            <li className='py-2 px-3 shadow-sm hover:bg-gray-100'>{suggestion}</li>
            )}
            </ul>
        </div>
        }
    </div>
    
    <div className='col-span-1'>
        <img
        className='h-8'
        alt="user-icon"
        src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjkzNy1hZXctMTM5LWtsaGRkM2FuLmpwZw.jpg"/>
    </div>
    </div>
  )
}

export default Head