import React from 'react'

export default function Square({winner , playMove , i , j , value}){
    // console.log(props.key)
    // 
    return (
        <button disabled={winner?true:false} className='square' onClick={()=>{playMove(i , j)}} >{value}</button>
    );
}