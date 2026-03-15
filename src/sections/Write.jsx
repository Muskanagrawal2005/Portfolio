import React from 'react'
import {useTypewriter,Cursor} from 'react-simple-typewriter';

function Write(){
    const [text]= useTypewriter({
        words:['Muskan Agrawal','a Full Stack Developer','a Problem Solver',],
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