import React from 'react'

export default function Hero () {
  return (
    <div className="flex gap-2 mb-6">
      <img src="/avatar.png" className="inline-block h-12 w-12 rounded-full ring-2 ring-white"/>
      <div>
        <h3 className='text-xl font-medium'>
          Hal's lab
        </h3>
        <p className="text-slate-700 text-sm">Make something useless but interesting</p>
      </div>
    </div>
  )
}
