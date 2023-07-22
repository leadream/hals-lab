import React from "react";

function Link ({ children, to }: { children: React.ReactNode, to: string }) {
  return (
    <li className="mb-2">
      <a
        className='flex gap-2 font-md hover:underline'
        href={to}
        target='_blank'
        rel='noopener noreferrer'
      >
        { children }
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-3.5"><rect width="256" height="256" fill="none"/><line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="144 56 216 128 144 200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
      </a>
    </li>
  )
}

export default Link
