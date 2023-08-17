import React from 'react'



const Our_team = (props) => {
    return (
        <div className=' text-white'>
            <div className='flex flex-col items-center'><img src={props.img} className='rounded-full border-double border-4 border-white-100 hover:border-dotted'></img></div>
            <div className='text-center'>{props.title}</div>
        </div>
    )
}

export default Our_team