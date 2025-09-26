import React from 'react'
import {useTypewriter,Cursor} from 'react-simple-typewriter';

function Write(){
    const [text]= useTypewriter({
        words:['Full Stack Developer','Problem Solver',],
        loop:true,
    });
    return (
        <>
        <span>
            <span>{text}</span>
        <Cursor/></span></>
        
    )
}

export default Write;