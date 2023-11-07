import React from 'react'
import Button from './Button'

function ButtonList() {
  return (
    <div className='flex'>
        <Button name="All"/>
        <Button name="Songs"/>
        <Button name="Comedy"/>
        <Button name="Cooking"/>
        <Button name="Live"/>
        <Button name="News"/>
    </div>
  )
}

export default ButtonList