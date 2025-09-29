"use client"
import React from 'react'
import { SlidingDiv } from './SlidingDiv'
import { text } from 'stream/consumers'


function Heading(text:any) {
  return (
    <SlidingDiv direction='left'>
        <h1 className="text-center p-6 font-bold text-3xl">
            {text}
        </h1>
    </SlidingDiv>
  )
}

export default Heading