import React from 'react'

const CommentsData = [{name:'Rachana', comment:"that's great!", replies:[]},
{name:'Rachana', comment:"that's great!", replies:[]},
{name:'Rachana', comment:"that's great!", replies:[
  {name:'Rachana', comment:"that's great!", replies:[]},
  {name:'Rachana', comment:"that's great!", replies:[]},
  {name:'Rachana', comment:"that's great!", replies:[
    {name:'Rachana', comment:"that's great!", replies:[]},
    {name:'Rachana', comment:"that's great!", replies:[]},
    {name:'Rachana', comment:"that's great!", replies:[]}]}]},
{name:'Rachana', comment:"that's great!", replies:[]}
]

const Comment = ({data}) =>{
  const {name, comment, replies} = data
  return <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg my-2'>
          <img  className='w-8 h-8' alt="user" src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjkzNy1hZXctMTM5LWtsaGRkM2FuLmpwZw.jpg"/>
          <div className='px-3'>
            <p className='font-bold'>{name}</p>
            <p>{comment}</p>
          </div>
        </div>
}

const CommentsList = ({comments}) =>{
    return comments.map((comment, index)=> 
    <div key={index}>
      <Comment  data={comment}/>
      <div className='pl-5 border border-l ml-5'>
        <CommentsList comments={comment.replies}/>
    </div>
    </div>)
}

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
      <h1 className='text-2xl font-bold'>Comments:</h1>
      <CommentsList comments={CommentsData}/>
    </div>
  )
}

export default CommentsContainer