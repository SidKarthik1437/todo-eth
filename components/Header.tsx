import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
        <div className='flex w-full h-14 bg-bg shadow items-center justify-between px-5'>
            <span className='text-3xl text-white font-bold tracking-wide'>Todo</span>
            <button className='w-20 h-8 bg-btn rounded text-lg font-extrabold text-bg antialiased hover:text-yellow-300 transition-all duration-150 hover:-translate-y-[2px] hover:shadow'>Connect</button>
      </div>
    )
  }
}
